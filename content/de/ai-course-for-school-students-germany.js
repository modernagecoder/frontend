'use strict';
// AI course for school students in Germany (ag- English door, Germany cluster P2 row DE031), written 2026-11-03.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD. Audience: pupils aged 13 to 19 at German schools (Klasse 7 to the Abitur year).
// Spine: the maths a pupil already has. Training a model is Analysis (derivatives, gradient descent), judging it is
// Stochastik; the step size (learning rate) decides whether learning crawls, works or explodes. Different spine and
// project from the live ai-and-machine-learning-classes-in-germany page (Bochum weather, baselines).
// Sources (read raw; copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/ai-course-for-school-students-germany/):
//  - GI Informatik-Monitor 2026/27, national page (infmon/217eedf8.html): map modals "Stand 2024/25: Die Belegungsquote
//    beträgt 7 %." (bw), 11 (by), 12 (be), 15 (bb), 17 (hb), 22 (hh), 10 (he), 40 (mv), 9 (ni), 14 (nw), 26 (rp), 15 (sl),
//    43 (sn), 14 (st), 12 (sh), 33 (th); text "Bundesweit beträgt die durchschnittliche Belegungsquote ... rund 15 Prozent".
//    The same page's text puts Bremen among the Länder where "ungefähr jede zwölfte Person" takes Informatik, which
//    contradicts its own map figure of 17 %, so Bremen is left out of our table (see rejectedClaims).
//  - IQB, Beschreibung der Struktur der Aufgaben (Mathematik): "Im Prüfungsteil A ist eine Verwendung von Hilfsmitteln
//    nicht vorgesehen, im Prüfungsteil B dürfen Hilfsmittel verwendet werden"; "Beide Prüfungsteile enthalten Aufgaben zu
//    jedem der Sachgebiete Analysis, Analytische Geometrie/Lineare Algebra und Stochastik." IQB Abitur page: pools "Seit dem
//    Prüfungsjahr 2017" for Deutsch and Mathematik.
//  - KMK, Bildung in der digitalen Welt: 2026 framework update "um KI-bezogene Kompetenzen ergänzt".
//  - BWKI (bw-ki.de, Teilnahmebedingungen): Tübingen AI Center; "Sekundarstufe I und II"; documentation, "einen
//    lauffähigen Code und einen Video-Pitch"; "Projekte dürfen sowohl auf deutscher wie auch auf englischer Sprache
//    abgegeben werden"; 2026 timeline 01.03.2026, 20.09.2026, final 13.11.2026; "01.08.2026 Startschuss für die neue Runde"
//    (KI-Schule des Jahres).
//  - Jugend forscht: "Jugendliche zwischen 15 und 21 Jahren starten in der Sparte Jugend forscht. Jüngere ... bis 14 Jahre
//    treten bei Jugend forscht junior an"; "Online-Anmeldung bis 30. November"; Fachgebiet Mathematik/Informatik;
//    "Bundeswettbewerb 2027" listed on the site.
//  - Dr. Hans Riegel-Fachpreise: final papers "kurz vor dem Abitur bzw. der Matura"; "Schwerpunkt in Biologie, Geographie,
//    Mathematik, Chemie, Informatik oder Physik"; "dezentrale Wettbewerbe"; "etwa 300 Preisträgerinnen und Preisträger".
//  - Anthropic consumer terms (fetched raw 3 Nov 2026): "You must be at least 18 years old or the minimum age required to
//    consent to use the Services in your location, whichever is higher." openai.com returned HTTP 403: not retried; the
//    ChatGPT age rule is referred to our AI tools age guide only.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
// Our own calculations (scratchpad de/w/G7/aic/v1.py, v2.py, python3 -I), data ours (Celsius to Fahrenheit):
//  v1 prints "rate 0.0001  w = 2.399  b = 14.837  loss = 183", "rate 0.001  w = 1.802  b = 31.935  loss = 0.00259",
//  "rate 0.003  w = 1.8  b = 32.0  loss = 4.18e-14"; v2 prints "rate 0.003  loss after steps 1 to 6: 2672, 2195, 1827,
//  1543, 1324, 1154" and "rate 0.005  loss after steps 1 to 6: 12669, 55174, 247728, 1119912, 5070438, 22964118".
//  Starting loss 3290.7; steps to loss under 0.01: 44,584 (0.0001), 4,456 (0.001), 1,484 (0.003); largest stable rate
//  2 / 625.65 = about 0.0032 (largest eigenvalue of the loss's second-derivative matrix).
// Lesson family: the step size decides everything; too small crawls, too large explodes.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  '# Celsius readings and the Fahrenheit values that go with them (our own example data)',
  'celsius = [-10, -3, 0, 4, 9, 15, 21, 28, 34]',
  'fahrenheit = [c * 9 / 5 + 32 for c in celsius]',
  'n = len(celsius)',
  '',
  'def loss(w, b):',
  '    return sum((w * c + b - f) ** 2 for c, f in zip(celsius, fahrenheit)) / n',
  '',
  'def step(w, b, rate):',
  '    # the two partial derivatives of the loss, straight from Oberstufe Analysis',
  '    dw = sum(2 * (w * c + b - f) * c for c, f in zip(celsius, fahrenheit)) / n',
  '    db = sum(2 * (w * c + b - f) for c, f in zip(celsius, fahrenheit)) / n',
  '    return w - rate * dw, b - rate * db',
  '',
  'for rate in [0.0001, 0.001, 0.003]:',
  '    w, b = 0.0, 0.0',
  '    for _ in range(5000):',
  '        w, b = step(w, b, rate)',
  '    print("rate", rate, " w =", round(w, 3), " b =", round(b, 3), " loss =", f"{loss(w, b):.3g}")'
].join('\n');

