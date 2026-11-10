'use strict';
// SHIP: market | AI course for teens in Peru: build, test and judge models, with age-legal tools, in English | train/test leakage: a memoriser that looks best only on a test set full of duplicates
// AI course for teens, Peru (ag- English subject door, Peru cluster row PE020, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08: timing flexible at any hour.
// Audience: secundaria students aged 13 to 18 in Peru and their parents searching "ai course for teens", "machine learning
// for high school students", "is an AI course worth it for a teenager". Spanish twin (live): curso-de-ia-para-adolescentes-peru
// (perceptron); this page has its own spine and lesson.
// Spine: what a teen AI course should teach (data, models, honest evaluation); what secundaria in Peru offers (no computing
// area, Fábrica de Programadores pilot, MINEDU Hackathon 2025); which AI tools a 13 to 17 year old may use (vendor terms);
// the evaluation lesson (Google ML Crash Course on test sets and duplicates); OPI rules on generative AI; Peru's 2025 AI
// regulation on AI that evaluates students (art. 24.1 b) as context; English for older teens (EF EPI 2025, 18 to 20 band).
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/ai-course-for-teens-peru/, read 9 Nov 2026):
//  - Google, Machine Learning Crash Course, "Datasets: Dividing the original dataset" (gmlcc-datasets.txt): "A good test set
//    is statistically significant, representative of the dataset and real-world data, and contains no duplicates from the
//    training set."; "The only fair test of a model is against new examples, not duplicates."; "test sets and validation
//    sets still "wear out" with repeated use"; "We strongly recommend deleting duplicate examples from the test set before
//    testing."
//  - INEI TIC II Trimestre 2026 (inei_tic_iit2026.txt): "el de 12 a 18 años con un 92,5%"; table row "89,7 91,4 90,7 92,5 1,8".
//  - MINEDU, Fábrica de Programadores, 24 July 2025 (n-fabrica-prog): "beneficiará a 1000 escolares de 4.º y 5.º de secundaria
//    de Lima Norte con formación en programación Python y certificación internacional"; "podrán rendir el examen PCEP".
//  - MINEDU press note, 4 August 2025 (n-hackathon2025/text.txt): "la cuarta edición de la Hackathon 2025"; categories
//    "Estudiantes de Educación Básica", "Docentes de Educación Básica"; "entre 2023 y 2025, la presencia de estudiantes mujeres
//    creció en 28 %". Student and official names deliberately not used.
//  - OPI (UTEC) home (opi-home/text.txt): "abiertas gratuitamente a todos los estudiantes de secundaria del país"; OPI 2025
//    rules (opi-reglamento-2025/text.txt, LaTeX accents in extraction): "Queda prohibido el uso de IA generativa para la
//    resoluci´on de problemas."; "Per´u viene participando en la IOI desde el a˜no 2022"; "La IOI-2025 se realizar´a del 27 de
//    Julio al 3 de agosto en Sucre, Bolivia"; "Los 4 primeros puestos de la FASE 2 ser´an seleccionados para participar en
//    IOI-2025"; "Tener como m´aximo 20 a˜nos de edad al d´ıa 1 de Julio de 2025". Paraphrased on the page.
//  - Vendor terms via content/ai-tool-age-audit.json: ChatGPT 13+, parent or guardian permission under 18; Gemini 13+ with a
//    personal or school account; Claude 18+; GitHub Copilot "Vendor terms set a 13 floor."
//  - DS 115-2025-PCM (El Peruano, 9 September 2025; ds115.txt): art. 24.1 b high risk when AI is used to "Realizar evaluación en
//    los procesos de niños, niñas y adolescentes (NNA), en el sector educativo", including "ii) evaluación de resultados de
//    aprendizaje", "salvo que el sistema integre una función complementaria y no reemplace la evaluación pedagógica humana".
//  - EF EPI 2025, Peru page (ef_peru.raw): "ageGroup1Score":469,"ageGroup1ProficiencyBand":"low" (label "18-20 yrs");
//    "ageGroup2Score":540 (21-25); Peru 519 "moderate".
//  - CNEB: no computing area; competency 28 transversal.
//  - Time (timezone.tsv): America/Lima UTC-5; Asia/Kolkata UTC+5:30.
// Our own example (fuga.py, python3 -I; the twelve training rows and both test sets are invented by us):
//    threshold learned: 4
//    memoriser | train 1.0 | leaky test 0.83 | clean test 0.33
//    rule | train 0.83 | leaky test 0.67 | clean test 0.83
//    duplicates in leaky test: 5 of 6
// Lesson family: train/test leakage. A test set full of training duplicates picks the wrong model; a clean test set reverses
// the verdict.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const CODE = [
  '# (problems solved this week, days practised) -> passed the quiz? Invented by us.',
  'train = [((1, 1), 0), ((2, 1), 0), ((2, 3), 0), ((3, 2), 0), ((4, 4), 1), ((4, 1), 0),',
  '         ((5, 3), 1), ((6, 2), 1), ((6, 5), 1), ((7, 1), 0), ((8, 4), 1), ((9, 5), 1)]',
  'leaky_test = [((2, 3), 0), ((7, 1), 0), ((8, 4), 1), ((4, 1), 0), ((6, 2), 1), ((5, 4), 1)]',
  'clean_test = [((5, 4), 1), ((3, 3), 1), ((7, 3), 1), ((1, 2), 0), ((6, 1), 1), ((3, 1), 0)]',
  '',
  'memory = dict(train)          # remember every example exactly',
  '',
  'def memoriser(x):',
  '    return memory.get(x, 0)   # never seen it? say "fail"',
  '',
  'def best_threshold(data):',
  '    hits = {t: sum((p >= t) == bool(y) for (p, d), y in data) for t in range(11)}',
  '    return max(hits, key=hits.get)',
  '',
  'T = best_threshold(train)',
  '',
  'def rule(x):',
  '    return int(x[0] >= T)',
  '',
  'def accuracy(model, data):',
  '    return round(sum(model(x) == y for x, y in data) / len(data), 2)',
  '',
  'print("threshold learned:", T)',
  'for name, model in [("memoriser", memoriser), ("rule", rule)]:',
  '    print(name, "| train", accuracy(model, train), "| leaky test",',
  '          accuracy(model, leaky_test), "| clean test", accuracy(model, clean_test))',
  'print("duplicates in leaky test:", sum(x in memory for x, y in leaky_test), "of", len(leaky_test))'
].join('\n');

