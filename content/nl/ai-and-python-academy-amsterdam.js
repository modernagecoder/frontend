'use strict';
// AI and Python Academy, Amsterdam (ag- spoke of the Dutch academy hub).
// Spine: the Dutch government's Algoritmeregister, where Gemeente Amsterdam
// publishes 73 of its algorithms with their purpose, data, human involvement
// and risks. Four entries are read closely (Parkeercontrole, Public Eye,
// Vroegsignalering, ChatAmsterdam), and every project on the ladder ends with
// an entry of the same shape. The 2020 "first register in the world, with
// Helsinki" claim is left out: its primary page could not be read. The hub owns
// the AI factory and the SLO figures; the cg Amsterdam pages own the city
// statistics, the districts and the schools. Neither is re-argued here.

module.exports = {
  cluster: 'ag',
  slug: 'ai-and-python-academy-amsterdam',
  code: 'aam',
  accent: '#994975',
  accentRationale: 'Amsterdam academy: a deep rose from the solver, more than twenty-five units from every page it links to, the Amsterdam, Amstelveen and Noord-Holland pages and both academy pages among them, with an unlinked Eindhoven district as its nearest neighbour',
  pageType: 'market',
  market: { name: 'Netherlands', iso: 'NL', dial: '+31', lang: 'en-NL', locale: 'en_NL', geoRegion: 'NL', brandTag: 'Netherlands', phonePlaceholder: '6 XXXX XXXX', minDigits: 9 },
  routeLabel: 'AI and Python Academy, Amsterdam',
  title: 'AI and Python Academy, Amsterdam | Build Real AI',
  description: 'Amsterdam publishes 73 of its algorithms in a public register, with their data, risks and human checks. Learn to build AI that way, live online for ages 6 to 67.',
  ogDescription: 'Parking scan cars, crowd counters, a poverty early-warning system and a staff chatbot: Amsterdam writes down how each works and how each can fail. A live online AI track that teaches the same habit.',
  twitterDescription: 'Build AI you can explain: Python, data, models and agents, live online from Amsterdam for ages 6 to 67.',
  pageName: 'AI and Python Academy for Students in Amsterdam',
  webPageDescription: 'Live online Python, data, machine learning and AI agent classes for learners in Amsterdam aged 6 to 67, with every project documented the way the city documents its own algorithms.',
  courseDescription: 'A live online programme for learners in Amsterdam aged 6 to 67 that runs from Python written by hand through data, models with a measured error and AI agents, and ends every project with a public write-up of its purpose, data, human checks and risks.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'AI and Python Academy, Netherlands', href: '/ai-and-python-academy-netherlands' }],
  crumbLabel: 'Amsterdam',
  navLinks: [
    { href: '#register', label: 'The register' },
    { href: '#entries', label: 'Four entries' },
    { href: '#ladder', label: 'The ladder' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Amsterdam &middot; Live online &middot; Ages 6 to 67',
  h1: 'AI and Python classes in Amsterdam, built to be explained',
  lede: 'The City of Amsterdam uses algorithms to check parked cars, count crowds, spot households slipping into debt and help its own staff write. It also writes each of them down in public. In the Dutch government\'s Algoritmeregister, Gemeente Amsterdam has 73 entries, and each one states what the system is for, what data it uses, where a person steps in and what can go wrong. That is an unusual thing for a city to publish, and it is exactly the habit most AI courses never teach. A model that works is half a project. The other half is a plain account of what it does, how well, who checks it and how someone it gets wrong can put that right. This page teaches both halves, from a child\'s first program to an adult\'s working agent, live online for Amsterdam learners.',
  secondaryCta: { href: '#entries', label: 'Read four of the entries' },
  wa: 'Hello Modern Age Coders, I want a free class for a learner in Amsterdam, on the AI and Python track.',
  heroNote: 'Live teaching since 2020 &middot; over 10,000 students &middot; no recorded lessons, ever',
  spec: [
    ['Who', 'Amsterdam learners from 6 to 67'],
    ['What', 'Python, data, models, agents'],
    ['Habit', 'Every project ends with a public write-up'],
    ['How', 'Live video with one teacher'],
    ['Group size', '5 to 10, or one to one'],
    ['When', 'Dutch afternoons, evenings, weekends'],
    ['Language', 'English, with Dutch school words kept'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders teaches Amsterdam learners aged six to sixty-seven a live online AI and Python track: Python typed by hand, then real data, then models whose error is measured, then agents whose mistakes show. Every project finishes with a short public write-up in the shape the City of Amsterdam uses for its own 73 entries in the national Algoritmeregister: purpose, data, human involvement, risks and how to object. Classes are in English, in groups of five to ten or one to one. The first lesson is free; after it, a group place costs USD 100 a month and one-to-one tuition USD 150.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for three ages in Amsterdam',
    lede: 'One for a child meeting AI for the first time, one for a teenager ready to train real models, one for the adult who uses or builds language-model tools at work. Each card opens the course itself, with syllabus and timetable.',
    items: [
      { course: 'ai-literacy-for-kids-course', code: 'AMS / 01', title: 'AI Literacy for Kids', note: 'What a chatbot is, why it can be confidently wrong, and the questions a child should ask before believing one: the same risks the city names for its own staff assistant, in words a ten-year-old uses.' },
      { course: 'ai-ml-masterclass-teens', code: 'AMS / 02', title: 'AI and Machine Learning for Teens', note: 'Python first, then statistics, then models the teenager trains and tests, each one finished with a written account of its data, its error and who it could treat unfairly.' },
      { course: 'complete-generative-ai-masterclass-college', code: 'AMS / 03', title: 'Generative AI: LLMs, RAG and Agents', note: 'How language models work, how to ground them in documents you control, and how to build an assistant whose risks are written down before anyone relies on it.' }
    ]
  },

  sections: [
    {
      id: 'register', tint: 'tint', eyebrow: 'The register',
      h2: 'Seventy-three algorithms, written down in public',
      lede: 'The Algoritmeregister is where Dutch government organisations publish information about the algorithms they use in their work. It is the most useful teaching document about applied AI in the country, and almost nobody outside government reads it.',
      body: [
        { kind: 'two',
          left: [
            'The register is the responsibility of the Ministry of the Interior, working with the <strong>Autoriteit Persoonsgegevens</strong> as the algorithm supervisor, and its first version went live in <strong>December 2022</strong>. Its stated purpose is to make algorithms findable, to explain them better and to make their use and impact understandable. On 11 September 2026 it held <strong>1,553</strong> algorithm descriptions. Publishing is not yet compulsory for government bodies; the register says plainly that the obligation is coming.',
            'The register focuses on <strong>impactvolle algoritmes</strong>, those with real effects on people, including high-risk AI systems, and lists everything else as overige algoritmes. Each entry carries a status: in use, in development or out of use.'
          ],
          right: [
            '<strong>Gemeente Amsterdam</strong> has 73 entries. They range from the scan cars that enforce parking to object recognition on bridges and quays, crowd counting, systems that decide income brackets for poverty support, a summariser for legal objection advice and a generative AI assistant for municipal staff. The city once ran a register of its own; its old address now forwards to the city\'s page in the national one.',
            'For a student, the value is the format. Every entry answers the same questions under the same headings, general information, responsible use and how it works, and each question is one a student project should answer too. Most coursework never asks them.'
          ] },
        { kind: 'table', mt: true, caption: 'Four Gemeente Amsterdam entries in the Algoritmeregister, as read on 11 September 2026', head: ['Entry', 'What it does', 'Category and status', 'Where a person steps in'], rows: [
          ['Fiscaal handhaven: Parkeercontrole', 'Scan cars read number plates and check parking rights in the Nationaal Parkeerregister', 'Impactvol, in use', 'Controllers review the images for special situations before a fine'],
          ['Public Eye', 'Counts pedestrians in camera images to manage crowding at Arena Boulevard, the Marineterrein and the Dam', 'Impactvol, out of use', 'Staff check whether the algorithm rightly recognises people as people'],
          ['Vroegsignalering gemeente Amsterdam', 'Links creditors\' payment-arrears notifications to poverty-support data so help arrives early', 'Impactvol, in use', 'The matching is automated, but a person has to start it'],
          ['ChatAmsterdam', 'A generative AI assistant for writing, summarising, structuring and translating', 'Overige, in use', 'The user decides whether an answer is used, changed or ignored']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://algoritmes.overheid.nl/nl/footer/over" rel="noopener" target="_blank">Algoritmeregister, over het register</a> (responsibility, supervisor, December 2022, voluntary publication); <a class="ag-inline-link" href="https://algoritmes.overheid.nl/nl" rel="noopener" target="_blank">register home page</a> (1,553 descriptions); <a class="ag-inline-link" href="https://algoritmes.overheid.nl/nl/organisatie/gemeente-amsterdam" rel="noopener" target="_blank">Gemeente Amsterdam in the register</a> (73 entries, categories, statuses). Read 11 September 2026. The register is in Dutch; entry names are quoted as published. We have no connection with the City of Amsterdam or the register.' }
      ]
    },
    {
      id: 'entries', tint: 'deep', eyebrow: 'Four entries, read closely',
      h2: 'What a parking scanner, a crowd counter, a debt alert and a chatbot teach a programmer',
      lede: 'Each of these entries answers the questions a good project write-up should answer. Read side by side, they are a short course in how AI systems fail and how responsible builders plan for it.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Parkeercontrole: plan for the error', p: 'Amsterdam checks more than 190,000 official parking spaces with scan cars. A camera photographs the number plate, an image-recognition algorithm reads it, and the Nationaal Parkeerregister says whether parking was paid for or a permit exists. The entry names its main risk directly: a misread plate, and a fine for someone who did nothing wrong. Human controllers review the images for special situations, and anyone fined can object in writing within 6 weeks on a website that shows the photos. The lesson: every model makes mistakes, so the correction route is part of the design.' },
          { h3: 'Public Eye: keep only what you need', p: 'The system counted how many people appeared in camera images and sent only that number to a dashboard for municipal staff, so crowding could be managed with information boards or one-way routes. The entry says the video images are deleted as soon as the people have been counted, and that only a very small number are kept, encrypted, for training. Staff checked whether the algorithm recognised people as people. It is now marked out of use. The lesson: collect the least data that answers the question, and say what happens to the rest.' },
          { h3: 'Vroegsignalering: automate, but let a person start it', p: 'Health insurers, housing corporations, energy suppliers, water companies and some government bodies notify the city when a customer falls behind on payments, under the Wet gemeentelijke schuldhulpverlening. In a system called RIS Matching those notifications are linked to the poverty department\'s data, automatically, but a person has to start each linking run. The city then tries to contact the resident within 14 days and makes a first analysis within 28. The lesson: automation that affects people\'s lives works best with a deliberate human step and a promise about what happens next.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            '<strong>ChatAmsterdam</strong> is the entry closest to what a student uses every day. It is a generative AI assistant for municipal staff, built on GPT 5.5 from OpenAI and <strong>Mistral Large 3</strong> from Mistral AI, general language models that are not trained or adapted on the city\'s internal data. Conversations are kept for 30 days and then deleted.',
            'What makes the entry worth reading is its list of risks: using the assistant as a search engine, relying on information that is wrong or out of date, and typing in confidential information or personal data. The measures include security standards, a warning when a document that may contain personal data is uploaded, and periodic evaluation. The final judgement stays with the user, who decides whether an answer is used, changed or ignored.'
          ],
          right: [
            'That list of risks is, almost word for word, what a teenager needs to understand before handing homework to a chatbot, and what an adult needs before pasting a client file into one. A student who can write the same paragraph about their own tool understands it.',
            'The entries also show that a write-up is never finished. Every entry carries a last-modified date: 13 July 2026 for parking control, 25 August 2026 for ChatAmsterdam, 2 July 2026 for Public Eye, which changed status. Models are replaced, systems are switched off, risks are found. A write-up that is not kept current describes a system that no longer exists.'
          ] },
        { kind: 'source', html: 'Sources: Algoritmeregister entries <a class="ag-inline-link" href="https://algoritmes.overheid.nl/nl/algoritme/78451490" rel="noopener" target="_blank">Fiscaal handhaven: Parkeercontrole</a>, <a class="ag-inline-link" href="https://algoritmes.overheid.nl/nl/algoritme/38748497" rel="noopener" target="_blank">Public Eye</a>, <a class="ag-inline-link" href="https://algoritmes.overheid.nl/nl/algoritme/66453169" rel="noopener" target="_blank">Vroegsignalering gemeente Amsterdam</a> and <a class="ag-inline-link" href="https://algoritmes.overheid.nl/nl/algoritme/23189993" rel="noopener" target="_blank">ChatAmsterdam</a>, each read on 11 September 2026. The lessons drawn from them are ours, not the city\'s.' }
      ]
    },
    {
      id: 'yours', tint: '', eyebrow: 'Your own entry',
      h2: 'Every project on our ladder ends with an entry like these',
      lede: 'The register\'s questions work at every level, from a child\'s guessing game to an adult\'s document assistant. Learners answer them in the README of their own repository.',
      body: [
        { kind: 'table', caption: 'The register\'s questions, asked of a student project', head: ['Question the register asks', 'What the student writes', 'Where it starts on the ladder'], rows: [
          ['What is it for?', 'One sentence on the problem, and who has it', 'Rung 1, with a first program'],
          ['What data does it use?', 'Where the data came from, what was removed and why', 'Rung 2, the data rung'],
          ['How does it work?', 'The method in plain words, and how well it performs, with the error in a real unit', 'Rung 3, models'],
          ['Where does a person step in?', 'Which decisions the program makes and which it hands back', 'Rung 4, agents'],
          ['What can go wrong?', 'The known failures, who they would affect, and what is done about them', 'Every rung'],
          ['How can someone object?', 'How a wrong result is reported and corrected', 'Rungs 4 and 5']
        ] },
        { kind: 'two', mt: true,
          left: [
            'For a child the questions are simple and still revealing. A program that guesses whether a picture shows a cat or a dog can be wrong; who would mind, and how would they tell you? Children who answer that at nine are not easily impressed by a chatbot at fourteen.',
            'For a teenager at an Amsterdam havo, vwo or international school, the write-up becomes the part of a portfolio a university reads first. A model with an honest paragraph about its data and its failures says more than a model with a higher score and no explanation.'
          ],
          right: [
            'For adults the register is not an exercise. Many people in Amsterdam work for organisations that already publish in it, or will have to, and the questions arrive at their desk. Knowing how to answer them, and how to build systems that can be answered for, is a working skill.',
            'The general coding page, <a class="ag-inline-link" href="/coding-classes-in-amsterdam">coding classes in Amsterdam</a>, covers the city\'s districts and schools, and <a class="ag-inline-link" href="/coding-classes-in-amstelveen">Amstelveen</a> has its own page. The <a class="ag-inline-link" href="/ai-and-python-academy-netherlands">national academy page</a> covers the country\'s picture. This page covers the AI track, and the habit that finishes every project on it.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The five rungs',
    h2: 'From a first program to an agent with its own write-up',
    lede: 'Each rung depends on the one below it. A learner who skips the data rung cannot say what their model learned from, and one who skips the models rung cannot say how often their agent is wrong.',
    table: { caption: 'The five rungs for an Amsterdam learner, and what the write-up adds at each', head: ['Rung', 'Usually', 'The learner builds, then writes'], rows: [
      ['1. Python by hand', 'Groep 6 to 8, or any adult beginner', 'Small programs from an empty file; a first sentence on what each is for'],
      ['2. Data', 'Brugklas to the third year', 'Loads, cleans and plots a real dataset; records where it came from and what was dropped'],
      ['3. Models', 'Havo 4 to vwo 6, students, adults', 'Trains and tests a model; states its error and who it serves worst'],
      ['4. Agents', 'Upper school and beyond', 'An agent that plans and uses tools; names the decisions it may not take alone'],
      ['5. Publishing', 'At every stage', 'A public repository with the full write-up, kept up to date']
    ] },
    left: { h3: 'Why the write-up runs through every rung', ps: [
      'Writing about a program is a different skill from writing the program, and it improves the program. A learner asked where a person should step in finds the cases where the code should stop and ask. One asked what data was dropped finds the rows that would have skewed the result.',
      'The subject-by-subject order we teach in is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Where it fits in the Amsterdam school year', ps: [
      'Rung 1 suits the last years of the basisschool, kept light around the doorstroomtoets. The profielkeuze year is a good moment to test rung 2. International-school pupils following IB or IGCSE timetables fit the same rungs at the same ages.',
      'Adults usually start at rung 1 or 2 and move at their own pace, often one to one around working hours.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Eleven live courses for Amsterdam learners, placed by what they can do',
    lede: 'Three stages of life, three curricula. Every card leads to the full course with its own schedule and fee, and the free first lesson places the learner.',
    bands: [
      { num: 'I', h3: 'Children, groep 3 to 8', sub: 'Real code early, and a clear idea of what AI can and cannot do', courses: [
        { code: 'AMS / KIDS / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'Typed Python for children of nine to twelve: pictures drawn in code, simple games and a small program that learns from examples and can be caught out.' },
        { code: 'AMS / KIDS / 02', slug: 'ai-literacy-for-kids-course', title: 'AI Literacy for Kids', blurb: 'How AI tools produce answers, when not to trust them, and what personal information never goes into a chat box.' },
        { code: 'AMS / KIDS / 03', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe Coding for Kids', blurb: 'A child asks an AI tool for a game, then finds and fixes what it got wrong. The fixing teaches more than the asking.' }
      ] },
      { num: 'II', h3: 'Teenagers, havo, vwo and international schools', sub: 'From Python to trained models, each with an honest account of itself', courses: [
        { code: 'AMS / TEEN / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and Machine Learning for Teens', blurb: 'The main teenage track: Python, statistics, classical models, neural networks, images and text, each project documented and defended.' },
        { code: 'AMS / TEEN / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data Science for Teens', blurb: 'Where every model begins: reading, cleaning, joining and plotting real data, and recording what was removed and why.' },
        { code: 'AMS / TEEN / 03', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'Two years from a blank file to well-built programs, the right start for a teenager who has not yet written real code.' },
        { code: 'AMS / TEEN / 04', slug: 'teens-ai-tools-mastery-course', title: 'AI Tools for Teens', blurb: 'Using AI tools well for projects and study, including what to check, what to keep private and when a tool is the wrong choice.' }
      ] },
      { num: 'III', h3: 'Students and working adults', sub: 'Language models, machine learning and tools that hold up at work', courses: [
        { code: 'AMS / PRO / 01', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI: LLMs, RAG and Agents', blurb: 'How large language models are built and grounded, and how to wrap them in agents with limits, logs and a written account of their risks.' },
        { code: 'AMS / PRO / 02', slug: 'ai-ml-masterclass-complete-college', title: 'AI and Machine Learning Masterclass', blurb: 'The complete machine learning route at adult pace, from classical methods to deep learning, with evaluation that stands up to questions.' },
        { code: 'AMS / PRO / 03', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Data and AI Analytics for Non-Programmers', blurb: 'Spreadsheets, dashboards and AI assistants for people who do not code, with clear rules on what data may go where.' },
        { code: 'AMS / PRO / 04', slug: 'python-ai-automation-masterclass-college', title: 'Python and AI Automation', blurb: 'Scripts that take over the repetitive part of a job, with every automated step logged and every decision point marked.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the classes run',
    h2: 'An Amsterdam timetable, taught from India',
    lede: 'Amsterdam moves between CET and CEST each year and India stays on one time, so the teacher is four and a half hours ahead in winter and three and a half in summer. Late afternoons and weekends work easily, weekday evenings are arranged case by case, and the regular slot is agreed on the free lesson rather than promised here.',
    slots: [
      { time: 'After school', l: 'Amsterdam time, late afternoon. Best for children and younger teenagers; evening for the teacher.' },
      { time: 'Evening', l: 'Amsterdam time, after dinner, by arrangement. For older teenagers, students and adults after work.' },
      { time: 'Weekend', l: 'Saturday or Sunday, Amsterdam time. The simplest choice for working adults and families with full weekdays.' }
    ],
    cells: [
      { h3: 'The free first lesson', p: 'A proper lesson on a real problem. Watching how the learner works tells the teacher where to start, more reliably than any form.' },
      { h3: 'Groups of five to ten', p: 'Grouped by ability across many countries, so an advanced Amsterdam learner is stretched and a beginner has company at their level.' },
      { h3: 'One to one if preferred', p: 'For irregular working hours, a narrow goal, an exam year, or the Copilot Studio courses, which are only taught individually.' },
      { h3: 'Both screens shared', p: 'The teacher sees the learner\'s code as it is written, so misunderstandings are fixed while they are small.' },
      { h3: 'English, with Dutch terms', p: 'Lessons are in English. Groep, havo, vwo and profielkeuze keep their Dutch names, as Amsterdam families use them.' },
      { h3: 'A repository from day one', p: 'Each lesson\'s work goes into the learner\'s own GitHub repository, with its write-up beside it.' }
    ]
  },

  projectsH2: 'Projects students left running',
  projectsLede: 'Four things our students built and published at addresses anyone can visit. Try them and see how they behave; more are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Shown exactly as posted on Google. We do not write, edit or pay for reviews.',

  fees: {
    h2: 'What it costs',
    lede: 'Monthly, in US dollars, at the same two rates as every country outside India. No Amsterdam surcharge, no registration fee, no yearly contract. Copilot Studio courses are one to one only and use that rate.',
    free: ['A taught lesson, not a pitch', 'Sets the starting rung', 'No payment details asked'],
    group: ['Five to ten learners at one level', 'The same live teacher throughout', 'Weekly review of built work', 'Certificate at the end'],
    one: ['A teacher for one learner', 'Pace and content fitted to the goal', 'The only format for Copilot Studio']
  },

  faq: {
    eyebrow: 'Questions from Amsterdam',
    h2: 'What Amsterdam families and adults ask before the first lesson',
    items: [
      { q: 'What is the Algoritmeregister?', a: 'A public register where Dutch government organisations describe the algorithms they use: what each is for, what data it uses, where a person is involved and what the risks are. The Ministry of the Interior is responsible for it, it went live in December 2022, and on 11 September 2026 it held 1,553 descriptions, 73 of them from Gemeente Amsterdam.' },
      { q: 'Why does an AI course talk about a government register?', a: 'Because its entries are the best public examples of the part of AI work most courses skip: explaining a system, naming its failures and planning for them. Our students write the same kind of account for every project.' },
      { q: 'Is my child too young for AI?', a: 'Not for the right version of it. From about groep 5 children can learn what AI tools do, why they are sometimes wrong, and what not to type into them. Typed Python starts from about groep 6 to 8, and models come later, once code and data are familiar.' },
      { q: 'We are at an international school. Does the ladder still fit?', a: 'Yes. The rungs follow what a learner can do rather than a national curriculum, and lessons are in English. A pupil following IB or IGCSE joins at the rung the free lesson shows.' },
      { q: 'I use AI tools at work. What should I learn first?', a: 'Usually Python automation or data analytics, depending on your job, together with the habit this page describes: knowing what a tool does with your data, where it can be wrong, and who checks it. Adults often study one to one.' },
      { q: 'Do students build chatbots like ChatAmsterdam?', a: 'Older students build smaller assistants on top of language models in the generative AI course, and write down their risks the way the ChatAmsterdam entry does: wrong or outdated answers, use as a search engine, and personal data typed in.' },
      { q: 'Is there a connection with the City of Amsterdam?', a: 'No. We quote the city\'s published register entries because they are public and useful. We have no relationship with the city, the register or any school in Amsterdam.' },
      { q: 'What does it cost?', a: 'USD 100 a month for a group place, USD 150 a month for one-to-one lessons, billed in US dollars. There is no joining fee or annual contract, and the first lesson is free.' },
      { q: 'Where are the teachers?', a: 'In India, teaching live over video. The gap with Amsterdam is three and a half hours in summer and four and a half in winter, which is why late afternoons and weekends are the easiest slots.' },
      { q: 'What happens after I send the form?', a: 'We call at a Dutch hour to arrange the free lesson. Nothing is charged and no place is booked until the family has seen that lesson and decided.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More pages for Amsterdam and the Netherlands',
    lede: 'This page covers one track and one habit. These cover the rest.',
    items: [
      { href: '/coding-classes-in-amsterdam', label: 'Coding classes in Amsterdam', p: 'The city page for general programming, with its districts and schools.' },
      { href: '/coding-classes-in-amstelveen', label: 'Coding classes in Amstelveen', p: 'The municipality on Amsterdam\'s southern edge, with a page of its own.' },
      { href: '/coding-classes-in-noord-holland', label: 'Coding classes in Noord-Holland', p: 'Every municipality in the province around the capital.' },
      { href: '/ai-and-python-academy-netherlands', label: 'AI and Python Academy, Netherlands', p: 'The national academy page, with the school figures and the country\'s AI investment.' },
      { href: '/ai-and-python-academy-groningen', label: 'AI and Python Academy, Groningen', p: 'The academy page built around a university AI degree.' },
      { href: '/learn-to-build-ai', label: 'Learn to Build AI', p: 'Why we teach building AI systems rather than only using them.' }
    ]
  },

  start: {
    h2: 'Book the free first lesson',
    lede: 'Leave a phone number and we will call at a Dutch hour. The first session is taught by a real teacher on real material, and at the end of it we know which rung the learner starts on. Starting at the right level matters more than anything else.',
    readFirst: 'Prefer to read first? Try the <a class="ag-inline-link" href="/courses">full course list</a>, <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the thinking behind this family of pages at <a class="ag-inline-link" href="/learn-to-build-ai">Learn to Build AI</a>.',
    note: 'WhatsApp is free from the Netherlands and usually quickest. The number is Indian; we have no office, address or premises in Amsterdam or anywhere in the country.',
    formNote: 'No card, no commitment. One call to arrange the lesson.'
  },

  footer: {
    cols: [
      { h4: 'Amsterdam', links: [
        { href: '/coding-classes-in-amsterdam', label: 'Coding classes in Amsterdam' },
        { href: '/coding-classes-in-amstelveen', label: 'Amstelveen' },
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
    bottomRight: 'Teaching Amsterdam on CET and CEST'
  },

  personalityCss: `
.ag-root.ag-aam .ag-hero-grid { gap: clamp(1.4rem, 3.8vw, 3.2rem); }
.ag-root.ag-aam .ag-hero h1 { letter-spacing: -0.025em; }
.ag-root.ag-aam .ag-capsule { border-left-width: 5px; }
.ag-root.ag-aam .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-aam .ag-band-head h3 { letter-spacing: -0.012em; }
.ag-root.ag-aam .ag-table caption { text-align: left; }
.ag-root.ag-aam .ag-spec dt { letter-spacing: 0.12em; }
.ag-root.ag-aam .ag-slots { gap: 1.4rem; }
`,

  mustMention: ['Algoritmeregister', 'Gemeente Amsterdam', '1,553', 'December 2022', 'Autoriteit Persoonsgegevens', 'impactvolle algoritmes', 'Parkeercontrole', 'Nationaal Parkeerregister', 'Public Eye', 'Marineterrein', 'RIS Matching', 'Wet gemeentelijke schuldhulpverlening', 'Mistral Large 3']
};
