// SHIP: market | Best coding classes in Peru: what a family can check in one trial class | Pareto dominance: cross off offers beaten on every measure, keep a shortlist
'use strict';
// Best coding classes in Peru (ag- English guide, Peru cluster row PE060, P3 best, hubGroup guides).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md (section 3.9: superlative in title and meta only, plain keyword
// H1, a section that defines what "best" means with evidence, never rank or price a named competitor); writer brief
// docs/superpowers/plans/2026-11-09-pe-writer-brief.md. Owner 2026-11-09: "make sure all our classes are live online in
// english". Owner 2026-11-08: timing flexible, any time. Fees render in USD from the template only.
// Searches (KEYWORDS.md sections 1, 6 and spec Appendix B prompt 1): "best online coding classes for kids in Peru in
// English", "coding classes lima peru", "best coding course for teens?", "Is online coding good for a 10 year old?".
// Spine (different from the Spanish sibling mejores-clases-de-programacion-para-ninos-peru, which scores eight criteria with a
// weighted sum): "best" cannot be a ranking, only a fit, and fit can be observed; the page lists what a family can watch for
// in one trial class (minutes typing, questions asked, the mentor checking understanding, what is left on screen at the
// end), what Peru already offers free and who it reaches (primary-source table: CNEB, Fábrica de Programadores, OPI, OPEIA,
// MINEDU Hackathon), the device question (INEI), English as a working language (EF EPI 2025), and one original program that
// crosses off offers beaten on every measure. All ages: children, teenagers and adults. No competitor is named, ranked or priced.
// Sources (every quote grepped in the raw text; raw copies fetched 2026-11-08 by the research pass under
// ~/Desktop/SkyCoders/keyword-research-2026-09/pe/facts-school/src/ and facts-market/src/):
//  CNEB, MINEDU (facts-school/src/cneb): "28 Se desenvuelve en entornos virtuales generados por las TIC"; "Competencias
//    transversales a las áreas: Se desenvuelve en"; secundaria JER "Matemática 4 4 4 4 4 Comunicación 4 4 4 4 4 Inglés 3 3 3 3 3";
//    no computing or programming area in any plan de estudios table (FACTS 39, BLOCKED.md gaps).
//  MINEDU press note, Fábrica de Programadores, July 2025 (n-fabrica-prog): "beneficiará a 1000 escolares de 4.º y 5.º de
//    secundaria de Lima Norte con formación en programación Python y certificación internacional"; "podrán rendir el examen
//    PCEP, con validez global"; "Esta experiencia piloto busca validar el modelo pedagógico y replicarlo en el ámbito nacional".
//  UTEC OPI home (opi-home): "abiertas gratuitamente a todos los estudiantes de secundaria del país"; "Olimpiada Peruana de
//    Inteligencia Artificial (OPEIA) ... Competencia : 19 de marzo del 2026"; OPI 2026 "Inscripciones : hasta el 18 de marzo
//    del 2026 . Competencia : 11 de Abril (Fase 2 - Final)".
//  OPI Reglamento 2025 (opi-reglamento-2025, LaTeX accents): "Se podr´a usar C++ o Python" (Fase 1); "Se podr´a usar solo C++."
//    (Fase 2); "Queda prohibido el uso de IA generativa para la resoluci´on de problemas." Paraphrased on the page.
//  MINEDU press note, Hackathon 2025 (n-hackathon2025): "la cuarta edición de la Hackathon 2025 del Ministerio de Educación
//    (Minedu), que premió a los equipos de estudiantes, docentes y especialistas, quienes sorprendieron con proyectos de IA y
//    robótica".
//  IOI statistics, Peru (ioi-stats-per): "First participation: 2022 Years participated: 5 Contestants participated: 13"; "Gold
//    medals: 0 Silver medals: 0 Bronze medals: 1".
//  INEI, Estadísticas de las TIC en los Hogares, II Trimestre 2026 (facts-market/src/inei_tic_iit2026): "el 36,4% de los
//    hogares del país disponía de al menos una computadora. Este porcentaje alcanzó el 53,3% en Lima Metropolitana, el 41,3% en
//    el resto urbano y 8,9% en el área rural"; "el uso de Internet fue menor entre los niños de 6 a 11 años (68,2%)".
//  EF EPI 2025, Peru page (facts-market/src/ef_peru): Peru 519 (moderate), Lima 555 (high), "Speaking score:" 480.
//  Vendor terms via content/ai-tool-age-audit.json (audited 2026-07-15): Claude 18+; ChatGPT under 18 needs a parent's or
//    legal guardian's permission.
//  Brand facts (scripts/brand-facts.json): 10,000+ students worldwide, 4.9 from about 547 Google reviews, teaching since 2020;
//    group fifteen to twenty, or one to one. Template fees cards: eight live classes a month.
//  Time: tzdata America/Lima UTC-5 all year (no DST since 1994), Asia/Kolkata UTC+5:30: India 10 h 30 min ahead.
// Our own program (scratchpad pe/e8/beco_shortlist.py), five invented offers, python3 -I (3.14), exact output:
//    Offer A beaten by nobody / Offer B beaten by ['Offer A', 'Offer C', 'Offer D'] / Offer C beaten by nobody /
//    Offer D beaten by ['Offer A', 'Offer C'] / Offer E beaten by nobody / Shortlist: ['Offer A', 'Offer C', 'Offer E']
// Lesson family: Pareto dominance. One offer beats another only if it is no worse on every measure and better on at least one;
// crossing off beaten offers leaves a shortlist, not a single winner, and the final choice is the family's.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const CODE = [
  '# Five invented class offers, measured the way a family can check in a trial class.',
  '# typing: minutes the learner types code in a 60-minute class (higher is better)',
  '# group: learners per mentor (lower is better)',
  '# projects: finished projects in the first three months (higher is better)',
  'offers = {',
  '    "Offer A": {"typing": 35, "group": 18, "projects": 3},',
  '    "Offer B": {"typing": 10, "group": 30, "projects": 1},',
  '    "Offer C": {"typing": 40, "group": 1, "projects": 2},',
  '    "Offer D": {"typing": 30, "group": 20, "projects": 2},',
  '    "Offer E": {"typing": 5, "group": 6, "projects": 4},',
  '}',
  'HIGHER = {"typing": True, "group": False, "projects": True}',
  '',
  'def at_least_as_good(x, y, key):',
  '    return x[key] >= y[key] if HIGHER[key] else x[key] <= y[key]',
  '',
  'def beats(x, y):',
  '    """x beats y if it is no worse on every measure and better on at least one."""',
  '    no_worse = all(at_least_as_good(x, y, k) for k in HIGHER)',
  '    better = any(x[k] != y[k] and at_least_as_good(x, y, k) for k in HIGHER)',
  '    return no_worse and better',
  '',
  'for name, o in offers.items():',
  '    beaten_by = [other for other, p in offers.items() if other != name and beats(p, o)]',
  '    print(name, "beaten by", beaten_by if beaten_by else "nobody")',
  '',
  'shortlist = [n for n, o in offers.items()',
  '             if not any(beats(p, o) for m, p in offers.items() if m != n)]',
  'print("Shortlist:", shortlist)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'guides', label: 'Best coding classes' },
  slug: 'best-coding-classes-in-peru',
  code: 'beco',
  accent: '#952755',
  accentRationale: 'Best coding classes in Peru: a deep cochineal crimson #952755, the red dye Andean weavers have taken from the cochineal insect for centuries, used here because the page is about judging quality by close inspection; contrast passes 4.5 on all three papers (checked by the build gate)',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Best coding classes in Peru',
  title: 'Best Coding Classes in Peru: How to Judge Them, Live in English',
  description: 'How to judge coding classes in Peru for children, teens and adults: what to watch in one trial class, what is free, and how our live English classes work.',
  ogDescription: 'What makes coding classes in Peru good, shown with evidence a family can check: minutes spent typing, group size, real projects, honest certificates, AI age rules, and a short Python program that turns five offers into a shortlist.',
  twitterDescription: 'Judging coding classes in Peru: what to watch for in one trial class, and how our live English classes compare on each point.',
  pageName: 'Best Coding Classes in Peru',
  webPageDescription: 'A guide to choosing coding classes in Peru for children, teenagers and adults, built from MINEDU, UTEC, INEI and EF EPI sources, with a checklist for a trial class and an original Python program on Pareto dominance.',
  courseDescription: 'Live online coding classes taught in English for learners in Peru from age 6 to adult: Scratch, Python, Java, web, apps and AI, in a group of fifteen to twenty or one to one, at hours the family chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Best coding classes',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#meaning', label: 'What best means' },
    { href: '#trial', label: 'Trial class' },
    { href: '#free', label: 'Free options' },
    { href: '#shortlist', label: 'Shortlist code' },
    { href: '#english', label: 'English' }
  ],
  eyebrow: 'Peru &middot; A guide to choosing &middot; Ages 6 to adult',
  h1: 'Coding classes in Peru, judged on what you can see',
  lede: 'Every provider says its coding classes are the right ones. A family in Lima, Piura or Cusco cannot test that claim by reading websites, but it can test it by watching one class closely. This guide sets out what to look for, what Peru already gives learners for free, and how we measure up on each point, so you can decide with evidence rather than adverts.',
  secondaryCta: { href: '#trial', label: 'Read the trial-class checklist' },
  wa: 'Hello Modern Age Coders, I am in Peru and comparing coding classes. Could I book a free live class in English to see how you teach?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students worldwide &middot; every class live, online and in English',
  spec: [
    ['Who', 'Children from 6, teenagers, adults'],
    ['Subjects', 'Scratch, Python, Java, web, apps, AI'],
    ['Format', 'Live video with a mentor'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Peru times', 'Chosen by the family'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'The short answer',
  capsule: 'There is no single best coding class in Peru; there is the class that fits one learner, and you can check fit in a single free lesson. Watch how long the learner types, whether the mentor asks them to explain, and what is left on screen at the end. Modern Age Coders teaches coding live online in English to children from 6, teenagers and adults in Peru, with a mentor based in India, in a group of fifteen to twenty or one to one, at hours you choose.',

  picks: {
    eyebrow: 'Where most learners start',
    h2: 'Three coding courses for three ages',
    lede: 'Age and goal decide the first course. Each of these assumes no earlier code.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'BECO / 01', title: 'Coding for Kids', note: 'For children of about 6 to 10. Blocks first, then games, simple apps and a first taste of AI, so a young learner builds something they can show at home within the first weeks.' },
      { course: 'python-complete-masterclass-teens', code: 'BECO / 02', title: 'Teen Python', note: 'Typed code for 13 to 18 year olds from lesson one: quizzes and games first, then data work, then a capstone project the teenager plans and defends.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'BECO / 03', title: 'Python for grown-ups', note: 'A slow, thorough start for anyone past school age who has never written code, ending in projects built around their own work or interests.' }
    ]
  },

  sections: [
    {
      id: 'meaning',
      eyebrow: 'Defining the word',
      h2: 'What does "best" mean when choosing coding classes?',
      lede: 'It cannot mean a ranking, because nobody measures every provider in Peru the same way, and any league table you find was written by someone selling a place in it. It can mean the class that does the most for one particular learner, and that is something you can observe.',
      body: [
        { kind: 'p', html: 'We use six tests. Each is something a parent, a teenager or an adult learner can check in a free class or in the first month, without technical knowledge. After each one we say what we do, and the evidence you can look for, because a claim without evidence is just another advert.' },
        { kind: 'ol', items: [
          '<strong>The learner types more than they watch.</strong> In a sixty-minute class, count the minutes your child or you spend with hands on the keyboard. Our evidence: in every class the learner writes and runs their own code, and the mentor watches their screen, not the other way round.',
          '<strong>The mentor knows who is struggling.</strong> In a group, the mentor should call learners by name and check their screens. Our groups hold fifteen to twenty learners of similar age, or the class is one to one, and a group keeps its mentor from the first week to the last.',
          '<strong>There is a project at the end, not only exercises.</strong> Ask what the learner will have built after three months. Ours finish small games, tools or apps they designed themselves and can explain.',
          '<strong>The class makes the learner think before the computer does.</strong> Ask the mentor how they handle AI chatbots. Ours ask learners to predict what a program will do before running it, and to explain every line they hand in.',
          '<strong>The certificate is described honestly.</strong> A good provider tells you exactly who issues it. Ours is a Modern Age Coders certificate of completion, after a final exam; it is not a Peruvian qualification, and no ministry or university issues or endorses it.',
          '<strong>You can try before paying.</strong> Our first class is free and needs no card. If a provider will not let you watch a real lesson, that tells you something.'
        ] },
        { kind: 'p', mt: true, html: 'Families who prefer to read this in Spanish can see our Spanish guide, <a class="ag-inline-link" href="/mejores-clases-de-programacion-para-ninos-peru">mejores clases de programación para niños</a>, which weighs eight criteria for primary-age children in a different way. The lessons described on both pages are the same: live, online and in English.' }
      ]
    },
    {
      id: 'trial',
      tint: 'tint',
      eyebrow: 'One free class',
      h2: 'What should I watch for in a free trial coding class?',
      lede: 'A trial lesson is the only honest sample a provider can give you. Sit nearby for the first one, notebook in hand, and write down what actually happens rather than how it feels.',
      body: [
        { kind: 'two',
          leftH3: 'Signs the class is working',
          left: [
            'The learner is typing within the first ten minutes. For a six-year-old that may mean dragging blocks; for a teenager it means real Python.',
            'The mentor asks "what do you think will happen?" before pressing run, and waits for an answer.',
            'When the learner makes a mistake, the mentor asks them to find it instead of fixing it for them.',
            'At the end there is something on the learner\'s own screen that was not there at the start, and they can tell you what it does.'
          ],
          rightH3: 'Signs to be wary of',
          right: [
            'Most of the hour is a slideshow or a video while the learner listens.',
            'The mentor never looks at the learner\'s screen, or the group is so large that names are not used.',
            'Code is pasted in from somewhere and run without anyone reading it.',
            'The first conversation is about a long contract or a discount that ends today, before you have seen any teaching.'
          ] },
        { kind: 'p', mt: true, html: 'For children under ten, add one more test: did they want to show you what they made? Pride in a small finished thing is the strongest predictor we know of a child who keeps going. For adults, the equivalent is simpler: did you leave the class understanding one idea you did not understand before?' },
        { kind: 'p', html: 'Families in the capital asking about English-medium schooling may find our page on <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a> useful, since it covers learners from bilingual, Cambridge and IB schools in more detail.' }
      ]
    },
    {
      id: 'free',
      eyebrow: 'Already in Peru',
      h2: 'Is coding taught in Peruvian schools, and what is free?',
      lede: 'Not as a school subject. The national curriculum has no computing or programming area, but there are free public routes, mostly for secundaria pupils, and a family should know them before paying anyone.',
      body: [
        { kind: 'table', numCols: [], caption: 'Public and free routes into coding for learners in Peru, from each organiser\'s own pages', head: ['Route', 'Who runs it', 'Who it reaches', 'What it involves'], rows: [
          ['CNEB competency 28 (digital skills)', 'MINEDU', 'Every pupil, in every subject', 'Working in virtual environments; transversal, not a subject of its own, and no programming language named'],
          ['Fábrica de Programadores (pilot, July 2025)', 'MINEDU', '1,000 public-school pupils, 4th and 5th year of secundaria, Lima Norte', 'Python training, with the option of the PCEP exam at the end'],
          ['Peruvian Informatics Olympiad, OPI', 'UTEC', 'Any secundaria pupil in Peru, free', 'Algorithm problems; the 2025 rules allowed C++ or Python online in round one and only C++ at the final'],
          ['Peruvian AI Olympiad, OPEIA', 'UTEC', 'Any secundaria pupil in Peru, free', 'A single competition day, held on 19 March 2026'],
          ['MINEDU Hackathon (4th edition, 2025)', 'MINEDU', 'Teams of pupils, teachers and specialists', 'Projects in AI and robotics, with prizes']
        ] },
        { kind: 'source', html: 'Sources: MINEDU, Currículo Nacional de la Educación Básica (competency 28 and the plans of study); MINEDU press notes on Fábrica de Programadores (24 July 2025) and the Hackathon 2025; UTEC, Olimpiadas Peruanas de Computación home page and Reglamento OPI 2025. All read on 8 and 9 November 2026. We have no connection with MINEDU, UTEC or any of these programmes.' },
        { kind: 'two', mt: true,
          leftH3: 'What this means for most families',
          left: [
            'If your child is in 4th or 5th of secundaria in a public school in Lima Norte, the Fábrica pilot may already be open to them, and it is worth asking the school. MINEDU calls it a pilot it hopes to repeat nationally, so most pupils in Peru are not yet in it.',
            'The olympiads are free and open to every secundaria pupil, but they test problem solving under time pressure; they do not teach programming from zero. Peru first sent a team to the International Olympiad in Informatics in 2022, and by November 2026 its contestants had won one bronze medal there.'
          ],
          rightH3: 'Where paid classes fit',
          right: [
            'Primary-age children, adults and most teenagers have no free structured route at all. That is the gap private classes fill.',
            'A good paid class should prepare a teenager for the free routes rather than compete with them: our older learners often enter the OPI after a year of Python, and we are glad when they do. Under the olympiad\'s own rules a contestant may not solve problems with generative AI, which is the standard we teach to anyway.'
          ] }
      ]
    },
    {
      id: 'shortlist',
      tint: 'tint',
      eyebrow: 'A real lesson',
      h2: 'How can I compare several coding classes without a ranking?',
      lede: 'Cross off any offer that another beats on every measure you care about, and keep the rest. What survives is a shortlist, and the final choice between those is yours. Economists call this Pareto dominance; here it is in Python, as we teach it to teenagers and adults.',
      body: [
        { kind: 'two',
          leftH3: 'The idea',
          left: [
            'Imagine you have written down three numbers for each of five offers after their trial classes: minutes your child typed, learners per mentor, and projects promised in the first three months. The offers and numbers below are invented for the lesson; none describes a real provider.',
            'Offer B is worse than Offer A on all three measures, so nobody who cares about those three things should choose B. That is all "beaten" means.'
          ],
          rightH3: 'Why it matters',
          right: [
            'Notice what the program does not do: it never adds the numbers together or picks one winner. A weighted score would force you to decide how many minutes of typing are worth one project, and families honestly disagree about that.',
            'The program only removes offers that no reasonable family would pick. Offers A, C and E survive for different reasons: A has the most balanced numbers, C is one to one, and E promises the most projects but has learners watching most of the time.'
          ] },
        { kind: 'code', label: 'shortlist.py: cross off offers that are beaten on every measure', lang: 'Python', code: CODE, note: 'It prints <code>Offer A beaten by nobody</code>, <code>Offer B beaten by [\'Offer A\', \'Offer C\', \'Offer D\']</code>, <code>Offer C beaten by nobody</code>, <code>Offer D beaten by [\'Offer A\', \'Offer C\']</code>, <code>Offer E beaten by nobody</code>, and finally <code>Shortlist: [\'Offer A\', \'Offer C\', \'Offer E\']</code>.' },
        { kind: 'p', mt: true, html: 'Two Python ideas carry the whole program. <code>all()</code> asks whether something is true for every measure, and <code>any()</code> asks whether it is true for at least one. "No worse on every measure, better on at least one" is exactly <code>all</code> followed by <code>any</code>, and learners who see that sentence become code tend to remember both functions for good.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Predict first.</strong> Before running it, decide which offers you think survive. Most people expect only one.',
          '<strong>Add a measure.</strong> Put a fourth number, such as "the same mentor every week" as 1 or 0, into every offer and update <code>HIGHER</code>. Does the shortlist grow or shrink? Explain why adding measures can only keep more offers alive.',
          '<strong>Find the tie.</strong> Give Offer D exactly the same numbers as Offer A. Does either beat the other? Read the <code>better</code> line again to see why not.',
          '<strong>Say it in English.</strong> Write two sentences for a parent explaining why Offer E survives even though its typing time is the lowest.'
        ] }
      ]
    },
    {
      id: 'device',
      eyebrow: 'At home',
      h2: 'Does my child need a computer for online coding classes in Peru?',
      lede: 'For anything beyond the first weeks of block coding, yes. Video works on a phone; writing and running real programs on a small touch screen is slow and discouraging, and it hides the keyboard skills the learner needs.',
      body: [
        { kind: 'p', html: 'This is a real constraint in Peru. INEI\'s household survey for the second quarter of 2026 found that 36.4% of homes in the country had at least one computer: 53.3% in Metropolitan Lima, 41.3% in other urban areas and 8.9% in rural areas. The same survey found that internet use was lowest among children aged 6 to 11, at 68.2%. A family weighing classes should count the device as part of the decision, not an afterthought.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'A shared computer', p: 'Common and workable. Mention it when you book, and we can suggest class hours that do not clash with a sibling\'s homework or a parent\'s work.' },
          { h3: 'A tablet', p: 'Fine for Scratch-style blocks with young children. From Python onwards a keyboard matters; a cheap external one helps a lot.' },
          { h3: 'A phone only', p: 'Enough for the free first class, so you can judge the teaching. Not enough for a full course, and we will say so honestly.' }
        ] }
      ]
    },
    {
      id: 'english',
      tint: 'tint',
      eyebrow: 'The teaching language',
      h2: 'Is it a disadvantage that the coding classes are in English?',
      lede: 'For some learners at first, and we would rather say so. For most it turns into an advantage within weeks, because programming is already written in English words, and every manual, error message and forum the learner will use later is in English too.',
      body: [
        { kind: 'two',
          leftH3: 'What the numbers say',
          left: [
            'EF\'s English Proficiency Index 2025 gives Peru 519 points, in its moderate band, and Lima 555, the only Peruvian city in the high band. Speaking is Peru\'s weakest skill at 480, behind reading at 540.',
            'That pattern matches what we see: learners from Peru often read code instructions comfortably long before they feel confident speaking. Our classes lean on the screen for exactly that reason.'
          ],
          rightH3: 'What our mentors do',
          right: [
            'They speak slowly and plainly, type key words into the chat, and repeat instructions with the code visible. A learner can answer by pointing at a line or typing a short reply.',
            'Nobody is marked down for their English. The aim is the code; the English improves along the way. Children at bilingual schools usually notice no difficulty at all.'
          ] },
        { kind: 'p', mt: true, html: 'Primary-age children whose parents want a Spanish explanation first can read our page on <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a>. Teenagers and adults set on Python can go straight to our <a class="ag-inline-link" href="/python-course-peru">Python course for Peru</a>.' }
      ]
    },
    {
      id: 'ai',
      eyebrow: 'Thinking, not copying',
      h2: 'Should coding classes let learners use ChatGPT or other AI?',
      lede: 'Not as a way to skip the thinking, and never in breach of a tool\'s own age rules. A class that lets a child paste chatbot answers will produce finished-looking projects and a learner who cannot write a loop alone.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Age rules first', p: 'Under Claude\'s terms a user must be 18 or older; ChatGPT\'s terms say a minor needs a parent\'s or legal guardian\'s permission. Our classes for under-18s never ask a learner to open an adult AI account.' },
          { h3: 'Predict, then run', p: 'Every learner says what a program will do before it runs. When the guess is wrong, that moment is the lesson, and no chatbot can have it for them.' },
          { h3: 'Adults use AI as a critic', p: 'Learners of 18 and over may ask an AI tool to question their code or explain an error, then must explain the fix in their own words.' }
        ] },
        { kind: 'p', mt: true, html: 'This is the promise we make in every country we teach in: the same quality of teaching in Arequipa as in Lima or anywhere else, and learners who can solve problems without help when it counts. Families in the south will find more on <a class="ag-inline-link" href="/coding-classes-in-arequipa-peru">coding classes in Arequipa</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress you can check',
    h2: 'How do I know the coding classes are working after three months?',
    lede: 'These milestones are ours. They are what we expect most regular learners to reach, and what a family can ask to see.',
    table: { numCols: [], caption: 'What a learner should be able to show, by month (our milestones)', head: ['After', 'A child of 6 to 12', 'A teenager or adult'], rows: [
      ['Month 1', 'A short animation or game they built, explained aloud', 'Small programs with decisions and loops, typed alone'],
      ['Month 3', 'A game with a score, lives or levels', 'A tool with functions and a list, tested on their own data'],
      ['Month 6', 'A project chosen and planned by the child', 'A project split into parts, with errors handled'],
      ['Month 12', 'A move from blocks to typed code', 'A finished project explained in English to the mentor']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask your child to show you, not tell you. A two-minute demonstration at the dinner table is worth more than any report card.',
      'If month three passes with nothing to show, tell us. The usual fix is a change of pace or a move to one to one.'
    ] },
    right: { h3: 'For adult learners', ps: [
      'Keep every program in one folder. Reopening last month\'s work and finding it easy is the clearest sign of progress.',
      'If you cannot explain a line you wrote, that is the next thing to ask your mentor.'
    ] }
  },

  catalogue: {
    eyebrow: 'Nine more courses',
    h2: 'More coding courses by age, all taught live in English',
    lede: 'Pick by age first, then by what the learner wants to make. Group or private, each keeps one mentor.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'BECO / KIDS / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Games and animations built from blocks, with real logic underneath.' },
        { code: 'BECO / KIDS / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'First typed code through turtle art, games and small AI builds.' },
        { code: 'BECO / KIDS / 03', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Children script their own Roblox worlds in Luau.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'BECO / TEEN / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Typed, object-oriented code, a strong base for university.' },
        { code: 'BECO / TEEN / 02', slug: 'complete-app-development-masterclass-for-teens', title: 'App development', blurb: 'Teenagers build and publish real mobile apps.' },
        { code: 'BECO / TEEN / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and algorithms', blurb: 'The reasoning behind olympiad problems, practised step by step.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Ages 18 and over', courses: [
        { code: 'BECO / ADULT / 01', slug: 'full-stack-web-development-masterclass-college', title: 'Full stack web development', blurb: 'Front end, back end and deployment, built project by project.' },
        { code: 'BECO / ADULT / 02', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'Interview-level problem solving, explained slowly.' },
        { code: 'BECO / ADULT / 03', slug: 'ai-ml-masterclass-complete-college', title: 'AI and machine learning', blurb: 'Training a model, then proving it works on data it never saw.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'What a live coding class from Peru looks like',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Mornings in Peru', l: 'Evening for the mentor in India, and a calm start for home-schooled or adult learners.' },
      { time: 'After school', l: 'Late afternoon in Lima is early morning in India; mentors teach at that hour too.' },
      { time: 'One to one', l: 'A single learner with a mentor, at an hour fixed together and moved when needed.' }
    ],
    cells: [
      { h3: 'Hands on the keyboard', p: 'Learners write and run code in every lesson.' },
      { h3: 'One mentor throughout', p: 'The teacher who starts a course finishes it.' },
      { h3: 'Plain English', p: 'Short sentences, key words in the chat, time to answer.' },
      { h3: 'Grouped by age', p: 'Children with children, teens with teens, adults together.' },
      { h3: 'Small tasks between classes', p: 'Reviewed at the start of the next lesson.' },
      { h3: 'Your choice of size', p: 'A class of peers, or a mentor all to yourself.' }
    ]
  },

  projectsH2: 'Projects our learners have built',
  projectsLede: 'A few pieces of work from students who stayed with coding for a year or more. The <a class="ag-inline-link" href="/student-labs">student labs</a> hold many others.',
  reviewsLede: 'Parents and learners in their own words, copied from Google exactly as written.',

  fees: {
    h2: 'Coding class fees for families in Peru',
    lede: 'We charge in US dollars, by card, once a month. The conversion into soles is done by your bank at its rate on the day, which is why two monthly statements rarely match to the cent.',
    free: ['A free first class', 'A real lesson, not a sales call', 'No card details asked'],
    group: ['A group of fifteen to twenty learners', 'The same mentor every week', 'Two live classes a week', 'Monthly payments, cancel any month'],
    one: ['One learner and one mentor', 'A plan built around the learner', 'Class hours you choose']
  },

  faq: {
    eyebrow: 'Questions from Peru',
    h2: 'Choosing coding classes in Peru: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No, never. We teach every lesson live and online in English. Our mentors, based in India, pace their speech to the learner, get used to a Peruvian accent quickly, and leave the code on screen so nobody depends on listening alone.' },
      { q: 'Which are the best coding classes in Peru?', a: 'We will not rank providers, and you should distrust anyone who ranks themselves first. The useful question is which class fits your learner. Watch one free class and count the minutes spent typing, check that the mentor knows names, and ask what will be built in three months.' },
      { q: 'At what age can my child start coding?', a: 'From about 6, with blocks and simple games. Children usually move to typed code such as Python between 9 and 12, and teenagers can start directly with Python or Java. Adults can start at any age.' },
      { q: 'Do Peruvian schools teach coding?', a: 'Rarely, and never as a timetabled area: Peru\'s CNEB plans of study list none for computing. Digital work is spread across subjects as a shared competency. The exceptions are MINEDU\'s Python pilot for 1,000 pupils in Lima Norte and UTEC\'s free olympiads.' },
      { q: 'What time would classes be in Lima?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Neither country changes its clocks, so the gap never moves: a 09:00 class in Lima starts at 19:30 for the mentor in India.' },
      { q: 'How big are the groups?', a: 'Fifteen to twenty learners of a similar age, or one to one. The same mentor teaches the group for the whole course and knows each learner by name.' },
      { q: 'Is there a certificate?', a: 'Learners who pass the final exam of a course receive a certificate of completion from Modern Age Coders. That is all it is: Peruvian schools, MINEDU and universities play no part in it.' },
      { q: 'Can learners use ChatGPT in class?', a: 'Not to write their work. Teenagers and children never sign up for adult AI accounts with us, because vendors set age floors: 18 for Claude, and parental permission below 18 for ChatGPT. Adults may ask a chatbot about an error, then explain the fix themselves.' },
      { q: 'Does my child need a computer?', a: 'For a full course, yes, a laptop or desktop. A tablet works for young children using blocks, and a phone is enough to watch the free first class. A computer shared with siblings is fine; we fit hours around it.' },
      { q: 'How do I pay from Peru?', a: 'A card payment each month, in US dollars; the bank handles conversion to soles. Nothing is charged for the trial lesson, and we do not ask for card details to book it.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'Related pages',
    lede: 'More reading for families comparing coding classes.',
    items: [
      { href: '/mejores-clases-de-programacion-para-ninos-peru', label: 'Mejores clases de programación para niños', p: 'Our Spanish guide for parents of primary-age children.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Our index for Peru, grouped by age, subject and city.' },
      { href: '/english-medium-coding-classes-lima', label: 'English-medium coding classes, Lima', p: 'For learners at bilingual and international schools.' },
      { href: '/python-course-peru', label: 'Python course for Peru', p: 'Teenagers and adults learning Python live.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live class described from start to finish.' },
      { href: '/we-teach-you-how-to-think', label: 'We teach you how to think', p: 'Our case against copying answers.' }
    ]
  },

  start: {
    h2: 'Book a free coding class from Peru',
    lede: 'Use the free class as your test. The learner writes a little code with a mentor, you watch, and afterwards we talk through which course, which format and which hour would suit. If it is not right, you owe nothing.',
    readFirst: 'Before booking you can read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or browse the <a class="ag-inline-link" href="/courses">full course list</a> with every syllabus.',
    note: 'All lessons are live video classes, taught from India and entirely in English. WhatsApp messages to us are answered in English.',
    formNote: 'Free, with no card and no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Choosing well', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/we-teach-you-how-to-think', label: 'Thinking, not copying' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Classes in Peru' },
        { href: '/mejores-clases-de-programacion-para-ninos-peru', label: 'Mejores clases para niños' },
        { href: '/english-medium-coding-classes-lima', label: 'Coding in English, Lima' },
        { href: '/coding-classes-in-arequipa-peru', label: 'Coding in Arequipa' }
      ] }
    ],
    bottomRight: 'Count the minutes they type'
  },

  personalityCss: `
.ag-root.ag-beco .ag-hero h1 { max-width: 19ch; letter-spacing: -0.02em; }
.ag-root.ag-beco .ag-capsule { border-left-width: 6px; }
.ag-root.ag-beco .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-beco .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-beco .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU CNEB (competency 28, plans of study); MINEDU press notes on Fábrica de Programadores (24 July 2025) and Hackathon 2025; UTEC Olimpiadas Peruanas de Computación home and Reglamento OPI 2025; IOI statistics for Peru; INEI Boletín TIC II trimestre 2026; EF EPI 2025 Peru page; vendor terms via content/ai-tool-age-audit.json; IANA tz database. Read 8 and 9 November 2026.',
    localProject: 'An original Python lesson for families in Peru comparing coding classes: five invented offers measured on minutes typing, learners per mentor and projects in three months; an offer is beaten when another is no worse on every measure and better on one (all() then any()); the program prints who beats whom and the shortlist [Offer A, Offer C, Offer E]. Lesson family: Pareto dominance.',
    requiredMentions: ['Shortlist: [\'Offer A\', \'Offer C\', \'Offer E\']', 'Offer B beaten by [\'Offer A\', \'Offer C\', \'Offer D\']', 'Count the minutes they type', 'judged on what you can see', '53.3% in Metropolitan Lima', 'held on 19 March 2026', 'won one bronze medal there', 'Economists call this Pareto dominance'],
    sources: [
      { claim: 'No computing area in the CNEB plans of study; competency 28 is transversal.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Fábrica de Programadores: 1,000 pupils, 4th and 5th secundaria, Lima Norte, Python, PCEP, pilot.', url: 'https://www.gob.pe/institucion/minedu/noticias/1214050-minedu-impulsa-iniciativa-fabrica-de-programadores-para-formar-a-escolares-con-certificacion-internacional-en-programacion' },
      { claim: 'OPI and OPEIA free for secundaria; OPEIA on 19 March 2026.', url: 'https://opi.utec.edu.pe/' },
      { claim: 'OPI 2025 languages by phase; generative AI banned.', url: 'https://opi.utec.edu.pe/Reglamento_OPI_2025.pdf' },
      { claim: 'MINEDU Hackathon 2025, AI and robotics projects.', url: 'https://www.gob.pe/institucion/minedu/noticias/1220955-minedu-premia-el-talento-estudiantil-y-docente-por-innovar-con-inteligencia-artificial-y-robotica-en-hackathon-2025' },
      { claim: 'Peru at the IOI since 2022, one bronze medal.', url: 'https://stats.ioinformatics.org/countries/PER' },
      { claim: 'Households with a computer by area; internet use by children 6 to 11, II trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025: Peru 519, Lima 555, speaking 480, reading 540.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' }
    ],
    rejectedClaims: [
      'Any ranking of coding schools in Peru, or a claim that we are the best: none exists from a primary source; the page refuses to rank.',
      'Any competitor named, ranked or priced: none.',
      'Numbers of coding students in Peru or of our students in Peru: no source; none given.',
      'Connection with MINEDU, UTEC, the OPI, OPEIA or Fábrica de Programadores: none, and the page says so.',
      'Spanish-language teaching or a Peruvian qualification: neither offered.'
    ]
  }
};
