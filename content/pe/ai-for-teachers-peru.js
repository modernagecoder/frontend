'use strict';
// SHIP: market | AI for teachers in Peru: understand AI, check it against your own marking, in English | an evaluation set: a marking helper checked against teacher marks, agreement vs kappa
// AI for teachers, Peru (ag- English subject door, Peru cluster row PE024, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08: timing flexible at any hour.
// Audience: teachers in Peru (public and private, bilingual and IB schools, academias) searching "ai for teachers", "ai course
// for teachers online", "how to use ai to grade". Spanish twin (live): ia-para-docentes-curso-en-ingles (bigram next-word
// model; MINEDU course figures). This page has its own spine and lesson; facts overlap, sentences do not.
// Spine: what the state already offers teachers (MINEDU, 9 May 2025) and where AI is going in schools (205 rural schools,
// 4 December 2025); what a deeper course adds; the evaluation-set lesson (check an AI marking helper against your own marks);
// what DS 115-2025-PCM says about AI that evaluates pupils (art. 24.1 b) and teacher training (art. 13.2) as context; students'
// tool ages (vendor terms); when a teacher can study, from the 2026 school calendar (RM 501-2025-MINEDU table 1, checked
// against the page image); English for teachers (EF EPI 2025 teacher score).
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/ai-for-teachers-peru/, read 9 Nov 2026):
//  - MINEDU press note, 9 May 2025 (ia87000.txt): "más de 87 000 docentes en el territorio nacional se han inscrito en el curso
//    “Inteligencia artificial (IA) en la práctica docente”"; "es absolutamente gratuito y aquellos que lo aprueban reciben una
//    constancia que les sirve para el escalafón de la Carrera Pública Magisterial"; "dos unidades"; "Enseñar y aprender con IA";
//    workshops "en las 26 regiones"; target "3550 profesores de innovación pedagógica"; "1600 docentes" (in-person, Lima
//    Metropolitana, Callao, Ica). Official's name not used.
//  - MINEDU press note, 4 December 2025 (iarural.txt): "205 instituciones educativas del ámbito rural que desarrollan los modelos
//    de Secundaria en Alternancia, Secundaria con Residencia Estudiantil y Secundaria Tutorial, y atienden a cerca de 27 000
//    estudiantes"; "627 508 estudiantes de secundaria matriculados en instituciones educativas del ámbito rural".
//  - RM 501-2025-MINEDU, Norma Técnica para el Año Escolar 2026 (rm501-2025-pdf/text.txt; table 1 checked against
//    page11-checked-by-eye.png): "treinta y seis (36) semanas lectivas y ocho (08) semanas de gestión"; "ciento sesenta (160) días
//    lectivos y treinta (30) días de gestión"; blocks: gestión 2 al 13 de marzo; lectivas 16 marzo al 15 de mayo; gestión 18 al 22
//    de mayo; lectivas 25 mayo al 24 de julio; gestión 27 julio a 7 de agosto; lectivas 10 agosto al 9 de octubre; gestión 12 al 16
//    de octubre; lectivas 19 octubre a 18 de diciembre; gestión 21 al 31 de diciembre.
//  - DS 115-2025-PCM (El Peruano, 9 September 2025; ds115.txt): art. 13.2 "se promueve la formación del personal docente en IA y
//    tecnologías digitales para su aprovechamiento pedagógico en las instituciones educativas públicas y privadas"; art. 24.1 b
//    "ii) evaluación de resultados de aprendizaje" ... "salvo que el sistema integre una función complementaria y no reemplace la
//    evaluación pedagógica humana".
//  - EF EPI 2025 Peru page (ef_peru.raw in the professionals' folder; ef_peru.txt): "teacher","countrySlug":"peru",
//    "bandSlug":"moderate","version":"2025","score":532; Lima 555.
//  - Vendor terms (ai-tool-age-audit.json): ChatGPT 13+, parent or guardian permission under 18; Claude 18+; Khanmigo "Any use
//    of AI-Enabled Features by persons under age 18 must be supervised by an authorized adult User".
//  - UNESCO's AI competency framework for teachers: unesco.org returned a captcha on 9 November 2026; not retried, not used.
//  - Time (timezone.tsv): America/Lima UTC-5; Asia/Kolkata UTC+5:30.
// Our own calculations: 9 + 9 + 9 + 9 = 36 teaching weeks; 2 + 1 + 2 + 1 + 2 = 8 management weeks (match the RM's totals).
// Code (evaluacion.py, python3 -I; the question, fourteen answers and the teacher's marks are invented by us):
//    agreement 0.79 | chance 0.36 | kappa 0.67
//    teacher gave 0 -> helper gave 0/1/2: [4, 0, 0]
//    teacher gave 1 -> helper gave 0/1/2: [0, 2, 2]
//    teacher gave 2 -> helper gave 0/1/2: [1, 0, 5]
//    disagree: '0.5 is larger because 5 > 2' teacher 1 helper 2
//    disagree: '0.5 is larger because it is shorter' teacher 1 helper 2
//    disagree: 'Half is more than a quarter, so 0.5 wins' teacher 2 helper 0
// Lesson family: an evaluation set: measuring an automatic marker against a teacher's own marks with agreement, chance
// agreement and Cohen's kappa, then reading the disagreements.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const CODE = [
  '# Question: "Which is larger, 0.5 or 0.25? Explain." Fourteen answers and the',
  '# teacher\'s marks (2 full, 1 partial, 0 none) are invented by us.',
  'answers = [',
  '    ("0.5, because 0.5 is 50 hundredths and 0.25 is 25", 2),',
  '    ("0.5 is larger since half is more than a quarter", 2),',
  '    ("0.25 is larger because 25 is bigger than 5", 0),',
  '    ("0.5", 1),',
  '    ("0.5 is larger, 0.50 > 0.25", 2),',
  '    ("0.25 is larger, it has more digits", 0),',
  '    ("0.5 is larger because a half beats a quarter", 2),',
  '    ("they are equal", 0),',
  '    ("0.5 is larger because 5 > 2", 1),',
  '    ("0.5 is larger because 0.5 = 0.50 and 50 > 25", 2),',
  '    ("0.5 larger", 1),',
  '    ("0.25 is larger because it is longer", 0),',
  '    ("0.5 is larger because it is shorter", 1),',
  '    ("Half is more than a quarter, so 0.5 wins", 2),',
  ']',
  '',
  'def helper(text):                     # a simple marking rule standing in for an AI helper',
  '    if not text.startswith("0.5"):',
  '        return 0',
  '    return 2 if "because" in text or "since" in text or ">" in text else 1',
  '',
  'teacher = [m for _, m in answers]',
  'machine = [helper(t) for t, _ in answers]',
  '',
  'agree = sum(t == m for t, m in zip(teacher, machine)) / len(answers)',
  'labels = [0, 1, 2]',
  'p_chance = sum((teacher.count(k) / len(answers)) * (machine.count(k) / len(answers)) for k in labels)',
  'kappa = (agree - p_chance) / (1 - p_chance)',
  'print("agreement", round(agree, 2), "| chance", round(p_chance, 2), "| kappa", round(kappa, 2))',
  '',
  'for t in labels:',
  '    print("teacher gave", t, "-> helper gave 0/1/2:", [sum(1 for a, b in zip(teacher, machine) if a == t and b == m) for m in labels])',
  'for (text, t), m in zip(answers, machine):',
  '    if t != m:',
  '        print("disagree:", repr(text), "teacher", t, "helper", m)'
].join('\n');

