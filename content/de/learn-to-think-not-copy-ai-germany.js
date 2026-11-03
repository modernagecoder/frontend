'use strict';
// Learn to think, not copy AI (ag- pillar, Germany cluster row DE012). The owner's promise as a page: we teach learners in
// Germany to think and solve problems, not to copy answers or AI output.
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md. Owner 2026-11-02: classes are live, in English only, with
// mentors who match the learner's pace and accent; pages show euro, checkout charges USD.
// Angle: what the KMK itself asks of pupils using AI (2024 recommendation, 2026 competence framework), one competition
// that bans AI outright, and an original exercise on a German legal rule (summer time) where a confident, plausible answer
// is right for 2027 and wrong for 2026. No AI tool is recommended to children.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/learn-to-think-not-copy-ai-germany/):
//  - KMK, Handlungsempfehlung für die Bildungsverwaltung zum Umgang mit Künstlicher Intelligenz in schulischen
//    Bildungsprozessen, Beschluss der Bildungsministerkonferenz vom 10.10.2024 (redaktionell überarbeitete Fassung März
//    2025), PDF fetched 3 November 2026: five Themenbereiche; "die Güte der Ergebnisse von KI und deren Wirkung auch aus
//    ethischer Perspektive einschätzen zu können"; "ein allgemeines Verbot von KI zur Bearbeitung von in häuslicher Arbeit
//    anzufertigenden Produkten ... weder zielführend und wünschenswert, noch durchhaltbar ist"; "Absprachen zur Verwendung
//    und Kennzeichnung KI-generierter Produkte"; in a presentation and defence "die versierte Koaktivität und die
//    Fähigkeit, die Ergebnisse zu reflektieren"; "Prüfungsformate, die ... die in der Aufgabe geforderte eigenständige
//    Leistung [nicht] gewährleisten, werden abgeschafft oder grundlegend weiterentwickelt"; "Leistungsbewertung ist und
//    bleibt eine pädagogische und hoheitliche Aufgabe"; SWK Impulspapier of 17.01.2024 on LLMs; "ein weitgehender Verzicht
//    auf KI-Sprachmodelle in der Grundschule und in den ersten Jahren der Sekundarstufe I, wie ihn die SWK empfiehlt" is
//    "erörterungsbedürftig"; aim of "datenschutzkonformen und kostenfreien Zugang zu LLM im schulischen Bereich".
//  - KMK-Kompetenzrahmen "Bildung in der digitalen Welt"; Aktualisierung im Kontext Künstlicher Intelligenz (2026),
//    Beschluss vom 16.10.2026, PDF fetched 3 November 2026: four terms "Mit KI bewusst umgehen", "KI kreativ anwenden",
//    "KI gezielt einsetzen", "KI aktiv mitgestalten"; six areas unchanged; 1.2.1 "reflektierten Einordnung KI-generierter
//    Ergebnisse sowie möglicher Verzerrungen"; 1.2.2 "im Abgleich mit Primärquellen"; 2.2.2 "transparente Kennzeichnung
//    KI-generierter und -überarbeiteter Beiträge"; 3.2.2 "KI-unterstützte Ergebnisse prüfen, anpassen und begründet in
//    eigene Produkte einbinden"; 5.5.1 "zentraler Konzepte maschinellen Lernens sowie deren Grenzen"; 5.5.3 "Eine
//    strukturierte, algorithmische Sequenz zur Lösung eines Problems planen und verwenden".
//  - KMK page Bildung in der digitalen Welt: strategy 2016 (fact 100). Bundeswettbewerb Mathematik: no "künstliche
//    Intelligenz zur Lösung der Aufgaben oder zur Überprüfung eigener Lösungswege" (fact 173).
//  - Sommerzeitverordnung (SoZV) para 2(1), gesetze-im-internet.de, fetched 3 November 2026: "Die mitteleuropäische
//    Sommerzeit beginnt jeweils am letzten Sonntag im März um 2 Uhr mitteleuropäischer Zeit."
//  - content/ai-tool-age-audit.json: Claude "at least 18 years old"; ChatGPT 13, "If you are under 18 you must have your
//    parent or legal guardian's permission".
// Our own: sommerzeit.py (python3 -I, 3 November 2026): "2027: 2027-03-28 2027-03-28"; "Years 2020 to 2040 where the
// answer is wrong: [2020, 2024, 2025, 2026, 2030, 2031, 2036, 2037]". The "confident answer" is written by us, not a
// quote from any AI product.
// Lesson family: check a confident rule against the definition across many cases, not just the one you tried.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const SOMMERZEIT = [
  'from datetime import date, timedelta',
  '',
  'def confident_answer(year):',
  '    # "Summer time starts on the fourth Sunday in March."',
  '    day = date(year, 3, 1)',
  '    while day.weekday() != 6:          # 6 means Sunday',
  '        day += timedelta(days=1)',
  '    return day + timedelta(weeks=3)',
  '',
  'def the_law(year):',
  '    # SoZV section 2: "am letzten Sonntag im März"',
  '    day = date(year, 3, 31)',
  '    while day.weekday() != 6:',
  '        day -= timedelta(days=1)',
  '    return day',
  '',
  'print("2027:", confident_answer(2027), the_law(2027))',
  'wrong = [y for y in range(2020, 2041) if confident_answer(y) != the_law(y)]',
  'print("Years 2020 to 2040 where the answer is wrong:", wrong)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'guide', label: 'Learn to think, not copy AI' },
  slug: 'learn-to-think-not-copy-ai-germany',
  code: 'lto',
  accent: '#6C4170',
  accentRationale: 'Think, not copy: a thoughtful plum #6C4170, apart from the violet #5B3A68 of the AI page and the browns and greens of the other guides; above 4.5:1 on the paper #FBF8F2 and its tints',
  pageType: 'market',
  priceSubject: 'coding',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Learn to think, not copy AI',
  title: 'Learn to Think, Not Copy AI: Coding Classes in Germany',
  description: 'Coding and maths classes in Germany that teach children to think, not copy AI: what the KMK asks of pupils using AI, and an exercise in checking answers.',
  ogDescription: 'Why learners in Germany should solve problems themselves before trusting an AI answer: the KMK\'s 2024 recommendation and 2026 AI framework in plain English, a competition that bans AI, and a Python exercise where a confident rule fails in 2026.',
  twitterDescription: 'Think, not copy: the KMK on AI in school, and a Python exercise in checking a confident answer.',
  pageName: 'Learn to Think, Not Copy AI',
  webPageDescription: 'A guide in English for families and learners in Germany on learning to solve problems rather than copy AI output, built from the KMK\'s 2024 recommendation on AI in schools and its 2026 AI competence framework, with an original Python exercise that tests a plausible summer-time rule against the German ordinance.',
  courseDescription: 'Live online coding and problem-solving classes in English for children and teenagers in Germany: Python, algorithms and simple AI, taught so that learners plan, test and explain their own solutions, in a group or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Think, not copy AI',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#kmk', label: 'KMK' },
    { href: '#framework', label: 'Framework' },
    { href: '#exercise', label: 'Exercise' },
    { href: '#method', label: 'Method' },
    { href: '#tools', label: 'Ages' }
  ],
  eyebrow: 'Germany &middot; Think, not copy &middot; Ages 8 to 18',
  h1: 'Learn to think, not copy AI',
  lede: 'A chatbot can produce a working answer to most homework questions in seconds. That is exactly why the habit of thinking a problem through yourself is now worth more, not less. German education ministers say much the same in their own documents. This page explains what they ask of pupils, shows in one short program how a confident answer can be right this year and wrong last year, and describes how our classes build the habit of checking.',
  secondaryCta: { href: '#exercise', label: 'Try the exercise' },
  wa: 'Hello Modern Age Coders, we are in Germany and want our child to learn to solve problems in code, not copy answers. Could we book a free first class in English?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; problem solving first, tools second, in English',
  spec: [
    ['For', 'Children and teenagers, 8 to 18'],
    ['Covers', 'Python, algorithms, simple AI'],
    ['Habit', 'Predict, test, explain'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Times', 'German afternoons and weekends'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Learning to think, not copy AI means a learner plans a solution, predicts what it will do, tests it and can explain it, and treats any AI answer as a claim to check. Modern Age Coders teaches coding and problem solving this way for children and teenagers in Germany, live online in English, in a group or one to one, starting with the Python and AI for kids course.',

  picks: {
    eyebrow: 'Courses that build the habit',
    h2: 'Three courses where thinking comes first',
    lede: 'Each starts with the learner\'s own reasoning and adds tools only when the reasoning is there.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'LTO / 01', title: 'Python and AI for kids', note: 'Ages 8 to 14. Real Python, small programs that learn from data, and the question "how would we know if it is wrong?" in every class.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'LTO / 02', title: 'Problem solving and computational thinking', note: 'Puzzles and patterns that train breaking a problem down before writing a line of code.' },
      { course: 'ai-literacy-for-kids-course', code: 'LTO / 03', title: 'AI literacy for kids', note: 'What AI is, where it fails, and how to check an answer, without needing an adult-only chatbot account.' }
    ]
  },

  sections: [
    {
      id: 'kmk',
      eyebrow: 'What German schools say',
      h2: 'What do German education ministers say about AI in learning?',
      lede: 'On 10 October 2024 the education ministers of the Länder adopted a recommendation on how schools should handle artificial intelligence. It is a careful document, and on one point it is very clear: the aim is pupils who can judge AI, not pupils who only use it.',
      body: [
        { kind: 'two',
          leftH3: 'No ban, but judgement',
          left: [
            'The recommendation states that a general ban on using AI for homework is neither useful nor desirable nor enforceable, given the world pupils live in. Instead, teachers and pupils are to agree how AI may be used and how AI-generated work is marked as such.',
            'In learning about AI, the KMK says, what matters is being able to assess the quality of AI results and their effects, including from an ethical point of view.'
          ],
          rightH3: 'Exams that show your own work',
          right: [
            'Where a pupil uses AI to make something and then presents it, the recommendation asks that the defence also assess how skilfully the pupil worked with the AI and how well they can reflect on the results.',
            'Exam formats that cannot legally guarantee the independent work a task demands are to be abolished or fundamentally reworked. Marking, the KMK adds, is and remains a task for teachers.'
          ] },
        { kind: 'p', mt: true, html: 'The document also records a disagreement worth knowing. The KMK\'s own scientific commission, the SWK, published a paper on large language models on 17 January 2024 and recommended largely doing without AI language models in primary school and the first years of lower secondary. The ministers call that recommendation one that needs discussion, given the potential of adaptive learning tools. In other words, the experts and the ministers agree that judgement matters and disagree on how early tools should arrive.' },
        { kind: 'source', html: 'Source: KMK, Handlungsempfehlung für die Bildungsverwaltung zum Umgang mit Künstlicher Intelligenz in schulischen Bildungsprozessen, Beschluss der Bildungsministerkonferenz vom 10.10.2024, revised edition March 2025, read 3 November 2026. Our English summaries; the German text is the authority.' }
      ]
    },
    {
      id: 'framework',
      eyebrow: 'The 2026 framework',
      h2: 'What does the KMK\'s 2026 AI framework expect pupils to do?',
      lede: 'On 16 October 2026 the KMK adopted an update of its competence framework Bildung in der digitalen Welt for the age of AI. The six areas from 2016 stay the same; AI is added inside them, under four headings: dealing with AI consciously, using it creatively, using it purposefully and helping to shape it. Five of the new lines describe exactly what we mean by thinking, not copying.',
      body: [
        { kind: 'table', numCols: [], caption: 'Five AI-related competences in the KMK framework of 16 October 2026, and how they look in a coding class', head: ['No.', 'The KMK\'s words', 'In plain English', 'In our classes'], rows: [
          ['1.2.1', 'reflektierte Einordnung KI-generierter Ergebnisse sowie möglicher Verzerrungen', 'Judge AI results and spot bias', 'Every answer, ours included, gets tested before it is believed'],
          ['1.2.2', 'Informationsquellen auch im Abgleich mit Primärquellen analysieren', 'Check against the original source', 'We compare a claim with the law, the data or the documentation itself'],
          ['2.2.2', 'transparente Kennzeichnung KI-generierter und -überarbeiteter Beiträge', 'Say openly what AI made', 'Learners mark any code they did not write themselves'],
          ['3.2.2', 'KI-unterstützte Ergebnisse prüfen, anpassen und begründet in eigene Produkte einbinden', 'Check, adapt, and justify what you use', 'A line of code stays only if the learner can explain it'],
          ['5.5.1', 'zentraler Konzepte maschinellen Lernens sowie deren Grenzen', 'Know how machine learning works and where it stops', 'Learners train small models and find where they fail']
        ] },
        { kind: 'source', html: 'Source: KMK-Kompetenzrahmen "Bildung in der digitalen Welt"; Aktualisierung im Kontext Künstlicher Intelligenz (2026), Beschluss der Bildungsministerkonferenz vom 16.10.2026, read 3 November 2026. The framework says it draws on the OECD and European Commission AI Literacy Framework published in 2026. The right-hand column is ours.' },
        { kind: 'p', mt: true, html: 'One more line in the framework, 5.5.3, asks pupils to plan and use a structured, algorithmic sequence to solve a problem. That is programming in all but name, and it comes before any of the AI lines in practice: a learner who cannot plan steps cannot check whether an AI\'s steps are right.' }
      ]
    },
    {
      id: 'exercise',
      tint: 'tint',
      eyebrow: 'An exercise in checking',
      h2: 'Can a confident answer be right this year and wrong last year?',
      lede: 'Our own exercise. Ask "when does summer time start in Germany?" and you will often hear a tidy rule: the fourth Sunday in March. It sounds official and it gives the right date for 2027. The German summer time ordinance (Sommerzeitverordnung, section 2) says something different: summer time begins on the last Sunday in March at 2:00. We wrote both rules in Python and compared them over twenty-one years.',
      body: [
        { kind: 'code', label: 'A confident rule against the law', lang: 'Python', code: SOMMERZEIT, note: 'Run with Python 3 on 3 November 2026, it prints <code>2027: 2027-03-28 2027-03-28</code> and <code>Years 2020 to 2040 where the answer is wrong: [2020, 2024, 2025, 2026, 2030, 2031, 2036, 2037]</code>.' },
        { kind: 'two', mt: true,
          leftH3: 'Why it fooled us in 2027',
          left: [
            'March always has 31 days, so it has either four or five Sundays. When it has four, the fourth Sunday is the last one and the tidy rule works, as it does on 28 March 2027. When March has five Sundays, the rule picks the wrong one, a week too early.',
            'In 2026, March began on a Sunday, so it had five: the rule says 22 March, the law says 29 March 2026. Over 2020 to 2040 the tidy rule fails in eight years of twenty-one.'
          ],
          rightH3: 'What the exercise teaches',
          right: [
            'Checking the answer once, for the year you happen to care about, would have confirmed a wrong rule. Checking it against the definition, over many cases, exposed it in seconds.',
            'That is the habit the KMK framework describes as checking against primary sources. The source here is a German ordinance anyone can read on gesetze-im-internet.de; the check is a few lines of Python.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 8 to 10, on paper.</strong> Take a calendar of March 2026. Circle every Sunday. Which is the fourth? Which is the last? Are they the same?',
          '<strong>Ages 10 to 13, in Python.</strong> Run the program, then change the range to 2000 to 2100 and count the wrong years. Is it roughly the same share?',
          '<strong>Ages 13 and up.</strong> The ordinance says summer time ends on the last Sunday in October. Write <code>end_of_summer_time(year)</code> and test it the same way: against the definition, over many years, before you trust it.'
        ] }
      ]
    },
    {
      id: 'contests',
      eyebrow: 'Competitions',
      h2: 'Are AI tools allowed in German maths and coding competitions?',
      lede: 'It depends on the competition, and the rules are getting sharper.',
      body: [
        { kind: 'two',
          leftH3: 'A flat no in the Bundeswettbewerb Mathematik',
          left: [
            'The Bundeswettbewerb Mathematik, a national maths competition for pupils on the way to the Abitur, lists using artificial intelligence to solve the problems, or even to check your own solution, among the things participants must not do.',
            'A pupil who has only ever checked work with a chatbot will find that rule hard. One who checks by testing cases, as in the exercise above, is already used to it.'
          ],
          rightH3: 'Where building AI is the task',
          right: [
            'The opposite case is the Bundeswettbewerb Künstliche Intelligenz (BWKI), where pupils must build a project with machine-learning methods. Our page on <a class="ag-inline-link" href="/ai-and-machine-learning-classes-in-germany">AI and machine learning in Germany</a> covers it.',
            'Both rules point the same way: a competition wants to see the pupil\'s own thinking, whether the subject is proofs or models.'
          ] }
      ]
    },
    {
      id: 'method',
      eyebrow: 'Our method',
      h2: 'How do our classes teach children to think instead of copying?',
      lede: 'The owner of Modern Age Coders promises families the same teaching anywhere in the world: we teach learners how to think and solve problems, not how to copy answers or AI output. In a live class that promise becomes five routines.',
      body: [
        { kind: 'ol', items: [
          '<strong>Say it before you run it.</strong> Before any program runs, the learner predicts the output out loud. A wrong prediction is the most useful moment in the class.',
          '<strong>Plan in words first.</strong> The learner writes the steps in plain English, then turns them into code. The KMK\'s framework calls this a structured, algorithmic sequence.',
          '<strong>Test the edges.</strong> The first day of a month, an empty list, a five-Sunday March. Learners choose the awkward cases themselves.',
          '<strong>Explain every line.</strong> Code the learner cannot explain is deleted and written again, however it got there.',
          '<strong>Check against the source.</strong> A rule is compared with the law, the dataset or the documentation it claims to describe.'
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'English only, live', p: 'Every class runs live and in English. We do not teach in German; the mentor names German school terms where they help.' },
          { h3: 'Pace and accent matched', p: 'Mentors wait for the learner\'s own idea instead of supplying the answer, and adjust to how the learner speaks.' },
          { h3: 'The same mentor', p: 'One person who notices when a learner starts guessing and brings them back to reasoning.' }
        ] }
      ]
    },
    {
      id: 'tools',
      eyebrow: 'Tools and ages',
      h2: 'Which AI tools are suitable for children in Germany?',
      lede: 'We do not recommend any AI chatbot to children, and our classes for under-18s do not need one.',
      body: [
        { kind: 'two',
          leftH3: 'Read the provider\'s own age rules',
          left: [
            'Providers set their own minimum ages. Anthropic\'s consumer terms for Claude require users to be at least 18. OpenAI\'s terms for ChatGPT set 13 as the floor and require a parent\'s or guardian\'s permission for anyone under 18. Our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a> quotes these terms for many tools.',
            'The KMK recommendation also records the Länder\'s aim of giving schools data-protection-compliant, free access to language models, which would answer the question differently inside school.'
          ],
          rightH3: 'What children use with us instead',
          right: [
            'Children write Python, train small models on data they can see, and check results against sources. When AI comes into a lesson, it is something the learner builds and tests, not an adult account they log into.',
            'Older teenagers learn how language models work and where they fail, so that when they do use one at sixteen or eighteen, they use it as the framework intends: checked, adapted and declared.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'A path',
    h2: 'From first program to checking any answer',
    lede: 'Our own stages for the thinking habit, from age eight upwards.',
    table: { caption: 'Thinking milestones (ours)', head: ['Stage', 'Typical age', 'The learner can'], rows: [
      ['Predict', '8 to 9', 'Say what a short program will do before running it'],
      ['Plan', '9 to 11', 'Write the steps of a solution in words, then in code'],
      ['Test', '11 to 13', 'Choose awkward cases and check a rule against them'],
      ['Explain', '12 to 15', 'Justify every line of a program to someone else'],
      ['Judge', '14 and up', 'Check an AI answer against a source and say what is wrong with it']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask your child to predict before they press run. It is the simplest habit to support at home.',
      'If homework involved AI, ask which part your child could explain without it.'
    ] },
    right: { h3: 'For learners', ps: [
      'When an answer looks perfect, try the strangest case you can think of.',
      'Write down where an idea came from. Your school may ask, and the KMK expects it.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses that put reasoning first',
    lede: 'Live in English with a regular mentor; choose a batch or private lessons.',
    bands: [
      { num: 'I', h3: 'Young thinkers', sub: 'Ages 6 to 11', courses: [
        { code: 'LTO / YOUNG / 01', slug: 'scratch-programming-complete-course', title: 'Scratch', blurb: 'Planning and debugging with blocks.' },
        { code: 'LTO / YOUNG / 02', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning for young thinkers', blurb: 'Logic and patterns before code.' },
        { code: 'LTO / YOUNG / 03', slug: 'mathematik-olympiade-and-kaenguru-training-course', title: 'Mathematik-Olympiade and Känguru', blurb: 'Competition problems, our own, no AI.' }
      ] },
      { num: 'II', h3: 'Teen programmers', sub: 'Ages 11 to 16', courses: [
        { code: 'LTO / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Programs they can explain line by line.' },
        { code: 'LTO / TEEN / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Test maths ideas in code.' },
        { code: 'LTO / TEEN / 03', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik Companion', blurb: 'Alongside school Informatik, Klasse 5 to 10.' }
      ] },
      { num: 'III', h3: 'Building, not prompting', sub: 'Ages 13 to 18', courses: [
        { code: 'LTO / BUILD / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Train models and find where they fail.' },
        { code: 'LTO / BUILD / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'The reasoning behind fast programs.' },
        { code: 'LTO / BUILD / 03', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'Biber, BWINF and BWKI', blurb: 'German competitions, our own practice problems.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How a live thinking-first class works',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Each class follows the same rhythm: a problem, a prediction, the learner\'s own attempt, then a test.',
    slots: [
      { time: 'After school', l: 'For example 14:15 German time, which is 18:45 in India in winter.' },
      { time: 'Later', l: 'For example 16:15 German time, 19:45 in India from 28 March 2027.' },
      { time: '1-on-1', l: 'Saturday at 11:00, or a time your family picks.' }
    ],
    cells: [
      { h3: 'Problem first', p: 'Every class opens with a question, not a tutorial.' },
      { h3: 'Predict, then run', p: 'Learners commit to an answer before the computer gives one.' },
      { h3: 'Edge cases', p: 'The awkward input is part of every task.' },
      { h3: 'Own words', p: 'Learners explain their code back to the mentor.' },
      { h3: 'Parents informed', p: 'Short notes on what was reasoned out, not just finished.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty learners, or private lessons.' }
    ]
  },

  projectsH2: 'What our students have made themselves',
  projectsLede: 'These projects were planned, built and explained by our students. A selection is below; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Google reviews in the words of the parents and students who wrote them.',

  fees: {
    h2: 'Fees for families in Germany',
    lede: 'You pay per month for eight live classes. Prices here are euro amounts based on the European Central Bank reference rate; the actual charge is in US dollars and your bank converts it, so a small difference on the statement is normal.',
    free: ['A free first class', 'A short problem to see how your child reasons', 'No card needed'],
    group: ['Fifteen to twenty learners at one level', 'One regular mentor', 'Two classes a week', 'Monthly, cancel any month'],
    one: ['Your child and one mentor', 'Paced to how your child thinks', 'Times your family chooses']
  },

  faq: {
    eyebrow: 'Parents ask',
    h2: 'Thinking, not copying AI: common questions',
    items: [
      { q: 'What does "learn to think, not copy AI" mean in practice?', a: 'The learner plans a solution, predicts what it will do, tests it on awkward cases and explains every line. Any answer from a tool, or from the mentor, is treated as a claim to check, not a result to copy.' },
      { q: 'Is AI banned in German schools?', a: 'No. The KMK recommendation of 10 October 2024 says a general ban on AI for homework is neither useful nor enforceable, and asks schools to agree how AI may be used and how AI-generated work is labelled.' },
      { q: 'What does the KMK expect pupils to be able to do with AI?', a: 'Its framework of 16 October 2026 adds AI to the six areas of Bildung in der digitalen Welt: for example, judging AI results and possible bias, checking against primary sources, labelling AI-generated work and checking and adapting AI results before using them.' },
      { q: 'Should my child use ChatGPT or Claude for coding homework?', a: 'We do not recommend any chatbot to children. Claude\'s terms require users to be 18, and ChatGPT\'s terms require a parent\'s permission for anyone under 18. Our classes for children need neither.' },
      { q: 'Are AI tools allowed in the Bundeswettbewerb Mathematik?', a: 'No. The competition forbids using artificial intelligence to solve its problems or to check your own solutions.' },
      { q: 'Will my child fall behind without AI tools?', a: 'Our view is the reverse: a learner who can plan, test and explain will use any tool better later, and the KMK framework asks for exactly those skills. Children with us still learn how AI works by building small models.' },
      { q: 'Are the classes in German?', a: 'No, the teaching is in English only and always live. Mentors work from India and adapt to each child\'s pace and accent. For school-related topics they also give the German term.' },
      { q: 'When are the classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Our mentors\' day in India runs 4 hours 30 minutes ahead of Germany in winter and 3 hours 30 minutes in summer.' },
      { q: 'Are you connected to the KMK or a school?', a: 'No. Modern Age Coders is not connected to the KMK, the SWK, any ministry or competition. We teach alongside school; school marks come only from the school.' },
      { q: 'How much does it cost?', a: 'A monthly fee, displayed here in euro at the European Central Bank reference rate and charged in US dollars, which your bank converts. The first class is free.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More on thinking, coding and AI for learners in Germany.',
    items: [
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning in Germany', p: 'Building and testing models, and the BWKI.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Minimum ages from the providers\' own terms.' },
      { href: '/how-to-think-like-a-programmer', label: 'How to think like a programmer', p: 'The habits behind good code.' },
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'All our pages for families in Germany.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'School Informatik help, page in German.' },
      { href: '/courses/python-ai-kids-masterclass', label: 'Python and AI for kids syllabus', p: 'Every topic in the course.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'The first class is one small problem. The mentor watches how your child approaches it, without giving the answer, and then suggests a level and a plan.',
    readFirst: 'Read first, if you like: <a class="ag-inline-link" href="/courses/python-ai-kids-masterclass">the Python and AI for kids syllabus</a> and <a class="ag-inline-link" href="/how-we-teach">how we teach</a>.',
    note: 'Classes take place live online in English, taught by mentors in India. The fastest way to reach us is WhatsApp.',
    formNote: 'Free, no card, no strings.'
  },

  footer: {
    cols: [
      { h4: 'Think first', links: [
        { href: '/courses/python-ai-kids-masterclass', label: 'Python and AI for kids' },
        { href: '/courses/problem-solving-and-computational-thinking-for-kids', label: 'Computational thinking' },
        { href: '/courses/ai-literacy-for-kids-course', label: 'AI literacy for kids' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI classes in Germany' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Check the rule, not the example'
  },

  personalityCss: `
.ag-root.ag-lto .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-lto .ag-capsule { border-left-width: 6px; border-radius: 0; }
.ag-root.ag-lto .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-lto .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-lto .ag-band-head h3 { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'KMK Handlungsempfehlung zum Umgang mit KI (Beschluss 10.10.2024, Fassung März 2025); KMK-Kompetenzrahmen Bildung in der digitalen Welt, Aktualisierung im Kontext KI (Beschluss 16.10.2026); Sommerzeitverordnung section 2; Bundeswettbewerb Mathematik rules; providers\' terms via ai-tool-age-audit.json. Read 2 and 3 November 2026. Exercise ours.',
    localProject: 'An original Python check of a plausible rule ("summer time starts on the fourth Sunday in March") against the German Sommerzeitverordnung ("am letzten Sonntag im März"): both give 28 March 2027, but the rule fails in 8 of 21 years from 2020 to 2040, including 2026. Lesson family: check a confident rule against the definition across many cases.',
    requiredMentions: ['2027: 2027-03-28 2027-03-28', 'Years 2020 to 2040 where the answer is wrong: [2020, 2024, 2025, 2026, 2030, 2031, 2036, 2037]', 'reflektierte Einordnung KI-generierter Ergebnisse sowie möglicher Verzerrungen', 'transparente Kennzeichnung KI-generierter und -überarbeiteter Beiträge', 'On 16 October 2026', 'On 10 October 2024', '17 January 2024', 'Check the rule, not the example'],
    sources: [
      { claim: 'KMK 2024 recommendation on AI in schools.', url: 'https://www.kmk.org/fileadmin/veroeffentlichungen_beschluesse/2024/2024_10_10-Handlungsempfehlung-KI.pdf' },
      { claim: 'KMK 2026 AI competence framework.', url: 'https://www.kmk.org/fileadmin/Dateien/veroeffentlichungen_beschluesse/2026/2026_10_16-KI-Kompetenzrahmen.pdf' },
      { claim: 'Summer time begins on the last Sunday in March.', url: 'https://www.gesetze-im-internet.de/sozv/BJNR159100001.html' },
      { claim: 'Bundeswettbewerb Mathematik bans AI for solving or checking.', url: 'https://www.mathe-wettbewerbe.de/bwm' },
      { claim: 'Claude 18+, ChatGPT parental permission under 18.', url: 'https://www.anthropic.com/legal/consumer-terms' }
    ],
    rejectedClaims: [
      'That the "fourth Sunday" rule comes from a particular AI product: it is our own example and labelled so.',
      'Recommending any chatbot to children: refused.',
      'That German schools ban AI: the KMK says the opposite; stated accurately.',
      'Any affiliation with the KMK, the SWK, a ministry or a competition: none.'
    ]
  }
};