const OUT = [
  'threshold learned: 4',
  'memoriser | train 1.0 | leaky test 0.83 | clean test 0.33',
  'rule | train 0.83 | leaky test 0.67 | clean test 0.83',
  'duplicates in leaky test: 5 of 6'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'AI course for teens' },
  slug: 'ai-course-for-teens-peru',
  code: 'ait',
  accent: '#007047',
  accentRationale: 'AI course for teens, Peru: a bright but deep jungle green #007047, a shade livelier than the kids\' page, for the Amazon side of Peru and for teenagers moving faster; above 4.5:1 on all three papers, as the build checks.',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'AI course for teens in Peru',
  title: 'AI Course for Teens in Peru: Live Classes Taught in English',
  description: 'An AI course for teenagers in Peru aged 13 to 18: live online classes in English where students build machine learning models and learn to test them honestly.',
  ogDescription: 'What a teenager should learn in an AI course, what Peruvian secundaria offers, which AI tools a 13 to 17 year old may use, and a Python lesson on why a model can look brilliant on a bad test.',
  twitterDescription: 'Live AI and machine learning classes in English for teenagers in Peru: build models, then test them properly.',
  pageName: 'AI Course for Teens in Peru',
  webPageDescription: 'A guide for teenagers in Peru and their parents choosing an AI course, built from Google\'s Machine Learning Crash Course, INEI household data for 2026, MINEDU press notes on Fábrica de Programadores and the 2025 Hackathon, the OPI 2025 rules, vendor age terms, Peru\'s 2025 AI regulation and EF EPI 2025, with an original lesson on test-set leakage.',
  courseDescription: 'Live online artificial intelligence and machine learning classes for teenagers aged 13 to 18 in Peru, taught in English: Python, data, models and honest evaluation, with AI tools introduced only where the vendor\'s age terms and a parent\'s permission allow, in a group of fifteen to twenty or one to one, at hours the family chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'AI course for teens',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#learn', label: 'What teens learn' },
    { href: '#school', label: 'Secundaria and AI' },
    { href: '#tools', label: 'Tools at 13 to 17' },
    { href: '#project', label: 'Leakage lesson' },
    { href: '#compete', label: 'Competitions' }
  ],
  eyebrow: 'Peru &middot; AI and machine learning &middot; Ages 13 to 18',
  h1: 'AI course for teens in Peru',
  lede: 'A teenager in Peru can use an AI app in seconds. Knowing whether its answer is any good takes a course. This page is for secundaria students and their parents who want the deeper version: writing Python, training small models on real or invented data, and, above all, testing them so the score means something. It covers what such a course should include, what school in Peru already gives, which AI tools a 13 to 17 year old may legally use, and a lesson about a model that cheats without meaning to.',
  secondaryCta: { href: '#project', label: 'Try the leakage lesson' },
  wa: 'Hello Modern Age Coders, I am a secundaria student in Peru (or a parent of one) and would like to try your AI course for teens. Can we book a free class?',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students worldwide &middot; taught live, online and in English',
  spec: [
    ['Ages', '13 to 18'],
    ['Language of code', 'Python'],
    ['Core skill', 'Building and testing models'],
    ['AI tools', 'Only within vendor age terms'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Start', 'A free trial class']
  ],
  capsuleQ: 'The short version',
  capsule: 'Modern Age Coders runs an AI course for teens in Peru: live online classes, taught in English, for students aged 13 to 18. Teenagers learn Python, work with data, train small machine learning models and learn to test them honestly, so they know when a model is good and when it only looks good. AI tools are used only where the vendor\'s age terms and a parent\'s permission allow. A mentor based in India teaches a group of fifteen to twenty teenagers or one student alone, at flexible hours on Peru time.',

  picks: {
    eyebrow: 'Choose a starting course',
    h2: 'Three AI courses for teenagers',
    lede: 'Pick by what the student already knows. None of the three needs earlier coding experience, but the second and third suit a student who enjoys maths.',
    items: [
      { course: 'teens-ai-tools-mastery-course', code: 'AIT / 01', title: 'AI Tools Course for Teens', note: 'For 13 to 17 year olds who want to use AI well before building it: prompting, checking answers and real projects, only with tools whose terms allow the student\'s age and with a parent\'s permission where required.' },
      { course: 'ai-ml-masterclass-teens', code: 'AIT / 02', title: 'AI and Machine Learning for Teens', note: 'The core course. Python from the beginning, then data, models and evaluation, including the leakage lesson below. School maths is enough to start.' },
      { course: 'data-science-course-for-teens-python-data', code: 'AIT / 03', title: 'Data Science for Teens', note: 'For students drawn to numbers and questions: cleaning data, charts, and first machine learning models in Python, with a strong habit of checking every result.' }
    ]
  },

  sections: [
    {
      id: 'learn',
      eyebrow: 'What teens learn',
      h2: 'What should a teenager learn in an AI course?',
      lede: 'Three things, in this order: enough Python to build a model, enough understanding of data to know what the model learned from, and enough discipline in testing to know whether it works. Most short courses teach only the first.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Build', p: 'Write Python that loads data, trains a simple model and makes predictions. Students start with models small enough to understand by hand, such as a single threshold, before they meet libraries that hide the arithmetic.' },
          { h3: 'Understand the data', p: 'Where did the examples come from, who labelled them, what is missing? A model can only repeat the patterns in its data, so a student who cannot describe the data cannot explain the model.' },
          { h3: 'Test honestly', p: 'Keep some data back, never let it leak into training, and report the result on examples the model has never seen. This is the habit that separates a project that works from one that only scores well.' }
        ] },
        { kind: 'p', mt: true, html: 'Google\'s free Machine Learning Crash Course, written for developers, puts the third point bluntly: "The only fair test of a model is against new examples, not duplicates." It also warns that test sets "wear out" when the same one is used again and again to make decisions. We teach those two sentences to teenagers early, because almost every surprising result in a student project comes from breaking one of them.' },
        { kind: 'p', html: 'By the end of the core course a student should be able to take a small dataset, train two different models, compare them fairly, and write a short report in English explaining which is better and why they believe it. That report, more than any certificate, shows what they learned.' }
      ]
    },
    {
      id: 'school',
      tint: 'tint',
      eyebrow: 'Secundaria and AI',
      h2: 'Does secundaria in Peru teach AI or programming?',
      lede: 'Not as a timetabled subject. The national curriculum, the CNEB, has no computing area in secundaria; digital skills are a transversal competency spread across other subjects. MINEDU has, however, started several projects around programming and AI.',
      body: [
        { kind: 'table', numCols: [], caption: 'Recent MINEDU programming and AI initiatives for school students', head: ['Initiative', 'When', 'What MINEDU announced'], rows: [
          ['Fábrica de Programadores', 'Announced 24 July 2025', 'Python training for 1,000 students in 4th and 5th of secundaria in Lima Norte, with the option of the PCEP certification exam'],
          ['Hackathon 2025', 'Results published 4 August 2025', 'Fourth edition, with categories for basic-education students and for teachers; most projects used AI and a STEAM approach'],
          ['Girls taking part', '2023 to 2025', 'Female student participation in the Hackathon grew 28% across the three editions']
        ] },
        { kind: 'source', html: 'Sources: MINEDU press notes of 24 July 2025 (Fábrica de Programadores) and 4 August 2025 (Hackathon 2025), gob.pe; CNEB plan of studies. Read on 9 November 2026. We are not connected with MINEDU or either initiative.' },
        { kind: 'two', mt: true,
          leftH3: 'What this means for a student',
          left: [
            'A pilot for 1,000 students in one part of Lima is a real start, and its choice of Python matches what we teach. But most secundaria students in Peru will finish 5th year without a single timetabled lesson on how a program or a model works.',
            'INEI\'s household survey shows the audience is ready: 92.5% of Peruvians aged 12 to 18 used the internet in the second quarter of 2026, up from 89.7% in 2023. Almost every teenager is online; very few are taught what is happening inside the apps they use.'
          ],
          rightH3: 'Where an outside course fits',
          right: [
            'An AI course works well alongside school, not instead of it. School maths (percentages, graphs, a little algebra) is exactly what a first machine learning course needs, and teenagers often find that maths makes more sense once they use it to judge a model.',
            'For students in Spanish-medium schools, the English is a second benefit; for those at bilingual or IB schools, it is simply the language they already study in. Our Spanish-language page <a class="ag-inline-link" href="/curso-de-ia-para-adolescentes-peru">curso de IA para adolescentes</a> explains the same courses for parents who prefer to read in Spanish.'
          ] }
      ]
    },
    {
      id: 'tools',
      eyebrow: 'Tools at 13 to 17',
      h2: 'Which AI tools can a 13 to 17 year old use?',
      lede: 'Some, with conditions. Each company sets its own minimum age in its terms, and several require a parent\'s permission until 18. We follow those terms exactly, and we would rather a student learned less about one tool than broke its rules.',
      body: [
        { kind: 'table', numCols: [], caption: 'What the vendors\' own terms say about teenagers, as we read them', head: ['Tool', 'Minimum age in the terms', 'How we use it with 13 to 17 year olds'], rows: [
          ['ChatGPT (OpenAI)', '13; under 18 needs a parent or guardian\'s permission', 'Only with a parent\'s permission, to question and check work'],
          ['Gemini (Google)', '13 with a personal or school account', 'Occasionally, for comparison with other tools'],
          ['GitHub Copilot', '13', 'Late in a course, after the student can write the code alone'],
          ['Claude (Anthropic)', '18', 'Not used by anyone under 18'],
          ['Python, scikit-learn, notebooks', 'No AI account needed', 'Where most of the course happens']
        ] },
        { kind: 'source', html: 'Sources: OpenAI terms of use, Google Gemini help, GitHub terms of service and Anthropic consumer terms, as recorded in our AI tools age audit; read on 9 November 2026. Terms change; check the vendor\'s own page. Full list on our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a>.' },
        { kind: 'p', mt: true, html: 'There is a teaching reason as well as a legal one. A student who asks a chatbot to write a model never learns why the model fails. A student who writes the twenty lines below, and then breaks them on purpose, learns something no tool can hand them: a sense of when to be suspicious of a number.' }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A real lesson',
      h2: 'How do you know a model is good? A lesson on test-set leakage',
      lede: 'Here is a lesson from our teen course. Two models predict whether a student passes a weekly quiz. One of them looks better on a test set that quietly shares examples with its training data. On a clean test set, the verdict flips.',
      body: [
        { kind: 'ol', items: [
          '<strong>The data.</strong> Twelve invented training rows: how many practice problems a student solved that week, on how many days they practised, and whether they passed. Two test sets: a "leaky" one with five of its six rows copied from training, and a "clean" one built from new rows.',
          '<strong>Model A, the memoriser.</strong> It stores every training example exactly. Asked about an example it has seen, it repeats the answer; asked about anything new, it says "fail".',
          '<strong>Model B, the rule.</strong> It tries every threshold from 0 to 10 on the number of problems solved and keeps the one that gets most training rows right. It learns: pass if 4 or more problems.'
        ] },
        { kind: 'code', label: 'Two models, two test sets', lang: 'Python', code: CODE, note: 'Run with Python 3, it prints the four lines below. Every number in the data is ours, chosen to make the effect easy to see.' },
        { kind: 'code', label: 'What it prints', lang: 'Output', code: OUT, note: 'On the leaky test set the memoriser wins, 0.83 to 0.67. On the clean test set the rule wins, 0.83 to 0.33.' },
        { kind: 'two', mt: true,
          leftH3: 'What went wrong',
          left: [
            'The memoriser scores 1.0 on its own training data, which proves nothing; any lookup table can do that. The leaky test set looks like a fair exam, but five of its six questions were already in the textbook, so the memoriser simply recalls them.',
            'Two of those copied rows are odd cases, a student who solved 7 problems and still failed, another who solved 4 and failed. The rule gets those "wrong" because it learned the general pattern; the memoriser gets them "right" because it remembers the exceptions. A leaky test rewards remembering exceptions.'
          ],
          rightH3: 'What the clean test shows',
          right: [
            'On six new students, the memoriser falls to 0.33: it has never seen any of them, so it answers "fail" every time. The rule, which learned a pattern instead of a list, keeps its 0.83.',
            'Google\'s guidance says a good test set "contains no duplicates from the training set" and recommends deleting duplicates before testing. The last line of our program, <code>duplicates in leaky test: 5 of 6</code>, is the check that would have caught the problem before anyone believed the score.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Predict first.</strong> Before running the code, write down which model you expect to win on each test set, and why.',
          '<strong>Break it differently.</strong> Change the memoriser so that unseen examples get "pass" instead of "fail". What happens to its clean score, and what does that tell you about guessing?',
          '<strong>Wear out the test.</strong> Try thresholds by hand and pick the one that scores highest on the clean test set. Explain in two English sentences why that score is now too optimistic.',
          '<strong>Write the report.</strong> One paragraph, in English, recommending a model to a teacher who will use it. Say what data you tested on and what you are still unsure about.'
        ] }
      ]
    },
    {
      id: 'stakes',
      eyebrow: 'When it matters',
      h2: 'Why does honest testing matter outside the classroom?',
      lede: 'Because models are already used to make decisions about people, including students. Peru\'s 2025 AI regulation treats some of those uses as high risk.',
      body: [
        { kind: 'p', html: 'Article 24.1 of DS 115-2025-PCM, the regulation of Peru\'s AI law published in El Peruano on 9 September 2025, lists uses of AI it considers high risk. One of them is evaluation in the processes of children and adolescents in education, including "evaluación de resultados de aprendizaje", the assessment of learning outcomes, unless the system plays a complementary role "y no reemplace la evaluación pedagógica humana", that is, unless it does not replace a teacher\'s judgement.' },
        { kind: 'p', html: 'We quote this as context, not as legal advice. Its relevance to a teenager is simple: if a model ever marks your work, predicts your results or flags you during an exam, someone should have tested it on clean data and a human should still be checking. A student who has seen a memoriser win on a leaky test set understands why, and is better placed to ask the right questions.' },
        { kind: 'two', mt: true,
          leftH3: 'Questions worth asking of any model',
          left: [
            'What data was it trained on, and who chose it? Was it tested on people like me? Were any of the test examples also in the training data? Who checks its decisions, and can I ask for a person to look again?'
          ],
          rightH3: 'What we ask of our students',
          right: [
            'Every project ends with a short written note: the data, the test, the score on unseen examples, and one way the model could fail. It takes ten minutes and changes how students think about every number they see afterwards.'
          ] }
      ]
    },
    {
      id: 'compete',
      tint: 'tint',
      eyebrow: 'Competitions',
      h2: 'Can AI help in programming olympiads in Peru?',
      lede: 'Not during the contest. UTEC runs the OPI, Peru\'s computing olympiad, at no cost to any secundaria student in the country, and its 2025 rulebook forbids generative AI for solving the problems.',
      body: [
        { kind: 'two',
          leftH3: 'What the OPI 2025 rules say',
          left: [
            'Competitors must reason and code alone. The same rules explain that the top four of the second phase were selected for the International Olympiad in Informatics, the IOI, held in Sucre, Bolivia, from 27 July to 3 August 2025, and that Peru has taken part in the IOI since 2022.',
            'Participants had to be at most 20 years old on 1 July 2025. Neither UTEC nor the OPI has any link with us, and we never reproduce its problems; we write our own practice problems and label them as ours.'
          ],
          rightH3: 'How an AI course helps anyway',
          right: [
            'Olympiad problems reward clear thinking about data and edge cases, which is exactly what careful model testing trains. A student who habitually asks "what have I not tested?" writes better competition code as well.',
            'Students who want competition depth can add our problem solving and DSA course, below, alongside the AI course. For a gentler start, our <a class="ag-inline-link" href="/clases-de-programacion-para-adolescentes-peru">clases de programación para adolescentes</a> page covers coding for teens in general.'
          ] }
      ]
    },
    {
      id: 'english',
      eyebrow: 'In English',
      h2: 'Is my English good enough for an AI course in English?',
      lede: 'If you can follow a YouTube tutorial in English, yes. Our classes use clear, unhurried English, and the vocabulary of AI (data, model, train, test, accuracy) is the same short list of words used everywhere.',
      body: [
        { kind: 'two',
          leftH3: 'Why English helps',
          left: [
            'The documentation, error messages and research papers in AI are overwhelmingly in English. A student who learns "overfitting" and "test set" in English can read the original sources the day they need them.',
            'EF\'s English Proficiency Index 2025 gives Peruvian adults aged 18 to 20 a score of 469, in the "low" band, while those aged 21 to 25 score 540, "moderate". Those are adults who chose to take EF\'s test, not school students, but the pattern suggests the late teens are a good time to build working English.'
          ],
          rightH3: 'How we support it',
          right: [
            'Mentors repeat instructions in simpler words and write key terms in the chat. Students explain their code aloud in short sentences, and their written project notes are in English too, corrected gently.',
            'We do not teach in Spanish. For a student who finds the first weeks hard, one-to-one classes let the mentor slow down without holding back a group. The free first class will show quickly whether it suits.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'From first program to honest model: the stages',
    lede: 'Our own stages, used to place a student and to report progress. They are not a school grade or an official level.',
    table: { numCols: [], caption: 'AI course stages for teenagers (ours)', head: ['Stage', 'The student can', 'Evidence we look for'], rows: [
      ['1. Python basics', 'Write loops, functions and lists', 'A working program they can explain'],
      ['2. Data', 'Load, clean and summarise a small dataset', 'A chart with an honest caption'],
      ['3. First model', 'Train a threshold or tree by hand', 'The model\'s rule, in their own words'],
      ['4. Fair test', 'Split data and check for duplicates', 'A clean test score, reported alone'],
      ['5. Compare', 'Choose between two models fairly', 'A short report in English'],
      ['6. Judge', 'Explain where a model could harm someone', 'A list of its likely failures']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 4 is the lesson above. Once a teenager reaches it, they tend to question scores, claims and statistics far beyond computing.',
      'You will receive notes on what was built and understood, not just attendance.'
    ] },
    right: { h3: 'For students', ps: [
      'A high score on data the model has seen is not evidence. Ask what it was tested on.',
      'When two models disagree, the interesting question is why.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for secundaria students',
    lede: 'Each is taught live and in English, with one mentor across the months.',
    bands: [
      { num: 'I', h3: 'Programming foundations', sub: 'From 13', courses: [
        { code: 'AIT / BASE / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The whole language, start to advanced, before or beside AI.' },
        { code: 'AIT / BASE / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Objects and classes, for students heading to engineering.' },
        { code: 'AIT / BASE / 03', slug: 'pcep-pcap-python-certification-course', title: 'PCEP and PCAP preparation', blurb: 'The Python exams MINEDU\'s pilot also points to.' }
      ] },
      { num: 'II', h3: 'Going deeper', sub: '14 and up', courses: [
        { code: 'AIT / DEEP / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and DSA', blurb: 'Algorithms and data structures for olympiad-style thinking.' },
        { code: 'AIT / DEEP / 02', slug: 'orange-data-mining-visual-machine-learning-course-for-teens', title: 'Orange data mining', blurb: 'Machine learning with visual blocks, then with Python.' },
        { code: 'AIT / DEEP / 03', slug: 'vibe-coding-for-teens-python-web-ai-projects-course', title: 'Vibe coding for teens', blurb: 'Building with AI help while reading every line.' }
      ] },
      { num: 'III', h3: 'Projects and school exams', sub: 'Ages 15 to 18', courses: [
        { code: 'AIT / MORE / 01', slug: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', title: 'Hackathon prep for teens', blurb: 'Twelve weeks of building before a friendly event.' },
        { code: 'AIT / MORE / 02', slug: 'ib-diploma-computer-science-course', title: 'IB DP Computer Science', blurb: 'For Diploma students; the school marks all assessed work.' },
        { code: 'AIT / MORE / 03', slug: 'ai-agents-with-microsoft-copilot-studio-course-for-teens', title: 'AI agents with Copilot Studio', blurb: 'One to one only; a parent accepts Microsoft\'s terms.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How do live AI classes for teens work?',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Early morning', l: 'Before school in Peru is evening in India, a comfortable class hour.' },
      { time: 'After school', l: 'Later hours in Peru are possible too; we match a mentor to them.' },
      { time: 'Just you', l: 'One student and one mentor, at a pace set by the student.' }
    ],
    cells: [
      { h3: 'Code every class', p: 'Students type and run their own programs live.' },
      { h3: 'Test before trust', p: 'No score counts until it is on unseen data.' },
      { h3: 'Clear English', p: 'Short sentences, key words written in the chat.' },
      { h3: 'Teen groups only', p: 'Students learn with others of a similar age.' },
      { h3: 'Projects with notes', p: 'Each project ends with a short written report.' },
      { h3: 'Age-legal tools', p: 'AI tools only where the terms allow.' }
    ]
  },

  projectsH2: 'Projects by older students',
  projectsLede: 'Teenagers who stay with it build work like this; see more on our <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews left on Google by students and parents, unedited.',

  fees: {
    h2: 'Fees for the teen AI course',
    lede: 'Our fees are in US dollars, charged to a card. A Peruvian bank converts each payment to soles at its rate for that day, so expect small month-to-month differences on the statement.',
    free: ['A free first class', 'A short Python task and a first model', 'No card to book'],
    group: ['Fifteen to twenty teenagers', 'The same mentor throughout', 'Two live classes each week', 'Month by month; cancel any time'],
    one: ['One student, one mentor', 'Projects built around the student\'s goals', 'Class times the family decides']
  },

  faq: {
    eyebrow: 'Students and parents ask',
    h2: 'AI course for teens: common questions',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. The course is taught live online in English and only in English. Mentors keep their pace steady, rephrase when something is unclear and adjust to each student\'s accent, so a teenager with school-level English can usually follow and improves quickly.' },
      { q: 'Does my teenager need to know how to code already?', a: 'No. The core course starts with Python from the beginning. Students who already code skip ahead after the trial class. School maths, such as percentages and simple graphs, is all the maths needed to start.' },
      { q: 'Will my teenager use ChatGPT in the course?', a: 'Only with your permission and only where the terms allow. OpenAI\'s terms require a parent or guardian\'s permission under 18, and Anthropic\'s Claude is for adults only, so it is never used by students under 18. Most of the course uses Python itself, with no AI account.' },
      { q: 'What will my teenager actually build?', a: 'Small models trained on datasets they can understand, such as a threshold rule or a decision tree, then projects with real libraries. Every project is tested on examples the model has never seen and written up in a short English report.' },
      { q: 'At what times are classes held from Peru?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Peru is on UTC minus 5 all year and India on UTC plus 5:30; 07:00 in Lima, before school, is 17:30 in India.' },
      { q: 'Does secundaria in Peru teach AI?', a: 'Not as a subject. The CNEB has no computing area in secundaria. MINEDU has run initiatives such as the Fábrica de Programadores Python pilot for 1,000 students in Lima Norte (announced July 2025) and an annual Hackathon, but most students meet neither.' },
      { q: 'Can the course help with the OPI programming olympiad?', a: 'It builds the right habits, but the OPI 2025 rules ban generative AI during the contest, so students must solve problems alone. For competition depth we suggest adding our problem solving and DSA course. We are not connected with UTEC or the OPI.' },
      { q: 'Is there a certificate?', a: 'Students who complete a course receive our own certificate of completion. It is not a Peruvian school qualification, and we are not connected with MINEDU, SUNEDU or any school. The projects and reports a student builds are usually the stronger evidence.' },
      { q: 'What equipment does a student need?', a: 'A laptop or desktop computer, a stable internet connection and a headset with a microphone. A phone is fine for watching but not for writing Python. All the software we use in the first months is free.' },
      { q: 'Can my teenager switch from a group to one-to-one?', a: 'Yes. Some students start in a group and move to one-to-one before exams or for a big project, and some do the reverse. Tell us and we arrange it from the next month.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'More for secundaria students',
    lede: 'Related pages on our site.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Our full offer for Peru, by age and subject.' },
      { href: '/programacion-para-5to-de-secundaria', label: 'Programación para 5to de secundaria', p: 'A Spanish guide for the final school year.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Minimum ages for more than a hundred tools.' },
      { href: '/we-teach-you-how-to-think', label: 'We teach you how to think', p: 'Reasoning before tools, in every course.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projects our students have built.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What happens in a live class.' }
    ]
  },

  start: {
    h2: 'Try a free AI class',
    lede: 'The trial is a real lesson: the student writes a few lines of Python, trains a tiny model and tests it. The mentor sees how they reason and how comfortable they are in English, then suggests where to start and whether a group or one-to-one fits better.',
    readFirst: 'Curious about the format first? Read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or browse the syllabus of each course in our <a class="ag-inline-link" href="/courses">course list</a>.',
    note: 'All teaching is live on video, in English, by mentors in India. Message us on WhatsApp in English for a quick answer.',
    formNote: 'No card, no commitment, no cost.'
  },

  footer: {
    cols: [
      { h4: 'AI for teenagers', links: [
        { href: '/ai-tools-age-guide', label: 'AI tools by age' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/we-teach-you-how-to-think', label: 'Thinking first' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Classes in Peru' },
        { href: '/curso-de-ia-para-adolescentes-peru', label: 'IA para adolescentes' },
        { href: '/clases-de-programacion-para-adolescentes-peru', label: 'Programación para adolescentes' },
        { href: '/programacion-para-5to-de-secundaria', label: '5to de secundaria' }
      ] }
    ],
    bottomRight: 'Never grade a model on its own homework'
  },

  personalityCss: `
.ag-root.ag-ait .ag-hero h1 { max-width: 17ch; letter-spacing: -0.02em; }
.ag-root.ag-ait .ag-capsule { border-left-width: 4px; border-radius: 2px; }
.ag-root.ag-ait .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-ait .ag-table th { text-transform: uppercase; letter-spacing: 0.04em; }
.ag-root.ag-ait .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'Google Machine Learning Crash Course (dividing datasets); INEI TIC en los Hogares II Trimestre 2026; MINEDU press notes on Fábrica de Programadores (24 July 2025) and Hackathon 2025 (4 August 2025); UTEC OPI home and 2025 rules; vendor terms of OpenAI, Google, GitHub and Anthropic via our AI tools age audit; DS 115-2025-PCM art. 24.1 b; EF EPI 2025 Peru age groups; MINEDU CNEB. All read 9 November 2026.',
    localProject: 'An original Python lesson on test-set leakage: twelve invented training rows (problems solved, days practised, passed); a memoriser and a learned threshold rule (pass if 4 or more problems); on a leaky test set with 5 of 6 rows copied from training the memoriser wins 0.83 to 0.67; on a clean test set the rule wins 0.83 to 0.33. Plus four follow-up tasks. Lesson family: train/test leakage and duplicate examples.',
    requiredMentions: ['The only fair test of a model is against new examples, not duplicates.', 'memoriser | train 1.0 | leaky test 0.83 | clean test 0.33', 'duplicates in leaky test: 5 of 6', 'A leaky test rewards remembering exceptions', 'evaluación de resultados de aprendizaje', '92.5% of Peruvians aged 12 to 18', 'Female student participation in the Hackathon grew 28%', 'a score of 469, in the "low" band', 'Never grade a model on its own homework'],
    sources: [
      { claim: 'Test sets must contain no duplicates from training; the only fair test is against new examples; test sets wear out.', url: 'https://developers.google.com/machine-learning/crash-course/overfitting/dividing-datasets' },
      { claim: 'Internet use, 12 to 18 year olds: 89.7% (2023) to 92.5% (2026, II Trimestre).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Fábrica de Programadores: 1,000 students, 4th and 5th secundaria, Lima Norte, Python, PCEP.', url: 'https://www.gob.pe/institucion/minedu/noticias/1214050-minedu-impulsa-iniciativa-fabrica-de-programadores-para-formar-a-escolares-con-certificacion-internacional-en-programacion' },
      { claim: 'Hackathon 2025: fourth edition; student and teacher categories; female participation up 28% between 2023 and 2025.', url: 'https://www.gob.pe/institucion/minedu/noticias/1220955-minedu-premia-el-talento-estudiantil-y-docente-por-innovar-con-inteligencia-artificial-y-robotica-en-hackathon-2025' },
      { claim: 'OPI free for secundaria; generative AI banned; top four of phase 2 to IOI 2025 in Sucre, 27 July to 3 August 2025; Peru in the IOI since 2022; maximum age 20 on 1 July 2025.', url: 'https://opi.utec.edu.pe/Reglamento_OPI_2025.pdf' },
      { claim: 'ChatGPT 13+ with parental permission under 18; Gemini 13+; GitHub 13; Claude 18+.', url: 'https://openai.com/policies/row-terms-of-use/' },
      { claim: 'DS 115-2025-PCM art. 24.1 b: AI evaluating learning outcomes of children and adolescents is high risk unless complementary to human evaluation.', url: 'https://www.gob.pe/institucion/pcm/normas-legales/7133522-115-2025-pcm' },
      { claim: 'EF EPI 2025 Peru: 18 to 20 year olds 469 low; 21 to 25 540 moderate.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' }
    ],
    rejectedClaims: [
      'Names of Hackathon winners or competitors: private individuals, not used.',
      'MINEDU budget figures from the Hackathon note: currency amounts are not printed on Peru pages; not needed.',
      'That the Fábrica pilot has expanded nationally: the note says it "busca expandirse", an aim, not a fact; not said.',
      'EF EPI scores as a measure of school students: EF tests self-selected adults; the page says so.',
      'Use of Claude or Codex-and-Claude-Code courses with under-18s: refused under Anthropic\'s 18+ terms.',
      'Admission, grade or job promises: none made. No legal advice on DS 115-2025-PCM.'
    ]
  }
};