const V2 = [
  'for rate in [0.003, 0.005]:',
  '    w, b = 0.0, 0.0',
  '    history = []',
  '    for _ in range(6):',
  '        w, b = step(w, b, rate)',
  '        history.append(f"{loss(w, b):.0f}")',
  '    print("rate", rate, " loss after steps 1 to 6:", ", ".join(history))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'door', label: 'AI course for school students' },
  slug: 'ai-course-for-school-students-germany',
  code: 'aic',
  accent: '#804728',
  accentRationale: 'AI for school pupils in Germany: a chalkboard-frame brown #804728, apart from the plum of the adult AI page, the hub fir green and the Abitur navy; contrast on the paper #FBF8F2 about 6:1 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'AI course for school students in Germany',
  title: 'AI Course for School Students in Germany, Taught in English',
  description: 'A live online AI course in English for pupils in Germany aged 13 to 19: Python, the Abitur maths that trains models, and projects for the BWKI and Jugend forscht.',
  ogDescription: 'For pupils at German schools from Klasse 7 to the Abitur year: an AI course taught live in English that turns Analysis and Stochastik into models a teenager trains and checks.',
  twitterDescription: 'An AI course for school students in Germany, live in English, built on the maths pupils already learn.',
  pageName: 'AI Course for School Students in Germany',
  webPageDescription: 'A guide for pupils aged 13 to 19 at schools in Germany who want to learn artificial intelligence properly: how many take Informatik in each Land, how Abitur maths connects to machine learning, competitions that accept AI projects, tool age rules, and an original gradient descent example.',
  courseDescription: 'A live online AI course in English for school students in Germany aged 13 to 19: Python, data, gradient descent and model testing built on school maths, in a group of fifteen to twenty or one to one, with one regular mentor.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'AI course for pupils',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#informatik', label: 'Informatik' },
    { href: '#maths', label: 'Maths' },
    { href: '#example', label: 'Example' },
    { href: '#contests', label: 'Contests' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Germany &middot; AI for pupils &middot; Ages 13 to 19',
  h1: 'AI course for school students in Germany',
  lede: 'A pupil in Germany can finish school having used AI tools every week and never once having trained a model. That is not a lack of talent. Whether Informatik is even on the timetable depends on the Land, and the maths that explains how a model learns sits in a different classroom, under a different name. This page joins the two up, and shows a model learning a rule with nothing but school maths and a few lines of Python.',
  secondaryCta: { href: '#example', label: 'See the worked example' },
  wa: 'Hello Modern Age Coders, my child goes to school in Germany and would like a free first class in your AI course, taught in English.',
  heroNote: 'Teaching live since 2020 &middot; 10,000+ students worldwide &middot; models trained by the pupil, never pasted in',
  spec: [
    ['Who', 'Pupils aged 13 to 19'],
    ['School stage', 'Klasse 7 to the Abitur year'],
    ['Built on', 'Analysis and Stochastik'],
    ['Language', 'English, matched to the pupil'],
    ['Format', 'Group or one to one, live'],
    ['First class', 'Free']
  ],
  capsuleQ: 'The short answer',
  capsule: 'The AI course for school students in Germany at Modern Age Coders is a live online course in English for pupils aged 13 to 19. Pupils learn Python, then train and test real models using the derivatives and probability they meet in school maths. A regular mentor matches each pupil\'s pace and accent, in a group of fifteen to twenty or one to one, and prepares projects fit for the BWKI or Jugend forscht.',

  picks: {
    eyebrow: 'Three ways in',
    h2: 'Which AI course suits a pupil in Germany?',
    lede: 'Most pupils start with the first. A younger pupil with no Python yet may begin with the second, and a pupil aiming at a competition adds the third.',
    items: [
      { course: 'ai-ml-masterclass-teens', code: 'AIC / 01', title: 'AI and Machine Learning for Teens', note: 'The main course for 13 to 18. From the first loop in Python to models a pupil trains, measures and can explain to a jury.' },
      { course: 'python-complete-masterclass-teens', code: 'AIC / 02', title: 'Python for Teens', note: 'For a pupil who has never programmed. Every AI idea on this page needs Python first, and this course builds it properly.' },
      { course: 'german-informatics-competitions-course-biber-bwinf-bwki', code: 'AIC / 03', title: 'German Informatics Competitions', note: 'The Informatik-Biber, the Bundeswettbewerb Informatik and the BWKI, with practice problems we write ourselves.' }
    ]
  },

  sections: [
    {
      id: 'informatik',
      eyebrow: 'What school gives',
      h2: 'Do pupils in Germany learn AI at school?',
      lede: 'Pupils meet AI as a topic in many subjects, but building a model is computer science, and how many pupils take computer science in the upper school differs enormously between Länder.',
      body: [
        { kind: 'two',
          leftH3: 'Using AI is now in the framework',
          left: [
            'In 2026 the KMK, the conference of the Länder education ministers, adopted an update of its competence framework Bildung in der digitalen Welt that adds competences related to artificial intelligence. That covers how pupils use, question and judge AI across their subjects.',
            'It does not mean that a pupil writes code. A history lesson that asks whether a chatbot answer is reliable is part of that framework, and so is a German lesson on AI-written text.'
          ],
          rightH3: 'Building AI depends on Informatik',
          right: [
            'The Gesellschaft für Informatik counts, in its Informatik-Monitor 2026/27, how many pupils take Informatik in the Qualifikationsphase of the Gymnasium upper school. Across Germany the average is about 15 percent.',
            'Behind that average the Länder sit far apart. In the 2024/25 figures, Sachsen and Mecklenburg-Vorpommern are above 40 percent, while Baden-Württemberg is at 7 percent and Niedersachsen at 9.'
          ] },
        { kind: 'table', mt: true, numCols: [1], caption: 'Share of upper-school pupils taking Informatik in the Qualifikationsphase, school year 2024/25', head: ['Land', 'Share taking Informatik'], rows: [
          ['Sachsen', '43 %'],
          ['Mecklenburg-Vorpommern', '40 %'],
          ['Thüringen', '33 %'],
          ['Rheinland-Pfalz', '26 %'],
          ['Hamburg', '22 %'],
          ['Brandenburg', '15 %'],
          ['Saarland', '15 %'],
          ['Nordrhein-Westfalen', '14 %'],
          ['Sachsen-Anhalt', '14 %'],
          ['Berlin', '12 %'],
          ['Schleswig-Holstein', '12 %'],
          ['Bayern', '11 %'],
          ['Hessen', '10 %'],
          ['Niedersachsen', '9 %'],
          ['Baden-Württemberg', '7 %']
        ] },
        { kind: 'source', html: 'Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, map of the gymnasiale Oberstufe, each Land marked "Stand 2024/25". Read on 3 November 2026. Bremen is left out because the same page gives two figures for it that do not agree.' },
        { kind: 'p', mt: true, html: 'Read the table the other way round and it says that in most Länder, eight or nine pupils in every ten leave the Gymnasium without a single Informatik course in their final two years. Many of them are strong in maths. They simply never had the place where maths turns into a program that learns. Our AI course is meant for exactly those pupils, and also for the ones who do take Informatik and want to go further than the school course has time for. It runs alongside school; the school course is the one that counts for grades and the Abitur.' }
      ]
    },
    {
      id: 'maths',
      tint: 'tint',
      eyebrow: 'The maths already in the timetable',
      h2: 'Which school maths do you need to understand AI?',
      lede: 'Far less new maths than people fear. The three areas of the German Abitur maths exam are the same three areas that machine learning is built from.',
      body: [
        { kind: 'p', html: 'The IQB, the Länder institute that coordinates the shared Abitur task pools, describes the structure of the maths exam in its own paper on the pool tasks: a Part A without aids and a Part B where aids are allowed, and both parts contain tasks on each of Analysis, Analytische Geometrie/Lineare Algebra and Stochastik. Shared pools for maths have existed since the 2017 exam year. A pupil in the Oberstufe therefore spends two years on precisely the topics our course leans on, usually without hearing what they are for outside school.' },
        { kind: 'table', mt: true, numCols: [], caption: 'The three Abitur maths areas and the AI idea each one explains (our mapping)', head: ['Abitur area', 'What the pupil does at school', 'What it does in machine learning'], rows: [
          ['Analysis', 'Derivatives, slopes, finding a minimum', 'Gradient descent: walk downhill on the error until it is as small as it gets'],
          ['Analytische Geometrie / Lineare Algebra', 'Vectors, lines, planes, dot products', 'Every input becomes a vector; a simple model is a weighted sum, a dot product'],
          ['Stochastik', 'Probability, expected value, distributions', 'Judging a model: how often is it right, and how sure should we be?']
        ] },
        { kind: 'source', html: 'Source for the three areas: IQB, Beschreibung der Struktur der Aufgaben für die Abiturprüfung im Fach Mathematik, and the IQB Abitur page on the shared pools. The right-hand column is our own teaching map, not an IQB statement.' },
        { kind: 'two', mt: true,
          leftH3: 'For pupils in Klasse 7 to 10',
          left: [
            'A younger pupil has not met derivatives yet, and does not need to. We start with what they know: a line through points, an average, a percentage. The idea that a model guesses, measures how wrong it is and adjusts can be shown with a slope and a ruler long before the word derivative appears.',
            'When the derivative arrives in Klasse 10 or 11, it has an obvious use already waiting.'
          ],
          rightH3: 'For pupils in the Oberstufe',
          right: [
            'An Oberstufe pupil can follow every line of the example below on paper. The two partial derivatives in it are a small step beyond the school course, and we take that step slowly, in English, with the German words beside the English ones where it helps: Ableitung, Steigung, Tiefpunkt.',
            'Pupils often tell us that their maths lessons make more sense once they have watched a model use them.'
          ] }
      ]
    },
    {
      id: 'example',
      eyebrow: 'Worked example, ours',
      h2: 'How does a model learn a rule nobody told it?',
      lede: 'Give a program pairs of temperatures in Celsius and Fahrenheit and nothing else. It starts by guessing zero for everything, and by following the slope of its own error it finds the rule on its own. How fast it gets there depends on one number: the step size.',
      body: [
        { kind: 'two',
          leftH3: 'What the program does',
          left: [
            'The model is a straight line, prediction = w times Celsius + b. At the start w and b are both zero, so every prediction is zero and the average squared error, the loss, is 3,290.7.',
            'At each step the program works out the two partial derivatives of the loss, which say in which direction w and b should move to make the error smaller, and moves them a little that way. The size of that move is the learning rate.'
          ],
          rightH3: 'Why this is the heart of AI',
          right: [
            'Large language models and image recognisers have billions of numbers instead of two, but they are trained by the same idea: measure the error, take its derivative, step downhill, repeat.',
            'Every engineer who trains a model has to choose a step size, and a bad choice wastes days or ruins the run. A pupil can see both failures here in a second.'
          ] },
        { kind: 'code', label: 'Version 1: the same model, three step sizes, 5,000 steps each', lang: 'Python', code: V1, note: 'It prints <code>rate 0.0001  w = 2.399  b = 14.837  loss = 183</code>, then <code>rate 0.001  w = 1.802  b = 31.935  loss = 0.00259</code> and <code>rate 0.003  w = 1.8  b = 32.0  loss = 4.18e-14</code>.' },
        { kind: 'p', mt: true, html: 'The true rule is Fahrenheit = 1.8 times Celsius + 32, and nobody typed it in. With the smallest step the model is still far off after 5,000 steps: it has found a slope near 2.4 and an offset near 15, a line that is roughly right in the middle of the data and wrong at the ends. With a step ten times larger it is almost there. With 0.003 it has found 1.8 and 32 to the last digit shown. So is a bigger step always better? Version 2 answers that.' },
        { kind: 'code', label: 'Version 2: one step size that works, one that is slightly too big', lang: 'Python', code: V2, note: 'Run after Version 1. It prints <code>rate 0.003  loss after steps 1 to 6: 2672, 2195, 1827, 1543, 1324, 1154</code> and <code>rate 0.005  loss after steps 1 to 6: 12669, 55174, 247728, 1119912, 5070438, 22964118</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'How the step size changes the training (our calculation, starting loss 3,290.7)', head: ['Learning rate', 'Steps until the loss is under 0.01', 'What happens'], rows: [
          ['0.0001', '44,584', 'Learns, but very slowly'],
          ['0.001', '4,456', 'Learns steadily'],
          ['0.003', '1,484', 'Learns fastest of the three'],
          ['0.005', 'Never', 'Each step overshoots; the loss grows about four to five times per step']
        ] },
        { kind: 'source', html: 'The data, the code and every number in this section are our own, run with Python 3 on 3 November 2026. The temperatures are a teaching example, not measurements.' },
        { kind: 'p', mt: true, html: 'Between 0.003 and 0.005 lies a cliff. Our calculation puts the edge at about 0.0032: beyond that, every step jumps across the valley of the error and lands higher up the other side, and the next step jumps further. The edge is set by how steeply the loss curves, and the Celsius values up to 34 make it curve steeply in the w direction. That is why engineers rescale their inputs before training, and why a pupil who understands a second derivative understands a real training problem. We work through that argument with Oberstufe pupils on paper after they have watched it happen on screen.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Predict first.</strong> Before running Version 1, write down which of the three rates you expect to win. Then run it.',
          '<strong>Find the cliff.</strong> Try 0.0031, 0.0032 and 0.0033 in Version 2 and describe what changes in the six losses.',
          '<strong>Rescale.</strong> Divide every Celsius value by 10 before training, and adjust the final w. How large can the rate be now?',
          '<strong>Going further.</strong> Add a little random noise to the Fahrenheit values. The model can no longer reach zero loss. What does it reach instead, and why?'
        ] }
      ]
    },
    {
      id: 'contests',
      tint: 'tint',
      eyebrow: 'Competitions',
      h2: 'Which AI competitions can school students in Germany enter?',
      lede: 'Three established routes accept a pupil\'s own AI work. They differ in age, in what they want to see and in how you enter.',
      body: [
        { kind: 'table', numCols: [], caption: 'Routes for a school student\'s AI project in Germany, from the organisers\' own pages', head: ['Route', 'Who can enter', 'What is handed in', 'Dates and entry'], rows: [
          ['Bundeswettbewerb Künstliche Intelligenz (BWKI), Tübingen AI Center', 'Pupils in Sekundarstufe I and II, alone or in a team', 'Written documentation, runnable code and a video pitch; German or English', '2026 round: registration from 1 March 2026, projects due 20 September 2026, final 13 November 2026'],
          ['Jugend forscht, field Mathematik/Informatik', 'Ages 15 to 21; Jugend forscht junior up to 14, from Klasse 4', 'A written research report, then a stand at the contest', 'Online registration by 30 November; the site already lists the Bundeswettbewerb 2027'],
          ['Dr. Hans Riegel-Fachpreise', 'Pupils shortly before the Abitur or Matura', 'A final paper with its focus in subjects including Mathematik or Informatik', 'Run separately by each partner university for its region']
        ] },
        { kind: 'source', html: 'Sources: bw-ki.de (Teilnahmebedingungen and the 2026 timeline); jugend-forscht.de (age groups, the timeline at a glance, the Mathematik/Informatik field); hans-riegel-fachpreise.com (competition page and checklist). Read on 3 November 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'What each one rewards',
          left: [
            'The BWKI wants a machine-learning method at the centre and says so in its conditions. Jugend forscht is a research competition: the question and how carefully it is answered matter more than the size of the model. The Riegel prizes reward a written school paper, such as a Facharbeit or seminar paper, judged by a university; the organisers say about 300 prize winners are honoured each year.',
            'The BWKI also runs an award for schools, KI-Schule des Jahres, whose new round started on 1 August 2026.'
          ],
          rightH3: 'What we do and do not do',
          right: [
            'We are not connected with the Tübingen AI Center, Jugend forscht, the Dr. Hans Riegel-Stiftung or any school, and we never enter work on a pupil\'s behalf. The project and the entry are the pupil\'s own.',
            'What we teach is the craft underneath: a precise question, data the pupil is allowed to use, a model they can explain line by line, an honest test, and a write-up a jury can follow. A pupil who can explain the step-size table above to a stranger is well on the way.'
          ] }
      ]
    },
    {
      id: 'tools',
      eyebrow: 'Age rules',
      h2: 'Which AI tools may a pupil under 18 use?',
      lede: 'Each provider sets its own minimum age in its terms, and a course for school students has to follow them.',
      body: [
        { kind: 'p', html: 'Anthropic\'s consumer terms say, in their own words: "You must be at least 18 years old or the minimum age required to consent to use the Services in your location, whichever is higher." So Claude is for adults only, and we never use it with a pupil under 18, in class or as homework. Other tools have different rules; OpenAI, for example, allows teenagers with a parent\'s permission. We keep every provider\'s quoted rule, with the date it was read, in our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a>.' },
        { kind: 'p', mt: true, html: 'The age rules matter less in our course than parents expect, because the course does not run on chatbots. Pupils write the model themselves, in Python, on their own computer, as in the example above. No account with an AI company is needed for any of it. Where a pupil wants to try a chatbot for a project, the mentor checks the provider\'s rule first and the family decides.' }
      ]
    },
    {
      id: 'times',
      tint: 'tint',
      eyebrow: 'Class times',
      h2: 'When are the classes in German time?',
      lede: 'After school on weekdays and at weekends. Mentors are in India, a few hours ahead, which puts German afternoons in the Indian evening.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example German class times and the matching time in India', head: ['Germany', 'India, until 28 March 2027', 'India, from 28 March 2027'], rows: [
          ['16:15', '20:45', '19:45'],
          ['18:15', '22:45', '21:45'],
          ['Saturday 12:15', '16:45', '15:45'],
          ['Sunday 10:00', '14:30', '13:30']
        ] },
        { kind: 'source', html: 'German clocks run at UTC+1 (MEZ) through the winter and UTC+2 (MESZ) through the summer, as the Einheitenzeitgesetz sets out; they went back on 25 October 2026 and go forward on 28 March 2027. India never changes from UTC+5:30, which leaves it 4 hours 30 ahead of Germany in winter and 3 hours 30 in summer. The times are examples, not fixed batches.' },
        { kind: 'p', mt: true, html: 'The booking form shows trial slots in the time of your own device. In the weeks before the Abitur or a class test a one-to-one pupil can move lessons, and a group pupil can catch up with the mentor afterwards.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'From a first loop to a project a jury can question',
    lede: 'The stages we use to place a pupil and to report to parents. They are ours, not a school standard.',
    table: { caption: 'AI course stages for school students (ours)', head: ['Stage', 'Usually reached', 'The pupil can'], rows: [
      ['1. Python basics', 'First weeks', 'Write loops, lists and functions without help'],
      ['2. Data', 'Month 2', 'Load a table, count and average it, draw a chart'],
      ['3. Learning by steps', 'Months 3 to 4', 'Train a line by gradient descent and choose a step size'],
      ['4. Judging a model', 'Months 5 to 6', 'Split data, measure accuracy and say how sure the result is'],
      ['5. Own project', 'Month 7 onwards', 'Plan, build and present a model, with its limits written down']
    ] },
    left: { h3: 'For pupils', ps: [
      'Run the code before you believe the explanation, and change one number to see what breaks.',
      'If you cannot say what your model gets wrong, you do not know it yet.'
    ] },
    right: { h3: 'For parents', ps: [
      'Ask your child to show you one model and explain a single line of it. That tells you more than any certificate.',
      'Progress shows in the questions they start asking, not only in the projects.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine further courses for school students',
    lede: 'Each one is taught live in English by a mentor who keeps to the pupil\'s pace, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Getting started', sub: 'Ages 8 to 15', courses: [
        { code: 'AIC / START / 01', slug: 'ai-literacy-for-kids-course', title: 'AI literacy', blurb: 'How AI works and where it fails, for younger pupils.' },
        { code: 'AIC / START / 02', slug: 'orange-data-mining-visual-machine-learning-course-for-teens', title: 'Visual machine learning', blurb: 'Models built by dragging blocks, before the code.' },
        { code: 'AIC / START / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'School maths, explored in Python.' }
      ] },
      { num: 'II', h3: 'School maths and Informatik', sub: 'Klasse 9 to the Abitur', courses: [
        { code: 'AIC / SCHOOL / 01', slug: 'abitur-mathematics-course-in-english', title: 'Abitur maths in English', blurb: 'Analysis, geometry and Stochastik for the Abitur.' },
        { code: 'AIC / SCHOOL / 02', slug: 'informatik-abitur-course-java-python', title: 'Informatik Abitur', blurb: 'Support for the school Informatik course.' },
        { code: 'AIC / SCHOOL / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'The Stochastik behind judging a model.' }
      ] },
      { num: 'III', h3: 'Going further', sub: 'Ages 14 to 19', courses: [
        { code: 'AIC / MORE / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Real datasets, cleaned and questioned.' },
        { code: 'AIC / MORE / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and algorithms', blurb: 'The thinking behind efficient programs.' },
        { code: 'AIC / MORE / 03', slug: 'teens-ai-tools-mastery-course', title: 'AI tools for teens', blurb: 'Using AI tools well, within their age rules.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it runs',
    h2: 'How the live AI course runs for pupils in Germany',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school', l: 'Weekday slots from about 16:00 German time.' },
      { time: 'Weekends', l: 'Saturday and Sunday mornings and early afternoons.' },
      { time: 'Private', l: 'A time fixed with the mentor, moved around exams.' }
    ],
    cells: [
      { h3: 'Pupil writes the code', p: 'Nothing is pasted in from a chatbot.' },
      { h3: 'Maths made visible', p: 'Derivatives and probability, shown at work.' },
      { h3: 'Clear English', p: 'Spoken at the pupil\'s pace, rephrased gladly.' },
      { h3: 'One mentor', p: 'The same person every week.' },
      { h3: 'Tool ages respected', p: 'No adult-only tools for under-18s.' },
      { h3: 'Your choice of size', p: 'Fifteen to twenty pupils, or just one.' }
    ]
  },

  projectsH2: 'What our students have made',
  projectsLede: 'A few projects by our students in different countries; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has many more.',
  reviewsLede: 'What parents and students wrote about us on Google, word for word.',

  fees: {
    h2: 'Fees for the AI course in Germany',
    lede: 'Each month covers eight live classes. We show the fee in euro, converted at the European Central Bank reference rate, but take the payment in US dollars, so it is your bank that converts it and your statement may differ by a little.',
    free: ['A free first class', 'A small coding task to find the right level', 'No payment details asked for'],
    group: ['A group of fifteen to twenty pupils', 'A regular mentor who knows each pupil', 'Two live classes a week', 'Pay monthly, stop any month'],
    one: ['The pupil alone with a mentor', 'Pace and projects set around school', 'Lesson times agreed together']
  },

  faq: {
    eyebrow: 'Families in Germany ask',
    h2: 'AI course for school students in Germany: questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. All classes are live and in English only, with a mentor based in India who matches the pupil\'s pace and accent. Python itself uses English keywords, so the code looks the same whatever language a pupil thinks in.' },
      { q: 'Is my child\'s English good enough?', a: 'Usually yes. Most of the lesson is code on a shared screen, and the mentor speaks slowly, repeats in simpler words and waits for answers. Pupils at German schools often find their English improves as a side effect.' },
      { q: 'What age is the course for?', a: 'For pupils aged 13 to 19, from about Klasse 7 to the Abitur year. Younger children can start with our AI literacy course for ages 8 to 14.' },
      { q: 'Does my child need Informatik at school?', a: 'No. According to the Informatik-Monitor 2026/27, only about 15 percent of upper-school pupils across Germany take Informatik in the Qualifikationsphase. The course starts from Python basics for anyone who has not programmed.' },
      { q: 'Does the course help with the Abitur?', a: 'It uses the same maths, Analysis, geometry and Stochastik, and many pupils say school maths makes more sense afterwards. It does not replace school and awards no German grade or qualification; the school course is the one that counts.' },
      { q: 'Can my child enter the BWKI or Jugend forscht?', a: 'Yes, if they meet the organisers\' conditions. The BWKI accepts projects in German or English from Sekundarstufe I and II, and Jugend forscht has a Mathematik/Informatik field for ages 15 to 21, with a junior section up to 14. We are not connected with either and do not enter work for pupils.' },
      { q: 'Will my child use ChatGPT or Claude?', a: 'Not as part of the course: pupils write their models in Python. Anthropic\'s terms put Claude at 18 or over, so we never use it with anyone under 18. Rules for other tools are quoted in our AI tools age guide.' },
      { q: 'When are the classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. In German time that usually means after school or on weekend mornings.' },
      { q: 'How are fees paid?', a: 'Fees appear in euro at the European Central Bank reference rate and are charged in US dollars, which your bank converts, so the exact amount on your statement can vary slightly. The first class costs nothing.' },
      { q: 'Group or one to one?', a: 'A group of fifteen to twenty pupils suits a steady pace and costs less. One to one suits a pupil with a competition deadline, exam weeks to plan around or a project of their own.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Also on this site',
    h2: 'Related pages',
    lede: 'Further reading for pupils and parents in Germany.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Every page we have written for Germany.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning in Germany', p: 'The wider guide, for teens and adults.' },
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'The exam whose maths this page uses.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Help with the school subject, in German.' },
      { href: '/machine-learning-competitions-for-high-school-students', label: 'Machine learning competitions', p: 'Contests for teenagers around the world.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Minimum ages, quoted from the providers.' }
    ]
  },

  start: {
    h2: 'Book a free first class in the AI course',
    lede: 'The mentor talks with your child about school, maths and what they want to build, gives a short task to judge the level, and suggests where to begin. All in English, at your child\'s pace.',
    readFirst: 'Want to know more first? Read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or look through <a class="ag-inline-link" href="/courses">all courses</a>.',
    note: 'Classes are live online and taught in English by mentors based in India. WhatsApp, in English, is the fastest way to reach us.',
    formNote: 'The first class is free and no card is needed.'
  },

  footer: {
    cols: [
      { h4: 'AI for pupils', links: [
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/ai-projects-for-high-school-students', label: 'AI projects for teens' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths in English' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' }
      ] }
    ],
    bottomRight: 'Mind the step size'
  },

  personalityCss: `
.ag-root.ag-aic .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-aic .ag-capsule { border-left-width: 5px; }
.ag-root.ag-aic .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-aic .ag-table td:nth-child(2) { font-variant-numeric: tabular-nums; }
.ag-root.ag-aic .ag-code-head b { letter-spacing: 0.03em; }
`,

  dossier: {
    curriculumAuthority: 'GI Informatik-Monitor 2026/27 (Belegungsquote map, Stand 2024/25); IQB description of the maths pool task structure and Abitur pool page; KMK Bildung in der digitalen Welt (2026 AI update); BWKI conditions and 2026 timeline; Jugend forscht age groups and timeline; Dr. Hans Riegel-Fachpreise; Anthropic consumer terms; Einheitenzeitgesetz. Read 3 November 2026.',
    localProject: 'Mind the step size: an original Python example in which a two-number model learns Fahrenheit = 1.8 x Celsius + 32 by gradient descent from a starting loss of 3,290.7; learning rate 0.0001 needs 44,584 steps, 0.001 needs 4,456, 0.003 needs 1,484, and 0.005 explodes (loss 22,964,118 after six steps); edge at about 0.0032. Lesson family: the step size decides everything.',
    requiredMentions: ['rate 0.003  w = 1.8  b = 32.0  loss = 4.18e-14', 'rate 0.005  loss after steps 1 to 6: 12669, 55174, 247728, 1119912, 5070438, 22964118', '44,584', 'Analytische Geometrie/Lineare Algebra and Stochastik', 'Mecklenburg-Vorpommern are above 40 percent', 'KI-Schule des Jahres', 'Mind the step size', 'about 0.0032'],
    sources: [
      { claim: 'Informatik uptake in the Qualifikationsphase by Land, 2024/25; national average about 15 percent.', url: 'https://informatik-monitor.de/' },
      { claim: 'Abitur maths pool exam: Parts A and B, each with Analysis, analytic geometry/linear algebra and Stochastik.', url: 'https://www.iqb.hu-berlin.de/media/documents/M_Beschreibung_der_Struktur_der_Aufgaben.pdf' },
      { claim: 'BWKI conditions and 2026 timeline.', url: 'https://www.bw-ki.de/teilnahmebedingungen' },
      { claim: 'Jugend forscht age groups and registration by 30 November.', url: 'https://www.jugend-forscht.de/teilnahme/alterssparten.html' },
      { claim: 'Dr. Hans Riegel-Fachpreise subjects and format.', url: 'https://www.hans-riegel-fachpreise.com/wettbewerb' },
      { claim: 'Claude minimum age 18.', url: 'https://www.anthropic.com/legal/consumer-terms' }
    ],
    rejectedClaims: [
      'Bremen Informatik uptake: the Informatik-Monitor map shows 17 % while its text lists Bremen among Länder where about one in twelve takes Informatik; left out.',
      '"About half" in Sachsen and Mecklenburg-Vorpommern (Monitor text) versus 43 % and 40 % (map, 2024/25): the page uses the map figures with their year.',
      'ChatGPT age rule from openai.com: host returned HTTP 403, not retried; referred to our AI tools age guide only.',
      'Any affiliation with the BWKI, Jugend forscht, the Dr. Hans Riegel-Stiftung, the KMK, the IQB or a school: none.',
      'Any Abitur grade or competition result promise: none made.'
    ]
  }
};
