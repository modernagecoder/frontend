// SHIP: market | Best AI course in Peru: judge it by how honestly it measures a model | accuracy paradox: an always-"fine" model scores 0.95 accuracy and 0.00 recall
'use strict';
// Best AI course in Peru (ag- English guide, Peru cluster row PE062, P3 best, hubGroup guides).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md (section 3.9: superlative in title and meta only, plain keyword
// H1, a section that defines what "best" means with evidence, never rank or price a named competitor); writer brief
// docs/superpowers/plans/2026-11-09-pe-writer-brief.md. Owner 2026-11-09: "make sure all our classes are live online in
// english". Owner 2026-11-08: timing flexible, any time. Fees render in USD from the template only.
// Searches (KEYWORDS.md sections 1, 2 and 6, AI row): "ai course peru", "curso de inteligencia artificial peru", "curso de ia
// con certificado"; questions "Do I need coding for an AI course?", "¿Dónde estudiar inteligencia artificial en Perú?", "¿Hay
// curso de IA gratis con certificado?".
// Spine (different from the Spanish sibling mejor-curso-de-inteligencia-artificial-peru, whose lesson is memorisation against
// generalisation on a lookup table): "best" defined as an AI course that is honest about measurement, data, age rules and
// claims; the lesson shows that accuracy alone rewards a model that never finds what it is meant to find (rare-event data,
// recall and precision); primary-source table of minimum ages in the terms of five AI tools a course might use (via our audit
// of the vendors' own pages); how AI is entering Peruvian education (MINEDU teacher course, 205 rural schools, Hackathon 2025,
// OPEIA 2026, OPI generative-AI ban); whether coding is needed; English. All ages. No competitor is named, ranked or priced.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/facts-school/src/ and facts-market/src/, fetched
// 2026-11-08 by the research pass; every quote grepped in the raw text):
//  MINEDU press note, 9 May 2025 (n-ia-87000): "más de 87 000 docentes en el territorio nacional se han inscrito en el curso
//    “Inteligencia artificial (IA) en la práctica docente”". (A minister is named in the note; not used.)
//  MINEDU press note, December 2025 (n-ia-rural): "implementará el próximo año el uso de la inteligencia artificial para la
//    planificación de los aprendizajes en 205 instituciones educativas del ámbito rural"; headline figure "27 000 estudiantes".
//  MINEDU press note, Hackathon 2025 (n-hackathon2025): "proyectos de IA y robótica"; "entre 2023 y 2025, la presencia de
//    estudiantes mujeres creció en 28 %".
//  UTEC OPI home (opi-home): "Olimpiada Peruana de Inteligencia Artificial (OPEIA) Inscripciones : hasta el 18 de marzo del 2026.
//    Competencia : 19 de marzo del 2026 ( única fecha)."; "Estos son los estudiantes que fueron seleccionados para representar al
//    Perú en la IOAI en el año 2025."; "abiertas gratuitamente a todos los estudiantes de secundaria del país".
//  OPI Reglamento 2025 (opi-reglamento-2025): "Queda prohibido el uso de IA generativa para la resoluci´on de problemas."
//  Vendor terms, quoted in content/ai-tool-age-audit.json (audited 2026-07-15 from each vendor's own page): ChatGPT "You must be
//    at least 13 years old ... If you are under 18 you must have your parent or legal guardian's permission"; Claude "You must
//    be at least 18 years old or the minimum age required to consent to use the Services in your location, whichever is
//    higher"; Gemini "You must be 13 (or the applicable age in your country) or over to use Gemini with a personal or school
//    Google Account and 18 or over to use Gemini with a work account"; Microsoft Copilot "You must be at least 13 years old to
//    use Copilot, and in some countries, the minimum age may be higher"; Perplexity "You must be 13 years of age or older ...
//    only permitted to use the Services if the minor's parent or guardian accepts these Terms on the minor's behalf".
//  INEI TIC II trimestre 2026 (inei_tic_iit2026): "el 97,3% de la población de 19 a 24 años utilizó Internet, seguido por el grupo
//    de 25 a 40 años con un 95,2%"; "el 36,4% de los hogares del país disponía de al menos una computadora".
//  EF EPI 2025 (ef_peru): Peru 519, Lima 555, "Reading score:" 540, "Speaking score:" 480.
//  Brand facts: 10,000+ students worldwide, 4.9 from about 547 Google reviews, since 2020; group fifteen to twenty or one to one.
//  Time: tzdata America/Lima UTC-5 all year, Asia/Kolkata UTC+5:30.
// Our own program (scratchpad pe/e8/bea_check.py), 200 invented pump readings, python3 -I (3.14), exact output:
//    "lazy       accuracy 0.95  recall 0.00  precision 0.00" / "threshold  accuracy 0.90  recall 0.90  precision 0.32"
// Our own arithmetic for the page: 190 / 200 = 0.95; threshold model 9 caught of 10, 19 false alarms, 9 / 28 = 0.32.
// Lesson family: the accuracy paradox on rare events: a model that always answers "fine" beats a useful model on accuracy;
// recall and precision show the truth.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const CODE = [
  '# 200 invented readings from a water pump: 1 means the pump is about to fail, 0 means it is fine.',
  '# Only 10 of the 200 are failures, as in most real fault data.',
  'truth = [1] * 10 + [0] * 190',
  'vibration = [9, 8, 9, 7, 8, 6, 9, 8, 5, 7] + [1, 2, 3, 4, 5, 2, 3, 4, 5, 6] * 19   # the failing pumps shake more',
  '',
  'def lazy_model(v):',
  '    return 0                      # always says "fine"',
  '',
  'def threshold_model(v):',
  '    return 1 if v >= 6 else 0     # a simple rule learned from earlier data',
  '',
  'def report(name, model):',
  '    pred = [model(v) for v in vibration]',
  '    tp = sum(p == 1 and t == 1 for p, t in zip(pred, truth))',
  '    fp = sum(p == 1 and t == 0 for p, t in zip(pred, truth))',
  '    fn = sum(p == 0 and t == 1 for p, t in zip(pred, truth))',
  '    accuracy = sum(p == t for p, t in zip(pred, truth)) / len(truth)',
  '    recall = tp / (tp + fn)',
  '    precision = tp / (tp + fp) if tp + fp else 0.0',
  '    print(f"{name:10} accuracy {accuracy:.2f}  recall {recall:.2f}  precision {precision:.2f}")',
  '',
  'report("lazy", lazy_model)',
  'report("threshold", threshold_model)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'guides', label: 'Best AI course' },
  slug: 'best-ai-course-in-peru',
  code: 'bea',
  accent: '#784756',
  accentRationale: 'Best AI course in Peru: a muted plum #784756, the colour of purple maize (maíz morado) from the Andes, chosen as a quieter, more sceptical tone for a page about testing AI claims; contrast passes 4.5 on all three papers (checked by the build gate)',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Best AI course in Peru',
  title: 'Best AI Course in Peru: How to Judge One, Live in English',
  description: 'How to judge an AI course in Peru for children, teens or adults: honest model testing, tool age rules, real coding, and our live online AI classes in English.',
  ogDescription: 'What separates a serious AI course from a fashionable one, for learners in Peru: whether it tests models honestly, respects AI tool age rules and teaches real code. With a Python lesson where a useless model scores 95% accuracy.',
  twitterDescription: 'Judging an AI course from Peru: one Python lesson shows why 95% accuracy can mean nothing.',
  pageName: 'Best AI Course in Peru',
  webPageDescription: 'A guide to choosing an artificial intelligence course in Peru, built from MINEDU and UTEC sources, AI vendors\' own terms, INEI and EF EPI, with an original Python lesson on the accuracy paradox, recall and precision.',
  courseDescription: 'Live online AI courses taught in English for learners in Peru from age 8 to adult: how AI works, machine learning in Python, honest model testing and generative AI, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Best AI course',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#meaning', label: 'What best means' },
    { href: '#accuracy', label: 'The 95% trap' },
    { href: '#ages', label: 'Tool ages' },
    { href: '#peru', label: 'AI in Peru' },
    { href: '#coding', label: 'Do I need code?' }
  ],
  eyebrow: 'Peru &middot; Choosing an AI course &middot; Ages 8 to adult',
  h1: 'An AI course in Peru that shows how models are tested',
  lede: 'Artificial intelligence courses have multiplied faster than anyone can review them, and many teach little beyond typing prompts into a chatbot. This page is for learners and parents in Peru who want to tell a serious course from a fashionable one. It sets out what a good AI course should prove, the age rules written into the tools themselves, what Peru is doing with AI in education, and a short program where a useless model looks excellent.',
  secondaryCta: { href: '#accuracy', label: 'See the 95% trap' },
  wa: 'Hello Modern Age Coders, I am in Peru and comparing AI courses. Could I book a free live AI class in English?',
  heroNote: 'Live online teaching since 2020 &middot; 10,000+ students worldwide &middot; AI taught live, online and in English',
  spec: [
    ['Who', 'Children from 8, teenagers, adults'],
    ['Covers', 'How AI works, ML, generative AI'],
    ['Coding', 'Python taught inside the course'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Peru times', 'Whatever suits the learner'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'The short answer',
  capsule: 'A good AI course in Peru teaches how models are built and how they are tested on data they never saw, not only how to type prompts, and it follows each AI tool\'s own age rules. Modern Age Coders teaches AI live online in English to children from 8, teenagers and adults in Peru: AI literacy for younger learners, machine learning in Python for teens and adults, in a group of fifteen to twenty or one to one, at flexible hours, with a free first class.',

  picks: {
    eyebrow: 'Three ways into AI',
    h2: 'Which AI course matches the learner\'s age?',
    lede: 'The right first course depends far more on age than on ambition. All three begin from zero.',
    items: [
      { course: 'ai-literacy-for-kids-course', code: 'BEA / 01', title: 'AI literacy, ages 8 to 14', note: 'Children learn what an AI model is, how it learns from examples and why it gets things wrong, through experiments they run themselves, without adult chatbot accounts.' },
      { course: 'ai-ml-masterclass-teens', code: 'BEA / 02', title: 'Machine learning for teens', note: 'Secundaria pupils learn enough Python to train small models, then learn to test them properly: held-out data, recall, precision and honest reporting.' },
      { course: 'ai-ml-masterclass-complete-college', code: 'BEA / 03', title: 'AI and ML for adults', note: 'University students and professionals go from Python basics through classical machine learning to deep learning and generative AI, measuring every model they build.' }
    ]
  },

  sections: [
    {
      id: 'meaning',
      eyebrow: 'Defining the word',
      h2: 'What does "best" mean for an AI course?',
      lede: 'There is no official ranking of AI courses in Peru, and a course that ranks itself first has told you only how it markets. A useful definition is narrower: the course that leaves this learner understanding what AI does, able to build a little of it, and honest about its limits. Six things show it.',
      body: [
        { kind: 'ol', items: [
          '<strong>It opens the model.</strong> Learners should see how a model turns examples into a rule, not only what it outputs. Ours build small models by hand before using libraries.',
          '<strong>It tests on data the model never saw, with more than one number.</strong> A course that reports only accuracy can be fooled by the trap shown below. Ours teach recall and precision from the first models.',
          '<strong>It says whether you will code.</strong> Ours teach Python inside the teen and adult courses; the children\'s course is AI literacy with no adult tools.',
          '<strong>It follows the tools\' age rules.</strong> Several popular AI tools set minimum ages in their terms (the table below). Our under-18 courses never require an adult account.',
          '<strong>It promises nothing it cannot control.</strong> No course can promise a job or a salary. Ours give a Modern Age Coders certificate of completion after a final exam; it is not a Peruvian qualification.',
          '<strong>It lets you watch first.</strong> Our first AI class is free and needs no card.'
        ] },
        { kind: 'p', mt: true, html: 'The Spanish guide <a class="ag-inline-link" href="/mejor-curso-de-inteligencia-artificial-peru">mejor curso de inteligencia artificial en Perú</a> asks seven questions of an AI course and teaches a different lesson, on memorising against generalising. Both describe the same live classes in English.' }
      ]
    },
    {
      id: 'accuracy',
      tint: 'tint',
      eyebrow: 'A real lesson',
      h2: 'Why can an AI model with 95% accuracy be useless?',
      lede: 'Because when the thing you are looking for is rare, a model that never finds it is still right most of the time. This is the first evaluation lesson in our teen and adult AI courses, and the clearest test of whether any AI course teaches measurement honestly.',
      body: [
        { kind: 'two',
          leftH3: 'The set-up',
          left: [
            'A water company records how strongly 200 pumps vibrate. Ten of them are about to fail; the other 190 are fine. The data is invented for the lesson, but the shape, rare failures among many normal readings, is what real fault, fraud and disease data usually look like.',
            'Two models are compared. The lazy one always answers "fine". The threshold one flags any pump vibrating at 6 or more, a rule a learner would find by looking at earlier data.'
          ],
          rightH3: 'What the numbers mean',
          right: [
            '<strong>Accuracy</strong> is the share of all answers that were right. <strong>Recall</strong> is the share of real failures the model caught. <strong>Precision</strong> is the share of its alarms that were real failures.',
            'Our arithmetic: the lazy model is right about all 190 healthy pumps, so 190 out of 200 gives 0.95, while catching none of the ten failures. The threshold model catches 9 of the 10 but raises 19 false alarms, so 9 of its 28 alarms are real: precision 0.32.'
          ] },
        { kind: 'code', label: 'accuracy_trap.py: two models, three measures', lang: 'Python', code: CODE, note: 'It prints <code>lazy       accuracy 0.95  recall 0.00  precision 0.00</code> and then <code>threshold  accuracy 0.90  recall 0.90  precision 0.32</code>.' },
        { kind: 'p', mt: true, html: 'Read the two lines together. On accuracy, the model that never catches a failing pump beats the one that catches nine in ten. Any course, report or product that quotes only accuracy on rare events is hiding this. The threshold model is not perfect either: about two of every three alarms are false, and whether that is acceptable depends on what a false alarm costs compared with a missed failure. That judgement belongs to people, and a good AI course trains people to make it.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Move the line.</strong> Change the threshold to 7, then to 5. Write down recall and precision each time, and describe the trade-off in one sentence.',
          '<strong>Change the costs.</strong> Suppose a missed failure floods a street and a false alarm costs one technician visit. Which threshold would you choose, and why?',
          '<strong>Find the formula.</strong> Look up the F1 score, add it to <code>report</code>, and check whether it agrees with your choice.',
          '<strong>Say it plainly.</strong> In three English sentences, explain to a manager why "95% accurate" is not good news here.'
        ] }
      ]
    },
    {
      id: 'ages',
      eyebrow: 'Rules in the tools',
      h2: 'What age do you need to be to use ChatGPT, Claude or Gemini?',
      lede: 'It depends on the tool, and the answer is written in each company\'s own terms rather than in any course brochure. An AI course for under-18s that asks learners to sign up for these tools should be able to show it has read them.',
      body: [
        { kind: 'table', numCols: [], caption: 'Minimum ages in the terms of five AI tools, and how our classes respond', head: ['Tool', 'What the vendor\'s terms say', 'In our classes'], rows: [
          ['ChatGPT (OpenAI)', 'At least 13; under 18 needs a parent\'s or legal guardian\'s permission', 'Not used by under-18s in class; adults may use it to question their code'],
          ['Claude (Anthropic)', 'At least 18, or older where local law requires', 'Adults only'],
          ['Gemini (Google)', '13 or the local age with a personal or school account; 18 with a work account; the web app is not available to accounts managed by Family Link', 'Not required in any under-18 course'],
          ['Microsoft Copilot', 'At least 13, higher in some countries, where a parent must manage the account', 'Not required in any under-18 course'],
          ['Perplexity', '13 or older; a minor may use it only if a parent or guardian accepts the terms for them', 'Not required in any under-18 course']
        ] },
        { kind: 'source', html: 'Source: each vendor\'s own terms or help pages, quoted word for word in our internal audit of AI tool age rules (last audited 15 July 2026). Terms change; check the vendor\'s current page before signing a child up. Nothing here is legal advice.' },
        { kind: 'p', mt: true, html: 'Children in our AI literacy course work with small models and teaching tools built for the purpose, which let them see inside the model rather than chat with it. Teenagers train their own models in Python. That is a more useful education anyway: a teenager who has built and tested a classifier understands a chatbot better than one who has used a chatbot for a year.' }
      ]
    },
    {
      id: 'peru',
      tint: 'tint',
      eyebrow: 'AI in Peru',
      h2: 'How is artificial intelligence entering Peruvian education?',
      lede: 'Mostly through teachers, planning and competitions so far, not as a school subject. These are the steps MINEDU and UTEC have published.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Teachers first', p: 'By May 2025 more than 87,000 teachers across Peru had enrolled in MINEDU\'s online course on AI in teaching practice.' },
          { h3: 'Rural schools', p: 'In December 2025 MINEDU announced it would use AI to plan learning in 205 rural schools from 2026, a plan it says reaches about 27,000 pupils.' },
          { h3: 'Students competing', p: 'UTEC\'s Peruvian AI Olympiad, OPEIA, held its 2026 round on 19 March 2026, free for secundaria pupils; UTEC\'s olympiad pages also list the students selected to represent Peru at the international AI olympiad, the IOAI, in 2025.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What a family can read into it',
          left: [
            'MINEDU\'s Hackathon 2025, its fourth, rewarded teams of pupils and teachers for AI and robotics projects, and the ministry reports that the share of girls taking part grew 28% between 2023 and 2025.',
            'None of this puts AI on the secundaria timetable yet. A teenager who wants to understand it properly, or to prepare for OPEIA, still has to look outside school.'
          ],
          rightH3: 'A rule worth copying',
          right: [
            'UTEC\'s informatics olympiad forbids generative AI for solving problems. That is not hostility to AI; it is a statement that the contest measures the student\'s reasoning.',
            'We apply the same idea in every course: AI is studied and built, and adults may use it as a critic, but the learner\'s own thinking is what we assess. We have no connection with MINEDU, UTEC or either olympiad.'
          ] }
      ]
    },
    {
      id: 'coding',
      eyebrow: 'Before you start',
      h2: 'Do I need to know coding to take an AI course?',
      lede: 'Not to start, but a serious AI course will teach you some. Without code, a learner can describe AI; with a little Python, they can build a model, break it and measure it, which is where understanding comes from.',
      body: [
        { kind: 'two',
          leftH3: 'Children of 8 to 14',
          left: [
            'No code is needed. Our AI literacy course uses hands-on experiments to show how machines learn from examples, where bias comes from, and why an AI answer can be confidently wrong.',
            'Children who enjoy it often move on to Python and AI for kids, where they write their first real code. Parents who prefer a Spanish explanation can read <a class="ag-inline-link" href="/curso-de-inteligencia-artificial-para-ninos-peru">curso de inteligencia artificial para niños</a>.'
          ],
          rightH3: 'Teenagers and adults',
          right: [
            'Python is taught inside the course from the first weeks, enough to load data, train a model and run the tests in the lesson above. Nobody is expected to arrive knowing it.',
            'Adults who never want to code have an option too: our data and AI analytics course for non-programmers works in spreadsheets and dashboards. Teenagers can read the Spanish page <a class="ag-inline-link" href="/curso-de-ia-para-adolescentes-peru">curso de IA para adolescentes</a>.'
          ] },
        { kind: 'p', mt: true, html: 'Equipment matters more than background. INEI found that 97.3% of Peruvians aged 19 to 24 used the internet in the second quarter of 2026, but only 36.4% of households had a computer. Training even a small model needs a laptop or desktop; a phone is enough for the free first class only.' }
      ]
    },
    {
      id: 'english',
      tint: 'tint',
      eyebrow: 'The teaching language',
      h2: 'Why learn AI in English rather than Spanish?',
      lede: 'Because the field works in English. Research papers, library documentation, model cards and the error messages a learner will meet are almost all in English, and translating each one is slow.',
      body: [
        { kind: 'p', html: 'EF\'s English Proficiency Index 2025 places Peru at 519, in the moderate band, and Lima at 555, in the high band; Peruvians\' reading score (540) is well ahead of their speaking score (480). AI classes suit that profile, because so much of the work is reading code and charts on screen. Our mentors, based in India, speak clearly and unhurriedly, type key terms in the chat, and let learners answer in short phrases. More on English-taught AI for Peru is on our Spanish page <a class="ag-inline-link" href="/curso-de-inteligencia-artificial-en-ingles-peru">curso de inteligencia artificial en inglés</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'Stages of understanding AI',
    lede: 'Our own stages, used to place learners and to show families what has changed. Each stage adds one honest measurement habit.',
    table: { numCols: [], caption: 'AI understanding by stage, with the measurement habit at each (ours)', head: ['Stage', 'The learner can', 'Measurement habit'], rows: [
      ['1. Explain', 'Say how a model learns from examples', 'Asks "how do we know it works?"'],
      ['2. Train', 'Build a small classifier in Python', 'Keeps test data apart from training data'],
      ['3. Measure', 'Report accuracy, recall and precision', 'Spots the 95% trap on rare events'],
      ['4. Improve', 'Tune features and thresholds', 'Explains each trade-off in plain words'],
      ['5. Apply', 'Build and present a real project', 'Writes what the model cannot do']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask your child what their model gets wrong. A learner at stage 3 or above will have a specific answer.',
      'Younger children stay at stages 1 and 2, and that is the right place for them.'
    ] },
    right: { h3: 'For adults', ps: [
      'Stage 3 is the one employers notice: anyone can train a model; few can say honestly how good it is.',
      'Bring data from your own work, anonymised, and we will build the project around it.'
    ] }
  },

  catalogue: {
    eyebrow: 'More AI courses',
    h2: 'Nine more AI and data courses',
    lede: 'Grouped by age. Every course is taught live in English with one mentor per group.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 8 to 12', courses: [
        { code: 'BEA / KIDS / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'First real code, with small AI experiments inside.' },
        { code: 'BEA / KIDS / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'The step-by-step reasoning every model depends on.' },
        { code: 'BEA / KIDS / 03', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Logic through games, before typed code.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'BEA / TEEN / 01', slug: 'teens-ai-tools-mastery-course', title: 'AI tools for teens', blurb: 'Age-appropriate tools used critically, from 13.' },
        { code: 'BEA / TEEN / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Real datasets, charts and first predictions.' },
        { code: 'BEA / TEEN / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The language behind almost all AI work.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Ages 18 and over', courses: [
        { code: 'BEA / ADULT / 01', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI', blurb: 'Large language models, retrieval and agents, built and evaluated.' },
        { code: 'BEA / ADULT / 02', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'AI analytics without code', blurb: 'Spreadsheets and dashboards for working adults.' },
        { code: 'BEA / ADULT / 03', slug: 'ai-tools-mastery-complete-college', title: 'AI tools for work', blurb: 'Adult tools, including ChatGPT and Claude, used with judgement.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'A live AI class, seen from Peru',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Before work or school', l: 'A Lima morning falls in the Indian evening, a natural teaching hour.' },
      { time: 'After dinner', l: 'Late Lima hours are early Indian mornings; still available.' },
      { time: 'Private', l: 'A single learner and a mentor, with the project chosen together.' }
    ],
    cells: [
      { h3: 'Build, then measure', p: 'Every model a learner trains is tested before it is praised.' },
      { h3: 'A steady mentor', p: 'One teacher follows the group through the course.' },
      { h3: 'Unhurried English', p: 'Terms typed in the chat, time given to answer.' },
      { h3: 'Batches by age', p: 'Children, teenagers and adults learn separately.' },
      { h3: 'Short practice tasks', p: 'Set at the end of one lesson, discussed in the next.' },
      { h3: 'No adult accounts for minors', p: 'Under-18 courses never need one.' }
    ]
  },

  projectsH2: 'AI and coding projects by our learners',
  projectsLede: 'Examples from students with a year or more behind them. The <a class="ag-inline-link" href="/student-labs">student labs</a> have more.',
  reviewsLede: 'Google reviews from parents and learners, reproduced as written.',

  fees: {
    h2: 'AI course fees for learners in Peru',
    lede: 'Prices are in US dollars and charged to a card each month. Any figure in soles is your bank\'s conversion, made on the day it processes the payment.',
    free: ['A free first AI class', 'A real lesson with a real model', 'No card needed'],
    group: ['Fifteen to twenty learners of a similar age', 'The same mentor all course', 'Two live lessons a week', 'Pay month by month'],
    one: ['A mentor of your own', 'A project built around your goal', 'Lesson times you pick']
  },

  faq: {
    eyebrow: 'Questions from Peru',
    h2: 'Choosing an AI course in Peru: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. All our AI classes are taught live and online in English, with no Spanish lessons. Mentors speak clearly, slow down when asked, and show every step on screen, which suits learners in Peru who read English more easily than they speak it.' },
      { q: 'What is the best AI course in Peru?', a: 'Nobody publishes a fair ranking, so treat any "number one" claim with care. Look for a course that opens the model, tests it on unseen data with more than accuracy, follows tool age rules and lets you watch a class first.' },
      { q: 'Do I need to know programming?', a: 'No. Our course for children of 8 to 14 needs no code at all. Teen and adult courses teach Python inside the course. Adults who never want to code can take our AI analytics course for non-programmers.' },
      { q: 'Can my 12-year-old use ChatGPT in an AI course?', a: 'Not in ours. ChatGPT\'s terms require a parent\'s or guardian\'s permission under 18, Claude\'s require users to be 18, and Gemini\'s web app is not available to accounts managed by Family Link. Our under-18 courses never need these accounts.' },
      { q: 'Is there a free AI course with a certificate in Peru?', a: 'MINEDU has run a free online AI course for teachers, which more than 87,000 had joined by May 2025. For pupils, UTEC\'s OPEIA olympiad is free for secundaria students. Our first class is free; our certificate comes after completing a paid course and passing its exam.' },
      { q: 'What certificate do you give?', a: 'A Modern Age Coders certificate of completion, after the course\'s final exam. It records what you studied with us. It is not a Peruvian qualification, and no ministry or university is involved in it.' },
      { q: 'Will an AI course get me a job?', a: 'No course can promise that, and we do not. What a good course gives you is work you can show and explain: models you built, tested and wrote up honestly. That is what interviewers ask about.' },
      { q: 'When could classes run in Peru time?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Peru keeps UTC minus 5 all year and India is 10 hours 30 minutes ahead, so 08:00 in Lima is 18:30 in India.' },
      { q: 'What equipment do I need?', a: 'A laptop or desktop with a stable connection, and ideally a headset. Python and the libraries we use are free. A phone is enough to try the first class but not to train models.' },
      { q: 'How are fees paid from Peru?', a: 'By card once a month in US dollars; your bank converts the charge into soles. Booking the free first class needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'Related pages',
    lede: 'More reading on AI courses for Peru.',
    items: [
      { href: '/mejor-curso-de-inteligencia-artificial-peru', label: 'Mejor curso de inteligencia artificial', p: 'The Spanish guide, with a different lesson.' },
      { href: '/curso-de-inteligencia-artificial-en-ingles-peru', label: 'Curso de IA en inglés', p: 'Our AI classes explained in Spanish.' },
      { href: '/curso-de-ia-para-adolescentes-peru', label: 'Curso de IA para adolescentes', p: 'AI for secundaria pupils.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'The index of our Peru pages.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What happens in a live lesson.' },
      { href: '/we-teach-you-how-to-think', label: 'We teach you how to think', p: 'Reasoning before tools, in every subject.' }
    ]
  },

  start: {
    h2: 'Book a free AI class from Peru',
    lede: 'In the free lesson a learner meets a real model, sees how it was trained and tries to fool it. A parent or adult learner can then ask us anything, and we recommend the course, the format and a class hour that fits.',
    readFirst: 'Curious first? Read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or look through the <a class="ag-inline-link" href="/courses">course list</a> for each AI syllabus.',
    note: 'Lessons are live video classes from India, given in English. WhatsApp replies come in English too.',
    formNote: 'Free, no card, no strings.'
  },

  footer: {
    cols: [
      { h4: 'AI', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/we-teach-you-how-to-think', label: 'Thinking, not copying' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Classes in Peru' },
        { href: '/mejor-curso-de-inteligencia-artificial-peru', label: 'Mejor curso de IA' },
        { href: '/curso-de-inteligencia-artificial-para-ninos-peru', label: 'IA para niños' },
        { href: '/curso-de-ia-para-adolescentes-peru', label: 'IA para adolescentes' }
      ] }
    ],
    bottomRight: 'Ask what the model missed'
  },

  personalityCss: `
.ag-root.ag-bea .ag-hero h1 { max-width: 20ch; letter-spacing: -0.02em; }
.ag-root.ag-bea .ag-capsule { border-left-width: 4px; }
.ag-root.ag-bea .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-bea .ag-table td:first-child { font-weight: 600; white-space: nowrap; }
.ag-root.ag-bea .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU press notes (teacher AI course, May 2025; AI planning in 205 rural schools, December 2025; Hackathon 2025); UTEC OPI home (OPEIA 2026, IOAI 2025) and Reglamento OPI 2025; AI vendors\' terms via content/ai-tool-age-audit.json (audited 15 July 2026); INEI Boletín TIC II trimestre 2026; EF EPI 2025 Peru page. Read 8 and 9 November 2026.',
    localProject: 'An original Python lesson for learners in Peru on the accuracy paradox: 200 invented pump readings with 10 failures; a lazy model that always says "fine" prints accuracy 0.95, recall 0.00, precision 0.00; a threshold rule at 6 prints accuracy 0.90, recall 0.90, precision 0.32. Lesson family: accuracy on rare events, recall and precision.',
    requiredMentions: ['lazy       accuracy 0.95  recall 0.00  precision 0.00', 'threshold  accuracy 0.90  recall 0.90  precision 0.32', 'Ask what the model missed', 'that shows how models are tested', 'so 9 of its 28 alarms are real', 'more than 87,000 teachers across Peru', 'learning in 205 rural schools from 2026', 'grew 28% between 2023 and 2025'],
    sources: [
      { claim: 'More than 87,000 teachers enrolled in MINEDU\'s AI in teaching course (May 2025).', url: 'https://www.gob.pe/institucion/minedu/noticias/1164507-minedu-capacita-a-mas-de-87-000-docentes-en-inteligencia-artificial-en-el-ambito-nacional' },
      { claim: 'AI for learning planning in 205 rural schools from 2026, about 27,000 pupils.', url: 'https://www.gob.pe/institucion/minedu/noticias/1304191-minedu-implementara-uso-de-inteligencia-artificial-para-fortalecer-aprendizajes-de-27-000-estudiantes-del-ambito-rural' },
      { claim: 'Hackathon 2025, AI and robotics; girls\' participation up 28% from 2023 to 2025.', url: 'https://www.gob.pe/institucion/minedu/noticias/1220955-minedu-premia-el-talento-estudiantil-y-docente-por-innovar-con-inteligencia-artificial-y-robotica-en-hackathon-2025' },
      { claim: 'OPEIA on 19 March 2026; IOAI 2025 delegation; free for secundaria.', url: 'https://opi.utec.edu.pe/' },
      { claim: 'OPI bans generative AI for solving problems.', url: 'https://opi.utec.edu.pe/Reglamento_OPI_2025.pdf' },
      { claim: 'ChatGPT minimum age and parental permission under 18.', url: 'https://openai.com/policies/row-terms-of-use/' },
      { claim: 'Claude minimum age 18.', url: 'https://www.anthropic.com/legal/consumer-terms' },
      { claim: 'Internet use 19 to 24 and households with a computer, II trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025: Peru 519, Lima 555, reading 540, speaking 480.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' }
    ],
    rejectedClaims: [
      'Rankings of AI courses or claims that ours is the best: no primary source; refused.',
      'AI job or salary figures for Peru: no primary source; none given and no job promised.',
      'Any connection with MINEDU, UTEC, OPEIA or the IOAI: none, and the page says so.',
      'Copilot age floor for Peru specifically: Microsoft lists some countries with higher floors and Peru was not checked; the page says only "at least 13, higher in some countries".',
      'Spanish-language teaching or a Peruvian qualification: neither offered.'
    ]
  }
};