const OUT = [
  'agreement 0.79 | chance 0.36 | kappa 0.67',
  'teacher gave 0 -> helper gave 0/1/2: [4, 0, 0]',
  'teacher gave 1 -> helper gave 0/1/2: [0, 2, 2]',
  'teacher gave 2 -> helper gave 0/1/2: [1, 0, 5]',
  "disagree: '0.5 is larger because 5 > 2' teacher 1 helper 2",
  "disagree: '0.5 is larger because it is shorter' teacher 1 helper 2",
  "disagree: 'Half is more than a quarter, so 0.5 wins' teacher 2 helper 0"
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'AI for teachers' },
  slug: 'ai-for-teachers-peru',
  code: 'ate',
  accent: '#034A2E',
  accentRationale: 'AI for teachers, Peru: a dark chalkboard green #034A2E, the green of the classroom boards still found in many Peruvian schools; the darkest of the AI pages, comfortably above 4.5:1 on all three papers, as the build checks.',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'AI for teachers in Peru',
  title: 'AI for Teachers in Peru: Live Online Course in English',
  description: 'AI for teachers in Peru: a live online course in English on how AI works, how to test an AI marking tool against your own marks, and using it safely with pupils.',
  ogDescription: 'What MINEDU already offers teachers on AI, what a deeper course adds, what Peru\'s 2025 regulation says about AI that evaluates pupils, when a teacher can study in the 2026 calendar, and a lesson on checking an AI marker against your own marks.',
  twitterDescription: 'Live AI classes in English for teachers in Peru: understand it, test it, then decide how to use it.',
  pageName: 'AI for Teachers in Peru',
  webPageDescription: 'A guide for teachers in Peru who want to understand and evaluate AI, built from MINEDU press notes (9 May 2025 and 4 December 2025), RM 501-2025-MINEDU, DS 115-2025-PCM, EF EPI 2025 and vendor age terms, with an original lesson on evaluating an automatic marker with an evaluation set and Cohen\'s kappa.',
  courseDescription: 'Live online AI courses for teachers in Peru, taught in English: how language models and classifiers work, how to test an AI tool against your own professional judgement, which tools pupils may use at which age, and enough Python to build and check small tools yourself, one to one or in a group of fifteen to twenty adults, at hours that fit the school calendar.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'AI for teachers',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#state', label: 'What MINEDU offers' },
    { href: '#marking', label: 'AI and marking' },
    { href: '#project', label: 'Evaluation lesson' },
    { href: '#pupils', label: 'Pupils and tools' },
    { href: '#calendar', label: 'When to study' }
  ],
  eyebrow: 'Peru &middot; AI for educators &middot; Primary, secondary and beyond',
  h1: 'AI for teachers in Peru',
  lede: 'Teachers in Peru are being asked to use artificial intelligence before most have had the chance to look inside it. This page is for teachers who want more than a list of apps: how AI tools reach their answers, how to check one against your own professional judgement before you trust it with pupils\' work, which tools pupils may legally use, and when in the 2026 school calendar a course actually fits. The lesson at the centre is one any teacher can run with a set of exercise books: test the machine against your own marks.',
  secondaryCta: { href: '#project', label: 'See the marking lesson' },
  wa: 'Hello Modern Age Coders, I am a teacher in Peru and would like to learn more about AI. Could I book a free first class?',
  heroNote: 'Live online classes since 2020 &middot; 10,000+ learners worldwide &middot; taught live and in English',
  spec: [
    ['For', 'Teachers in any subject'],
    ['Coding needed', 'None to start'],
    ['Core skill', 'Testing AI against your own judgement'],
    ['Also covers', 'Pupils\' tool ages, Python basics'],
    ['Format', 'One to one, or a group of fifteen to twenty'],
    ['Try it', 'A free first class']
  ],
  capsuleQ: 'In a nutshell',
  capsule: 'Modern Age Coders offers AI for teachers in Peru: live online classes taught in English for teachers of any subject. Teachers learn how AI tools produce their answers, how to check an AI tool against their own marking with a small evaluation set before using it, which tools pupils may use at which age, and, if they wish, enough Python to build and test simple classroom tools. Mentors in India teach one to one or in groups of fifteen to twenty adults, at hours that fit the school calendar and the working day in Peru.',

  picks: {
    eyebrow: 'Where teachers start',
    h2: 'Three courses teachers choose',
    lede: 'No coding is needed for the first two. The third suits teachers of maths, science or computing who want to build their own small tools.',
    items: [
      { course: 'ai-tools-mastery-complete-college', code: 'ATE / 01', title: 'AI Tools Mastery', note: 'Practical use of ChatGPT, Claude and automation tools for adults, taught with the habit of checking every output. Teachers apply it to planning, materials and feedback, never to pupils\' personal data.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', code: 'ATE / 02', title: 'Data and AI Analytics for Non-Programmers', note: 'Spreadsheets, charts and AI help for people who do not code. Useful for teachers who track marks, attendance and progress and want to read their own data clearly.' },
      { course: 'ai-ml-masterclass-complete-college', code: 'ATE / 03', title: 'AI and ML Masterclass', note: 'Python and machine learning from the start, at an adult pace. For teachers who want to understand models properly and build small tools, such as the marking check below.' }
    ]
  },

  sections: [
    {
      id: 'state',
      eyebrow: 'What MINEDU offers',
      h2: 'What AI training does MINEDU already offer teachers in Peru?',
      lede: 'A free online course, workshops and pilots. MINEDU reported on 9 May 2025 that more than 87,000 teachers had enrolled in its course "Inteligencia artificial (IA) en la práctica docente", delivered through its virtual platform.',
      body: [
        { kind: 'table', numCols: [], caption: 'MINEDU\'s announced AI initiatives for teachers and schools', head: ['Initiative', 'What MINEDU said', 'Date of the press note'], rows: [
          ['Online course "IA en la práctica docente"', 'More than 87,000 teachers enrolled; free; a pass gives a certificate that counts towards the Carrera Pública Magisterial scale; two units, the second "Enseñar y aprender con IA"', '9 May 2025'],
          ['Workshops on responsible AI integration', 'Run since 2024 in the 26 regions; target of 3,550 teachers of pedagogical innovation', '9 May 2025'],
          ['In-person workshops', 'Lima Metropolitana, Callao and Ica, with a target of 1,600 teachers', '9 May 2025'],
          ['AI for planning in rural secondary', '205 rural schools in alternation, residential and tutorial models, serving about 27,000 pupils', '4 December 2025']
        ] },
        { kind: 'source', html: 'Sources: MINEDU press notes of 9 May 2025 and 4 December 2025, gob.pe; read on 9 November 2026. MINEDU also reports 627,508 secondary pupils enrolled in rural schools. We are not connected with MINEDU, its platform or these programmes.' },
        { kind: 'two', mt: true,
          leftH3: 'What the state course is for',
          left: [
            'MINEDU\'s course is free, counts for the teaching career scale and reaches teachers in every region. If you have not taken it, it is a sensible first step, and nothing on this page competes with it.',
            'Its focus, as MINEDU describes it, is practice: using AI in teaching and learning. That is what most teachers need first.'
          ],
          rightH3: 'What a deeper course adds',
          right: [
            'What a short practice course rarely has time for is the inside view: how a classifier or a language model reaches an answer, why it fails in predictable ways, and how to measure whether a tool is good enough for a job before you rely on it.',
            'That is our focus. A teacher who has tested an AI marker against their own marks, as in the lesson below, makes better decisions about every AI tool that arrives in the school afterwards.'
          ] }
      ]
    },
    {
      id: 'marking',
      tint: 'tint',
      eyebrow: 'AI and marking',
      h2: 'Can a teacher in Peru let AI mark pupils\' work?',
      lede: 'As a helper, with care; not as a replacement. Peru\'s 2025 AI regulation treats AI that evaluates the learning results of children and adolescents as high risk, unless it plays a complementary role and does not replace the teacher\'s judgement.',
      body: [
        { kind: 'p', html: 'DS 115-2025-PCM, the regulation of Law 31814, appeared in El Peruano on 9 September 2025. Its article 24.1 b lists among high-risk uses the evaluation of children and adolescents in education, including "evaluación de resultados de aprendizaje", with an exception: "salvo que el sistema integre una función complementaria y no reemplace la evaluación pedagógica humana". In plain words, a system that helps a teacher assess is treated differently from one that replaces the teacher\'s assessment.' },
        { kind: 'p', html: 'The same regulation, in article 13.2, promotes "la formación del personal docente en IA y tecnologías digitales" for pedagogical use in public and private schools. We quote both articles as published context about where Peru is heading. This is not legal advice, and how a particular school applies the regulation is for that school and its advisers to decide.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Use it to sort, not to judge', p: 'An AI helper can group similar answers so you mark them together, or flag answers it finds unusual. The mark and the comment stay yours.' },
          { h3: 'Test before you trust', p: 'Before using any marking tool with a class, run it on answers you have already marked and measure how often it agrees with you. The lesson below shows how.' },
          { h3: 'Keep pupils\' data out', p: 'Never paste names, photos or personal details into a public AI service. Anonymise first, and check whether your school allows the tool at all.' }
        ] }
      ]
    },
    {
      id: 'project',
      eyebrow: 'A real lesson',
      h2: 'How can a teacher check an AI marking tool? An evaluation set',
      lede: 'This is the lesson teachers in our course remember. You take answers you have already marked, let the tool mark them too, and compare. The comparison has a name, an evaluation set, and one number that matters more than the obvious one.',
      body: [
        { kind: 'ol', items: [
          '<strong>Collect.</strong> Fourteen pupil answers to one question, "Which is larger, 0.5 or 0.25? Explain.", each marked by the teacher: 2 for a full answer, 1 for a correct choice with weak or wrong reasoning, 0 for a wrong choice. The answers and marks in our code are invented, but they are typical of real ones.',
          '<strong>Mark again, by machine.</strong> A simple rule stands in for an AI helper: an answer starting with 0.5 gets 2 if it contains "because", "since" or "&gt;", otherwise 1; anything else gets 0. Real AI tools are more sophisticated, but the method of checking them is exactly the same.',
          '<strong>Compare.</strong> Count how often teacher and helper agree, how often they would agree by pure chance, and the difference between the two, a statistic called Cohen\'s kappa. Then read every disagreement.'
        ] },
        { kind: 'code', label: 'An evaluation set for a marking helper', lang: 'Python', code: CODE, note: 'Run with Python 3, it prints the seven lines below. The question, answers and marks are ours, written for the lesson.' },
        { kind: 'code', label: 'Output', lang: 'Output', code: OUT, note: 'Agreement 0.79 sounds good. Kappa 0.67 is the more honest number, and the three disagreements tell you what the tool cannot do.' },
        { kind: 'two', mt: true,
          leftH3: 'Why agreement is not enough',
          left: [
            'The helper agrees with the teacher on 11 of 14 answers, 79%. But if both simply handed out marks in the proportions they each use, they would agree about 36% of the time by chance alone. Kappa measures how much better than chance the helper does: here 0.67, which is useful but well short of the teacher.',
            'In a class where almost every answer is correct, a tool that gives everyone full marks could reach high agreement and a kappa near zero. Always ask for both numbers, from any vendor, about any marking tool.'
          ],
          rightH3: 'What the disagreements show',
          right: [
            'Two answers got full marks from the helper for reasoning a teacher would never accept: "because 5 &gt; 2" and "because it is shorter". The helper rewards the word "because", not the thinking after it. That is a pattern-matching failure, and real AI markers have subtler versions of it.',
            'The third answer is correct and well reasoned, "Half is more than a quarter, so 0.5 wins", but it does not start with "0.5", so the helper gives 0. A pupil who writes differently is punished. Only reading the disagreements reveals that; no single score does.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>With your own class.</strong> Choose one question you mark often. Take twenty answers you have already marked, anonymise them and run them through any AI tool your school allows. Count agreement and list every disagreement.',
          '<strong>Find the bias.</strong> Look at whom the tool marks down. Pupils who write briefly? Pupils who explain in a different order? Those are the pupils a tool would quietly disadvantage.',
          '<strong>Decide the role.</strong> In two sentences, decide what this tool may do in your classroom (sort, flag, suggest) and what it may not (decide a mark), and why.',
          '<strong>Optional, in Python.</strong> Change the helper rule to fix one disagreement. Does agreement rise, and does a new disagreement appear?'
        ] }
      ]
    },
    {
      id: 'pupils',
      tint: 'tint',
      eyebrow: 'Pupils and tools',
      h2: 'Which AI tools may pupils use, and at what age?',
      lede: 'Fewer than many teachers assume. Each company sets a minimum age in its own terms, and the strictest apply to the tools teachers hear about most.',
      body: [
        { kind: 'table', numCols: [], caption: 'Age terms set by the vendors, as we read them', head: ['Tool', 'What the vendor\'s terms say', 'In practice for a school'], rows: [
          ['ChatGPT (OpenAI)', 'At least 13; under 18 needs a parent or guardian\'s permission', 'Not for primary; secondary only with parents\' permission'],
          ['Claude (Anthropic)', 'At least 18', 'Teachers only; never pupils'],
          ['Khanmigo (Khan Academy)', 'Use by under-18s must be supervised by an authorised adult and linked to a parent or teacher account', 'Possible with supervision and linked accounts'],
          ['Gemini (Google)', '13 or the applicable age in the country; not with a Family Link account', 'Secondary only, with care']
        ] },
        { kind: 'source', html: 'Sources: OpenAI terms of use, Anthropic consumer terms, Khan Academy terms of service and Google Gemini help, as recorded in our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a>; read on 9 November 2026. Terms change; check the vendor\'s page and your school\'s own policy.' },
        { kind: 'p', mt: true, html: 'For younger pupils, the most useful AI lessons need no AI account at all: sorting games, simple rules like the marking helper above, and discussions about why a machine got something wrong. If you teach children and want examples, our <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a> page describes how we teach coding and AI ideas to children aged 6 to 12.' }
      ]
    },
    {
      id: 'calendar',
      eyebrow: 'When to study',
      h2: 'When can a teacher in Peru fit in an AI course?',
      lede: 'Around the school calendar. RM 501-2025-MINEDU sets the 2026 school year at 36 teaching weeks and 8 management weeks, in alternating blocks, with at least 160 teaching days and 30 management days.',
      body: [
        { kind: 'table', numCols: [], caption: 'The 2026 school calendar for Educación Básica (RM 501-2025-MINEDU, table 1)', head: ['Block', 'Length', 'Dates in 2026'], rows: [
          ['First management block', '2 weeks', '2 to 13 March'],
          ['First teaching block', '9 weeks', '16 March to 15 May'],
          ['Second management block', '1 week', '18 to 22 May'],
          ['Second teaching block', '9 weeks', '25 May to 24 July'],
          ['Third management block', '2 weeks', '27 July to 7 August'],
          ['Third teaching block', '9 weeks', '10 August to 9 October'],
          ['Fourth management block', '1 week', '12 to 16 October'],
          ['Fourth teaching block', '9 weeks', '19 October to 18 December'],
          ['Fifth management block', '2 weeks', '21 to 31 December']
        ] },
        { kind: 'source', html: 'Source: MINEDU, RM 501-2025-MINEDU, Norma Técnica para el Año Escolar 2026, section 5.2.1, table 1, checked against the scanned page; read on 9 November 2026. Schools may adapt to local context; Educación Básica Alternativa follows its own two periods.' },
        { kind: 'two', mt: true,
          leftH3: 'A plan that works for many teachers (ours)',
          left: [
            'Start in the January to February break, when there are no classes to prepare, and set a steady pace of two short classes a week. Use the management weeks in May, July and October to catch up or finish a project.',
            'In the busiest teaching weeks, especially around reports, one-to-one classes can pause or move; tell your mentor your school\'s dates at the start.'
          ],
          rightH3: 'The clock',
          right: [
            'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
            'Peru does not change its clocks, and neither does India, so the gap stays at ten and a half hours all year. A 06:30 class in Lima, before school, is 17:00 in India; an 18:00 class after school is 04:30 the next morning in India, which some mentors can do.'
          ] }
      ]
    },
    {
      id: 'english',
      tint: 'tint',
      eyebrow: 'In English',
      h2: 'Is my English good enough for a course in English?',
      lede: 'Most likely, if you can follow a slow talk in English. EF\'s English Proficiency Index 2025 gives Peruvian adults working as teachers a score of 532, in the "moderate" band, close to the national 519.',
      body: [
        { kind: 'two',
          leftH3: 'A double benefit',
          left: [
            'For English teachers and teachers at bilingual, Cambridge or IB schools, the course is professional English practice as well as AI. For others, it is a chance to use English with a purpose, in a subject where the original sources are in English anyway.',
            'EF tests adults who choose to take its online test, so its scores describe that group, not every teacher in Peru.'
          ],
          rightH3: 'How we make it work',
          right: [
            'Mentors speak steadily, check understanding often and put key terms in the chat. You can ask a mentor to repeat or rephrase at any time. We do not teach in Spanish, but one-to-one classes let you set the pace.',
            'If you prefer to read about this course in Spanish first, our <a class="ag-inline-link" href="/ia-para-docentes-curso-en-ingles">IA para docentes</a> page describes it for teachers in Spanish, with a different lesson; the live classes are the same.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'What a teacher can do at each stage',
    lede: 'Our own stages for the teachers\' route. They are not a MINEDU certificate and do not count towards the Carrera Pública Magisterial scale.',
    table: { numCols: [], caption: 'AI for teachers: stages (ours)', head: ['Stage', 'The teacher can', 'Shown by'], rows: [
      ['1. Explain', 'Describe how a classifier and a language model reach an answer', 'A five-minute explanation to colleagues'],
      ['2. Check ages', 'Say which tools pupils of each age may use', 'A one-page guide for your school'],
      ['3. Prompt with care', 'Get useful planning help without sharing pupils\' data', 'Three lesson plans, checked and corrected'],
      ['4. Evaluate', 'Build an evaluation set and read kappa and disagreements', 'The marking lesson, on your own subject'],
      ['5. Build', 'Write a small classroom tool in Python, optional', 'A working quiz or checker'],
      ['6. Decide', 'Set the role of an AI tool in your classroom', 'A written policy for one tool']
    ] },
    left: { h3: 'For teachers', ps: [
      'Agreement alone flatters a tool. Ask for kappa, then read every disagreement.',
      'A tool that rewards the word "because" is not reading the reasoning.'
    ] },
    right: { h3: 'For school leaders', ps: [
      'Stage 4 is the one to ask for before any AI marking tool is adopted.',
      'Teachers receive notes on what they built and tested, not just hours attended.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses teachers take',
    lede: 'All live and in English. Several are courses teachers later recommend to their own pupils.',
    bands: [
      { num: 'I', h3: 'For the teacher', sub: 'Adult courses', courses: [
        { code: 'ATE / SELF / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python Masterclass', blurb: 'Programming from zero, at an adult pace.' },
        { code: 'ATE / SELF / 02', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI', blurb: 'How language models are used and evaluated.' },
        { code: 'ATE / SELF / 03', slug: 'canva-ai-design-masterclass', title: 'Canva and AI design', blurb: 'Clear classroom materials with AI features.' }
      ] },
      { num: 'II', h3: 'Maths and data', sub: 'For maths and science teachers', courses: [
        { code: 'ATE / MATH / 01', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for Data Science', blurb: 'Statistics and linear algebra behind AI.' },
        { code: 'ATE / MATH / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'School maths explored in Python.' },
        { code: 'ATE / MATH / 03', slug: 'data-analysis-mastery-course-college', title: 'Data Analysis', blurb: 'Excel, SQL and Python for real datasets.' }
      ] },
      { num: 'III', h3: 'For your pupils', sub: 'Courses to recommend', courses: [
        { code: 'ATE / PUPIL / 01', slug: 'ai-literacy-for-kids-course', title: 'AI Literacy for Kids', blurb: 'Ages 8 to 14: understanding AI, not just using it.' },
        { code: 'ATE / PUPIL / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and ML for teens', blurb: 'Python to real models for 13 to 18 year olds.' },
        { code: 'ATE / PUPIL / 03', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'First games and stories for young children.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'What does a live class for teachers look like?',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Before school', l: 'Early mornings in Peru meet the Indian evening.' },
      { time: 'After school', l: 'Evenings in Peru, early morning in India, by arrangement.' },
      { time: 'One to one', l: 'Your pace, paused for report weeks and exams.' }
    ],
    cells: [
      { h3: 'Your subject', p: 'Examples drawn from what you actually teach.' },
      { h3: 'Your marks', p: 'Evaluation sets built on your own marked work.' },
      { h3: 'No pupil data', p: 'Everything anonymised before it reaches a tool.' },
      { h3: 'Clear English', p: 'Steady pace; key terms written down.' },
      { h3: 'Adults only', p: 'Teacher groups never mix with pupils.' },
      { h3: 'One mentor', p: 'The same person through the whole course.' }
    ]
  },

  projectsH2: 'What our students build',
  projectsLede: 'Examples of work by students in our longer courses, the kind of projects teachers later set their own classes. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews from learners and families, word for word.',

  fees: {
    h2: 'Fees for teachers',
    lede: 'The course is priced in US dollars and paid by card. Your bank converts each monthly payment into soles at the rate it uses that day, so the figure in soles may vary slightly between months.',
    free: ['A free first class', 'Try the marking check on a few answers', 'No card to book'],
    group: ['Fifteen to twenty adult learners', 'One mentor from start to finish', 'Two live classes a week', 'Monthly; pause in busy school weeks'],
    one: ['A mentor for you alone', 'Built around your subject and school', 'Times fitted around your teaching']
  },

  faq: {
    eyebrow: 'Teachers in Peru ask',
    h2: 'AI for teachers: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Our teachers\' course is taught live online in English, and only in English. Mentors speak steadily, adjust to your accent and pace, and write key terms in the chat, so a teacher with intermediate English can follow and improve along the way.' },
      { q: 'Do I need to know how to code?', a: 'No. The core of the teachers\' route, including the marking check, can be done without writing code. Teachers who want to build their own tools can add Python at any point, from zero.' },
      { q: 'Is this the same as MINEDU\'s AI course?', a: 'No. MINEDU\'s free course "Inteligencia artificial (IA) en la práctica docente" focuses on practice and counts towards the teaching career scale. Ours is independent, goes deeper into how AI works and how to test it, and does not count towards that scale.' },
      { q: 'Can I use AI to mark my pupils\' work?', a: 'As a helper, carefully. Test any tool on answers you have already marked, as in the lesson on this page, and keep the final mark yours. Peru\'s DS 115-2025-PCM treats AI that replaces human evaluation of pupils\' learning as high risk; that is context, not legal advice.' },
      { q: 'Which AI tools can my pupils use?', a: 'It depends on age and on each vendor\'s terms. ChatGPT requires users to be at least 13, with a parent\'s permission under 18; Claude requires 18. For primary pupils we recommend AI lessons that need no account at all.' },
      { q: 'When can I take classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Many teachers start in the January to February break and use the 2026 management weeks to catch up.' },
      { q: 'What is Cohen\'s kappa, briefly?', a: 'A measure of how much two markers agree beyond what chance alone would produce. Agreement of 79% with chance agreement of 36% gives a kappa of 0.67 in our lesson: useful, but well short of a teacher marking alone.' },
      { q: 'Is there a certificate?', a: 'Our own certificate of completion. It is not a MINEDU certificate, does not count for the Carrera Pública Magisterial scale, and we are not connected with MINEDU, any UGEL or any school.' },
      { q: 'Can a group of teachers from one school join together?', a: 'Yes. Teachers from the same school can form a group, and the examples can be built around your shared subjects and calendar. Contact us to arrange it.' },
      { q: 'What do I need?', a: 'A laptop or desktop computer, a stable connection and a headset. Accounts for AI tools are optional and set up only with tools your school permits.' }
    ]
  },

  elsewhere: {
    eyebrow: 'See also',
    h2: 'Related pages',
    lede: 'Other pages teachers find useful.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Everything we teach in Peru, by age.' },
      { href: '/profesor-de-matematicas-en-ingles-peru', label: 'Profesor de matemáticas en inglés', p: 'Maths taught in English, explained in Spanish.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Minimum ages for over a hundred AI tools.' },
      { href: '/we-teach-you-how-to-think', label: 'We teach you how to think', p: 'Our approach: reasoning before tools.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'How a live class runs.' },
      { href: '/courses', label: 'All courses', p: 'Every syllabus.' }
    ]
  },

  start: {
    h2: 'Book a free class for teachers',
    lede: 'Bring five answers you have already marked, anonymised. In the trial, you and a mentor run a simple marking check on them and talk through the disagreements. You leave knowing how the course works and which route suits you.',
    readFirst: 'Prefer to read first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describes our classes, and each course in the <a class="ag-inline-link" href="/courses">course list</a> has its full syllabus.',
    note: 'All classes are live online, in English, with mentors based in India. WhatsApp us in English for a quick answer.',
    formNote: 'Free, with no card and no obligation.'
  },

  footer: {
    cols: [
      { h4: 'For educators', links: [
        { href: '/ai-tools-age-guide', label: 'AI tools and age' },
        { href: '/we-teach-you-how-to-think', label: 'Thinking first' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Classes in Peru' },
        { href: '/ia-para-docentes-curso-en-ingles', label: 'IA para docentes' },
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños' },
        { href: '/profesor-de-matematicas-en-ingles-peru', label: 'Matemáticas en inglés' }
      ] }
    ],
    bottomRight: 'Mark it yourself first'
  },

  personalityCss: `
.ag-root.ag-ate .ag-hero h1 { max-width: 15ch; letter-spacing: -0.015em; }
.ag-root.ag-ate .ag-capsule { border-left-width: 5px; border-radius: 0; }
.ag-root.ag-ate .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-ate .ag-table td:last-child { white-space: nowrap; }
.ag-root.ag-ate .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU press notes of 9 May 2025 (teacher AI course and workshops) and 4 December 2025 (AI in 205 rural schools); RM 501-2025-MINEDU, Norma Técnica para el Año Escolar 2026, table 1; DS 115-2025-PCM arts. 13.2 and 24.1 b (El Peruano, 9 September 2025); EF EPI 2025 Peru, teacher score; vendor terms of OpenAI, Anthropic, Khan Academy and Google via our AI tools age audit. All read 9 November 2026.',
    localProject: 'An original evaluation-set lesson for teachers: fourteen invented answers to "Which is larger, 0.5 or 0.25? Explain." with the teacher\'s 0/1/2 marks; a keyword marking rule standing in for an AI helper; agreement 0.79, chance agreement 0.36, Cohen\'s kappa 0.67; the three disagreements show the helper rewarding the word "because" and penalising a correct answer phrased differently. Plus four classroom tasks. Lesson family: evaluation sets and inter-rater agreement.',
    requiredMentions: ['agreement 0.79 | chance 0.36 | kappa 0.67', 'Half is more than a quarter, so 0.5 wins', 'The helper rewards the word "because", not the thinking after it', 'salvo que el sistema integre una función complementaria y no reemplace la evaluación pedagógica humana', 'more than 87,000 teachers had enrolled', '205 rural schools', 'Fifth management block', 'a score of 532, in the "moderate" band', 'Mark it yourself first'],
    sources: [
      { claim: 'More than 87,000 teachers in MINEDU\'s free AI course; certificate for the career scale; two units; workshops in 26 regions, 3,550 and 1,600 targets (9 May 2025).', url: 'https://www.gob.pe/institucion/minedu/noticias/1164507-minedu-capacita-a-mas-de-87-000-docentes-en-inteligencia-artificial-en-el-ambito-nacional' },
      { claim: 'AI for planning in 205 rural schools serving about 27,000 pupils; 627,508 rural secondary pupils (4 December 2025).', url: 'https://www.gob.pe/institucion/minedu/noticias/1304191-minedu-implementara-uso-de-inteligencia-artificial-para-fortalecer-aprendizajes-de-27-000-estudiantes-del-ambito-rural' },
      { claim: '2026 school year: 36 teaching weeks, 8 management weeks, 160 and 30 days; block dates (RM 501-2025-MINEDU table 1).', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' },
      { claim: 'DS 115-2025-PCM art. 13.2 (teacher training in AI) and art. 24.1 b (AI evaluating learning outcomes high risk unless complementary).', url: 'https://www.gob.pe/institucion/pcm/normas-legales/7133522-115-2025-pcm' },
      { claim: 'EF EPI 2025 Peru: teacher score 532, moderate; Peru 519.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'ChatGPT 13+ with parental permission under 18; Claude 18+; Khanmigo supervised under 18; Gemini 13+.', url: 'https://openai.com/policies/row-terms-of-use/' }
    ],
    rejectedClaims: [
      'UNESCO AI competency framework for teachers: unesco.org returned a captcha on 9 November 2026; not retried and not cited.',
      'That our course counts towards the Carrera Pública Magisterial scale or is linked to MINEDU, SIFODS, PerúEduca or any UGEL: false; the page says it does not.',
      'Names of officials or award-winning teachers: not used.',
      'Legal advice on whether a school may use AI marking: none; the regulation is quoted as context.',
      'Any measured accuracy for a real AI marking product: none; the lesson uses an invented rule and says so.'
    ]
  }
};
