'use strict';
// Bundeswettbewerb KI (BWKI) project help (ag- competition spoke, Germany cluster row DE051), written 2026-11-03.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD. We mentor and teach; the pupil does the project; we never submit anything on anyone's behalf;
// we are not connected with the BWKI or the Tübingen AI Center. Prize money figures are not printed (Germany price rule).
// The live hub page ai-and-machine-learning-classes-in-germany has a short BWKI section; none of its sentences is reused.
// Spine: accuracy can lie. An invented, labelled-ours dataset of 365 days where a model that always says "no" scores 92%
// accuracy and finds nothing, against a one-number threshold model, read through the confusion matrix.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/bundeswettbewerb-ki-bwki-project-help/
// and facts-school/src/bwki, bwki-tb, bwki-wb; quoted strings grepped from the raw text, fetched 2 and 3 November 2026):
//  - bw-ki.de/teilnahmebedingungen: "vom Tübingen AI Center (nachfolgend Veranstalter) unter der Schirmherrschaft des
//    baden-würrtembergischen Ministerpräsidenten"; "Mitglied der AG bundesweiter Jugendwettbewerbe und wird durch die
//    Kultusministerkonferenz empfohlen"; "richtet sich an Schülerinnen und Schüler der Sekundarstufe I und II. Voraussetzung
//    ist, dass die Teilnehmenden die deutsche Staatsbürgerschaft oder einen Wohnsitz in Deutschland haben oder eine staatlich
//    anerkannte deutsche Schule im Ausland besuchen"; "Studierende dürfen sich höchstens im ersten Studienjahr"; "es werden
//    keine Themen vorgegeben"; "das Trainieren eines Modelles mit einem Datensatz ... oder die Einbindung generativer KIs";
//    "stellt keine Räumlichkeiten oder Materialien"; "Die Abgabe des Projekts beinhaltet eine schriftliche Dokumentation,
//    einen lauffähigen Code und einen Video-Pitch."; "Pitch von 2-4 Minuten"; "Bis zu 10 Teams werden im November zum Finale
//    eingeladen."; "ein klar erkennbarer und nachvollziehbar dokumentierter Anteil an Eigenleistung"; "Sämtliche Formen der
//    Unterstützung sind dabei transparent und vollständig offenzulegen"; "wenn GPU-Rechenleistung oder technische
//    Infrastruktur zur Verfügung gestellt wurde"; "dass sie die Aufgaben selbstständig lösen"; "Projekte dürfen sowohl auf
//    deutscher wie auch auf englischer Sprache abgegeben werden"; weapons, military, violence excluded; "Nein, es wird nicht
//    zwischen unterschiedlichen Altersgruppen entschieden ... besondere Förderpreise für Nachwuchstalente"; a previous
//    finalist project cannot enter again (FACTS 208 to 213).
//  - bw-ki.de/wettbewerb: "allein oder in einem Team mit bis zu vier Personen"; "Ab Anfang März ... Bis Ende Juni muss eure
//    Projektidee eingereicht sein ... Bis Ende September ... Im November präsentieren"; criteria "Eigenständigkeit,
//    Originalität, Technische Umsetzung, Wissenschaftliches Arbeiten, Praktische Relevanz, Codequalität, Präsentation";
//    "Dabei wird berücksichtigt, welche Vorkenntnisse, Möglichkeiten und Ressourcen euch zur Verfügung standen"; "Auch wenn
//    ihr nicht für das Finale ausgewählt werdet, erhaltet ihr fachliches Feedback"; "Die Reise- und Übernachtungskosten der
//    Finalist werden übernommen. Für die Preisvergabe ist die persönliche Teilnahme am Finale erforderlich."
//  - bw-ki.de: "01.03.2026 ... 12.07.2026 Anmeldeschluss für eure Projektideen, verlängert 20.09.2026 Abgabeschluss für eure
//    Projekte 13.11.2026 Finale in Tübingen" (FACTS 214); "Ab dem 3. November könnt ihr auch ihr mitentscheiden und für euren
//    Favoriten beim Publikumspreis abstimmen".
//  - AI tool ages: content/ai-tool-age-audit.json (OpenAI 13 with a parent's permission under 18; Claude 18+).
// Our own calculation (scratchpad de/w/G8/bwki1.py, python3 -I, random.seed(51), invented data), output pasted exactly:
//   Heavy-rain days in test: 10 of 125
//   Always no: tp fp fn tn, accuracy, precision, recall = (0, 0, 10, 115, 0.92, 0, 0.0)
//   Threshold learned on training days: 83
//   Threshold model: (9, 8, 1, 107, 0.928, 0.529, 0.9)
// Lesson family: accuracy can lie; read the confusion matrix (precision and recall on an imbalanced problem).

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const MATRIX = [
  'import random',
  '',
  'random.seed(51)',
  'days = []',
  'for d in range(365):',
  '    heavy = random.random() < 0.07',
  '    humidity = random.gauss(88, 4) if heavy else random.gauss(71, 8)',
  '    days.append((round(humidity, 1), heavy))',
  'train, test = days[:240], days[240:]',
  '',
  'def scores(predict, data):',
  '    tp = sum(1 for h, y in data if predict(h) and y)',
  '    fp = sum(1 for h, y in data if predict(h) and not y)',
  '    fn = sum(1 for h, y in data if not predict(h) and y)',
  '    tn = len(data) - tp - fp - fn',
  '    accuracy = (tp + tn) / len(data)',
  '    recall = tp / (tp + fn) if tp + fn else 0',
  '    precision = tp / (tp + fp) if tp + fp else 0',
  '    return tp, fp, fn, tn, round(accuracy, 3), round(precision, 3), round(recall, 3)',
  '',
  'def f1(t):',
  '    tp, fp, fn, tn, a, p, r = scores(lambda h: h >= t, train)',
  '    return 2 * p * r / (p + r) if p + r else 0',
  '',
  'print("Heavy-rain days in test:", sum(1 for h, y in test if y), "of", len(test))',
  'print("Always no: tp fp fn tn, accuracy, precision, recall =", scores(lambda h: False, test))',
  'best_t = max(range(70, 96), key=f1)',
  'print("Threshold learned on training days:", best_t)',
  'print("Threshold model:", scores(lambda h: h >= best_t, test))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'competition', label: 'BWKI project help' },
  slug: 'bundeswettbewerb-ki-bwki-project-help',
  code: 'buk',
  accent: '#4E5A23',
  accentRationale: 'Bundeswettbewerb KI project help: a deep moss green #4E5A23, earthy and lab-like, clear of the Germany hub fir green and the AI page plum; contrast 6.06 on the paper #FBF8F2 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Bundeswettbewerb KI (BWKI) project help',
  title: 'Bundeswettbewerb KI (BWKI) Project Help in English',
  description: 'BWKI project help for pupils in Germany: who may enter, the yearly timeline, what a project must contain, how help is declared, and a lesson on honest evaluation.',
  ogDescription: 'The Bundeswettbewerb Künstliche Intelligenz explained from its own rules: eligibility, the March to November rhythm, the three-part submission and the judging criteria, why all support must be disclosed, and a lesson on why accuracy alone can mislead a jury.',
  twitterDescription: 'BWKI explained for pupils in Germany, with mentoring in English where the pupil does the project.',
  pageName: 'Bundeswettbewerb KI (BWKI) Project Help',
  webPageDescription: 'A guide for pupils in Germany and their parents to the Bundeswettbewerb Künstliche Intelligenz: who may enter, the yearly timeline and the 2026 dates, the documentation, code and video every project needs, the seven judging criteria, the rule that every kind of help must be disclosed, and an original lesson on evaluating a model honestly.',
  courseDescription: 'Live online mentoring and machine-learning teaching in English for pupils in Germany planning a BWKI project: Python, data, honest evaluation and clear documentation, with the pupil doing the project, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'BWKI project help',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#contest', label: 'Contest' },
    { href: '#year', label: 'Timeline' },
    { href: '#judging', label: 'Judging' },
    { href: '#help', label: 'Help' },
    { href: '#lesson', label: 'Lesson' }
  ],
  eyebrow: 'Germany &middot; Bundeswettbewerb Künstliche Intelligenz &middot; Sekundarstufe I and II',
  h1: 'Bundeswettbewerb KI (BWKI) project help',
  lede: 'The Bundeswettbewerb Künstliche Intelligenz asks pupils to pick a real problem and attack it with machine learning, then explain it in writing, in code and in a short video. It is judged as a piece of research, and its rules are strict about one thing above all: the work must be the pupil\'s own, and every bit of help must be declared. This page explains the contest from its organisers\' own rules and shows exactly where a mentor fits, and where a mentor must stop.',
  secondaryCta: { href: '#help', label: 'See what help is allowed' },
  wa: 'Hello Modern Age Coders, I am a pupil in Germany thinking about a project for the Bundeswettbewerb KI and would like a free first class in English.',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; your project, your code, our teaching',
  spec: [
    ['Who', 'Pupils in Sekundarstufe I and II'],
    ['Teams', 'Alone or up to four'],
    ['Language', 'Projects in German or English'],
    ['Our role', 'Teaching and mentoring only'],
    ['Teachers', 'Mentors based in India'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'BWKI project help at Modern Age Coders means live online mentoring in English for pupils in Germany who want to enter the Bundeswettbewerb Künstliche Intelligenz. We teach the Python, machine learning and honest evaluation a project needs, and review the pupil\'s own plan, code and write-up; the pupil does the project and submits it. A regular mentor follows each pupil\'s pace and accent, alone or in a group of fifteen to twenty.',

  picks: {
    eyebrow: 'Where BWKI pupils start',
    h2: 'Three courses behind a BWKI project',
    lede: 'Machine learning from first principles, the Python underneath it, and the German contests course with its AI project track.',
    items: [
      { course: 'ai-ml-masterclass-teens', code: 'BUK / 01', title: 'AI and Machine Learning for Teens', note: 'Ages 13 to 18. Data, models and evaluation built step by step, up to a project of the pupil\'s own design.' },
      { course: 'german-informatics-competitions-course-biber-bwinf-bwki', code: 'BUK / 02', title: 'German Informatics Competitions', note: 'Ages 9 to 19. Includes a machine-learning project track aimed at the BWKI, alongside the BWINF contests.' },
      { course: 'python-complete-masterclass-teens', code: 'BUK / 03', title: 'Python for Teens', note: 'A first language for teenagers starting from nothing. Every BWKI project needs runnable code, and Python is where most begin.' }
    ]
  },

  sections: [
    {
      id: 'contest',
      eyebrow: 'The contest',
      h2: 'What is the Bundeswettbewerb KI, and who can enter?',
      lede: 'A national project competition in artificial intelligence for school pupils, organised by the Tübingen AI Center and carrying a recommendation from the Kultusministerkonferenz.',
      body: [
        { kind: 'two',
          leftH3: 'What it asks for',
          left: [
            'The organisers\' conditions describe a self-chosen project that tackles a problem of social or scientific relevance with methods of machine learning. No topics are set. A project may train a model on a dataset, made by the pupil, taken from the internet or provided by a partner, or may build in generative AI such as language or image models.',
            'Work can happen at home or at school. The BWKI states that it does not provide rooms or materials, and that participants are responsible for their own computer and internet connection.'
          ],
          rightH3: 'Who may take part',
          right: [
            'Anyone in Sekundarstufe I or II may enter, solo or with up to three teammates. Entrants must have German citizenship, or live in Germany, or attend a recognised German school abroad. Students may still enter in their first year of a first degree if they left school no more than a year before, and the same applies to young people doing voluntary service.',
            'There are no age categories, the conditions say, but there are special awards for young talent.'
          ] },
        { kind: 'p', mt: true, html: 'Two lines in the conditions matter to families who speak English at home. The organisers accept a project written in English as readily as one in German. And residence in Germany is enough: a pupil at an international school who lives in Germany meets the residence rule on the organisers\' own wording. The contest belongs to the AG bundesweiter Jugendwettbewerbe, the association of national youth contests, and the Minister-President of Baden-Württemberg is its patron.' }
      ]
    },
    {
      id: 'year',
      tint: 'tint',
      eyebrow: 'The yearly rhythm',
      h2: 'When does the BWKI run, and what were the 2026 dates?',
      lede: 'Every year follows the same shape: register in spring, submit the idea in early summer, submit the project at the end of September, present in November.',
      body: [
        { kind: 'table', numCols: [], caption: 'The BWKI year, with the 2026 dates as the organisers published them', head: ['Stage', 'Usual timing', '2026 date'], rows: [
          ['Registration and team-building open', 'From early March', '1 March 2026'],
          ['Project idea submitted', 'By the end of June', '12 July 2026, after an extension'],
          ['Full project submitted', 'By the end of September', '20 September 2026'],
          ['Final, up to ten teams', 'November', '13 November 2026, Tübingen']
        ] },
        { kind: 'source', html: 'Sources: Bundeswettbewerb Künstliche Intelligenz, home page (bw-ki.de) and Wettbewerb page, read on 2 and 3 November 2026. The organisers publish each year\'s exact dates on the registration page; the 2027 dates had not been published on the pages read.' },
        { kind: 'p', mt: true, html: 'On the date of writing the 2026 round is almost over: the finalists present in Tübingen on 13 November 2026, and the organisers opened a public vote for the audience prize from 3 November. For a pupil reading this now, the realistic target is the next round, with registration expected from early March 2027. That leaves the winter to learn the methods, which is exactly when a mentor is most useful and least tempted to do the work.' }
      ]
    },
    {
      id: 'judging',
      eyebrow: 'Submission and judging',
      h2: 'What must a BWKI project contain, and how is it judged?',
      lede: 'Three parts, assessed by an interdisciplinary jury against seven criteria. Every team gets written feedback, finalist or not.',
      body: [
        { kind: 'two',
          leftH3: 'The three parts',
          left: [
            '<strong>Documentation:</strong> the idea, the methods, how it was built and what came out, plus possible sources of error and a critical view of the results.',
            '<strong>Code:</strong> runnable and clearly structured, with every dataset, model, framework and outside tool marked.',
            '<strong>Video:</strong> a pitch of two to four minutes that a non-expert can follow and an expert can still respect.'
          ],
          rightH3: 'After submission',
          right: [
            'A selection jury reviews every project and invites up to ten teams to the final in November, where they present at a stand they design, before the public and the jury. The organisers cover finalists\' travel and accommodation, and personal attendance is required for the prizes.',
            'Teams not chosen still receive expert feedback, which the organisers suggest using to come back stronger the next year.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'The seven BWKI judging criteria and the question behind each (English wording ours)', head: ['Criterion', 'The jury asks'], rows: [
          ['Eigenständigkeit (own work)', 'How large is your own share of the project?'],
          ['Originalität', 'How creative and new are the idea and the approach?'],
          ['Technische Umsetzung', 'How demanding and reliable is the implementation?'],
          ['Wissenschaftliches Arbeiten', 'Have methods, results and sources of error been examined traceably?'],
          ['Praktische Relevanz', 'What use or insight does the project offer?'],
          ['Codequalität', 'Is the code understandable, structured and traceable?'],
          ['Präsentation', 'Are idea, method and results clear in the documentation and the video?']
        ] },
        { kind: 'source', html: 'Source: Bundeswettbewerb Künstliche Intelligenz, Wettbewerb page (bw-ki.de/wettbewerb), read on 3 November 2026. The organisers add that the jury takes into account the prior knowledge, opportunities and resources each team had.' }
      ]
    },
    {
      id: 'help',
      tint: 'tint',
      eyebrow: 'Allowed help',
      h2: 'What help is allowed for a BWKI project, and how must it be declared?',
      lede: 'Help is allowed. Hidden help is not. The conditions require a clearly visible, documented share of the pupil\'s own work, and full disclosure of every kind of support.',
      body: [
        { kind: 'two',
          leftH3: 'What the rules say',
          left: [
            'The organisers list what must be declared: the use of AI models and frameworks, the involvement of people, institutions or companies, datasets that were provided or downloaded, and any GPU computing power or technical infrastructure made available. On registering, participants also confirm that they solve the tasks and build the project themselves and will name every source and helper in the documentation.',
            'The organisers say they will not use participants\' ideas or results for their own purposes without asking.'
          ],
          rightH3: 'Where we fit, and where we stop',
          right: [
            'Modern Age Coders has no tie to the BWKI or to the Tübingen AI Center. We teach machine learning, review a pupil\'s plan, explain why a piece of the pupil\'s own code behaves as it does, and ask the questions a jury will ask.',
            'We do not choose the topic, write project code, write or edit the documentation, record the video or submit anything. If a pupil learned from us, that is help, and the pupil names us in the documentation, as the rules require.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>The pupil proposes.</strong> The pupil brings a question and a possible dataset; the mentor asks what success would look like and how it could be measured.',
          '<strong>The mentor teaches.</strong> Methods are taught on separate practice data, never by building the project for the pupil.',
          '<strong>The pupil builds.</strong> All project code is typed by the pupil, in the pupil\'s own repository.',
          '<strong>The mentor questions.</strong> Reviews are questions, not rewrites: why this split, what is the baseline, where could this be wrong?',
          '<strong>The pupil declares.</strong> The final documentation lists every dataset, library, AI tool and person who helped, our classes included.'
        ] },
        { kind: 'p', mt: true, html: 'On AI tools the BWKI allows generative models inside a project, but every provider sets its own minimum age: under OpenAI\'s terms a teenager needs a parent\'s consent until 18, and Anthropic reserves Claude for adults, as recorded in our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a>. For pupils under 18 our teaching uses Python and open libraries, and we never put an adult-only tool in front of them.' }
      ]
    },
    {
      id: 'lesson',
      eyebrow: 'A lesson of our own',
      h2: 'Why is accuracy not enough? A lesson on evaluating a model honestly',
      lede: 'The jury asks for analysis of error sources and a self-critical view of results. The most common trap in pupil projects is a single impressive accuracy figure. This example is ours, on invented data, to show why.',
      body: [
        { kind: 'two',
          leftH3: 'The made-up problem (ours)',
          left: [
            'Imagine 365 days of readings from a school weather station. On a few days there is heavy rain, and we want to warn the caretaker in advance using the morning humidity. The data below is invented by a seeded random generator for teaching. It is not real and not from any project.',
            'The first 240 days are for learning; the last 125 are locked away for testing.'
          ],
          rightH3: 'Two models',
          right: [
            '<strong>Always no:</strong> predict "no heavy rain" every day. It needs no data at all.',
            '<strong>Threshold:</strong> predict heavy rain when humidity is at or above a number learned from the 240 training days, the one that most fairly balances catching rainy days against false alarms.'
          ] },
        { kind: 'code', label: 'Two models and a confusion matrix', lang: 'Python', code: MATRIX, note: 'It prints <code>Heavy-rain days in test: 10 of 125</code>, then <code>Always no: tp fp fn tn, accuracy, precision, recall = (0, 0, 10, 115, 0.92, 0, 0.0)</code>, <code>Threshold learned on training days: 83</code> and <code>Threshold model: (9, 8, 1, 107, 0.928, 0.529, 0.9)</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3, 4, 5], caption: 'The two models on the 125 test days of invented data (our calculation)', head: ['Model', 'Rain warned and came', 'False alarms', 'Rain missed', 'Accuracy', 'Rain days caught'], rows: [
          ['Always no', '0', '0', '10', '92.0%', '0 of 10'],
          ['Threshold at 83', '9', '8', '1', '92.8%', '9 of 10']
        ] },
        { kind: 'source', html: 'Data: invented with random.seed(51) for this lesson, 365 days, heavy rain on about 7 percent. We chose the split, the threshold search and the seed; every figure was produced by that script under Python 3 on 3 November 2026.' },
        { kind: 'p', mt: true, html: 'Read the accuracy column alone and the two models look almost equal, 92.0 against 92.8 percent. Read the rest and they are nothing alike. The lazy model is right on 92 percent of days only because 92 percent of days are dry, and it misses every heavy-rain day. The threshold model catches 9 of the 10, at the price of 8 false alarms: its precision is about 0.53, so roughly every second warning is real. Whether that trade is good depends on the caretaker, and saying so in the documentation is exactly the scientific, self-critical work the BWKI criteria name. A pupil who reports only "92.8 percent accuracy" has hidden the most interesting part of their own project.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Run it.</strong> Write down the four numbers of each confusion matrix before reading the explanation.',
          '<strong>Move the line.</strong> Fix the threshold at 80, then 86. What happens to false alarms and missed rain? Which would you choose, and for whom?',
          '<strong>Break the rule.</strong> Learn the threshold on the test days instead. Why can that result not be trusted in a BWKI documentation?',
          '<strong>Your project.</strong> Write one paragraph on which mistake would be worse in your own project idea, a false alarm or a miss, and why.'
        ] }
      ]
    },
    {
      id: 'plan',
      tint: 'tint',
      eyebrow: 'A plan',
      h2: 'How could a pupil plan a BWKI project for 2027?',
      lede: 'Here is our suggested plan, built backwards from the usual timing. The exact 2027 dates will come from the organisers.',
      body: [
        { kind: 'table', numCols: [], caption: 'A suggested plan for a 2027 BWKI entry (ours)', head: ['When', 'The pupil', 'In class'], rows: [
          ['November 2026 to February 2027', 'Learns Python and data handling; keeps a list of questions they care about', 'Fundamentals, on our practice datasets'],
          ['March 2027', 'Forms a team, registers, chooses a question with a dataset whose licence allows use', 'How to judge whether a question is answerable'],
          ['April to June 2027', 'Builds a baseline, then a first model; submits the idea by the organisers\' deadline', 'Evaluation, as in the lesson above'],
          ['July to September 2027', 'Improves, documents error sources, records the video, submits', 'Questions on the draft, never edits to it'],
          ['November 2027', 'If chosen, presents at the final; otherwise reads the jury\'s feedback', 'Practice answering hard questions aloud']
        ] },
        { kind: 'source', html: 'The usual timing is from the organisers\' Wettbewerb page; the plan and its contents are our own suggestion, read on 3 November 2026.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When can BWKI mentoring run in German time?',
      lede: 'Late afternoons and weekends suit most teenagers. Our mentors teach from India, ahead of German time all year.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample mentoring times and the hour in India', head: ['Session starts (Germany)', 'Mentor\'s clock until 27 March 2027', 'Mentor\'s clock from 28 March 2027'], rows: [
          ['16:50', '21:20', '20:20'],
          ['18:15', '22:45', '21:45'],
          ['Saturday 12:45', '17:15', '16:15'],
          ['Sunday 16:00', '20:30', '19:30']
        ] },
        { kind: 'source', html: 'Germany switches between UTC+1 and UTC+2 under the Einheitenzeitgesetz; winter time began on 25 October 2026 and summer time begins on 28 March 2027. India does not change its clocks (UTC+5:30), which puts the mentor four and a half hours ahead this winter and three and a half ahead next summer.' },
        { kind: 'p', mt: true, html: 'The table lists examples, not fixed batch times. One-to-one mentoring is usually weekly, with an extra session agreed as the submission date nears.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'From a first dataset to a project you can defend',
    lede: 'Milestones we use with BWKI pupils to place them and to show parents where things stand.',
    table: { caption: 'BWKI project milestones (ours)', head: ['Stage', 'Roughly when', 'By then the pupil can'], rows: [
      ['1. Data in hand', 'Month 1', 'Load a dataset, describe it, and state its source and licence'],
      ['2. A baseline', 'Month 2', 'Name the simplest prediction and measure it'],
      ['3. An honest test', 'Months 2 to 3', 'Split the data, train a model and read its confusion matrix'],
      ['4. Error sources', 'Months 3 to 5', 'Find where the model fails and explain why'],
      ['5. A defended project', 'Months 5 and up', 'Document, pitch and answer questions on every choice made']
    ] },
    left: { h3: 'For pupils', ps: [
      'If one number makes your model look perfect, look for the number that does not.',
      'Write down every source and helper as you go. The rules ask for it at the end.'
    ] },
    right: { h3: 'For parents', ps: [
      'Ask to see the project folder, not the result. Your teenager\'s own commits are the clearest sign of real work.',
      'Help is fine and allowed. Make sure it is all named in the documentation.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for AI-minded teenagers in Germany',
    lede: 'All nine are taught live, in English, by one mentor from start to finish; book a seat in a group or a private slot.',
    bands: [
      { num: 'I', h3: 'Code and data', sub: 'Ages 13 to 18', courses: [
        { code: 'BUK / CODE / 01', slug: 'vibe-coding-for-teens-python-web-ai-projects-course', title: 'Vibe coding for teens', blurb: 'Projects with AI help, checked by the pupil.' },
        { code: 'BUK / CODE / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Algorithms that make projects run well.' },
        { code: 'BUK / CODE / 03', slug: 'informatik-abitur-course-java-python', title: 'Informatik Abitur in English', blurb: 'Oberstufe Informatik in Java and Python.' }
      ] },
      { num: 'II', h3: 'The maths of models', sub: 'Ages 14 and up', courses: [
        { code: 'BUK / MATHS / 01', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Error, chance and uncertainty, done right.' },
        { code: 'BUK / MATHS / 02', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for data analytics', blurb: 'Linear algebra and statistics for data.' },
        { code: 'BUK / MATHS / 03', slug: 'abitur-mathematics-course-in-english', title: 'Abitur maths in English', blurb: 'Stochastik and Analysis for the Oberstufe.' }
      ] },
      { num: 'III', h3: 'Other contests', sub: 'Ages 9 to 19', courses: [
        { code: 'BUK / MORE / 01', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'For the Bundeswettbewerb Informatik.' },
        { code: 'BUK / MORE / 02', slug: 'mathematik-olympiade-and-kaenguru-training-course', title: 'Olympiade and Känguru', blurb: 'The German maths contests.' },
        { code: 'BUK / MORE / 03', slug: 'ib-diploma-computer-science-course', title: 'IB Computer Science', blurb: 'For IB pupils planning an internal assessment.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How mentoring runs',
    h2: 'How live BWKI mentoring works',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Late afternoon', l: 'After school, German time, for weekly teaching.' },
      { time: 'Weekend', l: 'Longer sessions on Saturday or Sunday.' },
      { time: 'One to one', l: 'Fixed with your mentor, and stepped up before a submission.' }
    ],
    cells: [
      { h3: 'Your project', p: 'The pupil chooses, builds and submits it.' },
      { h3: 'Taught on practice data', p: 'Methods learned away from the project.' },
      { h3: 'Questions, not edits', p: 'Reviews ask what a jury would ask.' },
      { h3: 'Help declared', p: 'Our role is named in the documentation.' },
      { h3: 'Age rules kept', p: 'No adult-only AI tools for under 18s.' },
      { h3: 'Same mentor', p: 'One person through the whole project year.' }
    ]
  },

  projectsH2: 'Projects built by our students',
  projectsLede: 'Projects our students have made on their own, from many countries; browse the rest in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from students and parents, quoted without changes.',

  fees: {
    h2: 'Fees for BWKI mentoring and AI classes',
    lede: 'Eight live sessions a month make up the monthly fee. Our euro figure is converted with a reference rate published by the European Central Bank; what we actually charge is US dollars, and your bank converts them, which can leave a small gap between our euro figure and yours.',
    free: ['A free first class', 'A short talk about your project idea', 'No card needed'],
    group: ['Fifteen to twenty teenagers learning machine learning', 'One regular mentor', 'Two classes a week', 'Monthly, stop whenever you want'],
    one: ['One pupil, one mentor', 'Teaching shaped around your project year', 'Times agreed together']
  },

  faq: {
    eyebrow: 'Pupils and parents ask',
    h2: 'BWKI project help: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Mentoring happens live and only in English, and the mentor adjusts to each pupil\'s pace and accent. The BWKI accepts projects in German or English, so a pupil can also write the project in English.' },
      { q: 'Will you do the project or submit it for my child?', a: 'No. The BWKI requires a clearly documented share of the pupil\'s own work and the disclosure of every kind of help. We teach and ask questions; the pupil chooses the topic, writes the code and the documentation, records the video and submits.' },
      { q: 'Do we have to mention you in the project?', a: 'Yes. The BWKI conditions require all support by people, institutions or companies to be disclosed in the documentation. A pupil who learned from us names our classes there, as with any other help.' },
      { q: 'Who can enter the Bundeswettbewerb KI?', a: 'Pupils in Sekundarstufe I and II, alone or in a team of up to four, who have German citizenship, live in Germany or go to a recognised German school outside Germany. Some first-year students and people in voluntary service can enter if they left school within the past year.' },
      { q: 'When is the next BWKI round?', a: 'The organisers describe a yearly rhythm: registration from early March, the idea by the end of June, the project by the end of September and the final in November. In 2026 the final is on 13 November 2026 in Tübingen. Exact 2027 dates come from the BWKI.' },
      { q: 'May a teenager build a chatbot into a BWKI project?', a: 'The BWKI allows generative AI inside a project, provided it is declared. Providers set the ages, though: OpenAI asks for parental consent before 18, and Claude is for adults only under Anthropic\'s terms. We never use Claude with pupils under 18.' },
      { q: 'Are you connected with the BWKI?', a: 'No. We have no connection with the Bundeswettbewerb Künstliche Intelligenz or the Tübingen AI Center. We are an independent teaching company.' },
      { q: 'When are classes in German time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Most pupils pick a late afternoon or a weekend.' },
      { q: 'How are fees paid?', a: 'Our euro fee is derived from a European Central Bank reference rate; the payment itself is taken in US dollars and converted by your own bank. The trial class costs nothing, and you enter no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Further pages for young people in Germany who want to build with AI.',
    items: [
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning in Germany', p: 'Our broader page on learning machine learning here.' },
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'All our Germany pages in one place.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Minimum ages for AI tools, quoted from their terms.' },
      { href: '/ai-projects-for-kids', label: 'AI projects for kids', p: 'Starting ideas for younger learners.' },
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'The statistics a model rests on.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our live classes explained.' }
    ]
  },

  start: {
    h2: 'Book a free first class about your BWKI idea',
    lede: 'Bring a question you care about. In the first class the mentor asks how it could be measured, checks what you already know, and suggests what to learn before March. All of it happens in English, at a speed that suits you.',
    readFirst: 'To read more first, there is <a class="ag-inline-link" href="/how-we-teach">our page on how we teach</a> and the <a class="ag-inline-link" href="/courses">complete course list</a>.',
    note: 'Mentoring is live online and only in English; our mentors are based in India. WhatsApp us in English for a quick reply.',
    formNote: 'The first class is free; there is no card to enter.'
  },

  footer: {
    cols: [
      { h4: 'AI projects', links: [
        { href: '/courses/ai-ml-masterclass-teens', label: 'AI and machine learning for teens' },
        { href: '/courses/german-informatics-competitions-course-biber-bwinf-bwki', label: 'German informatics competitions' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths in English' }
      ] }
    ],
    bottomRight: 'Read the whole confusion matrix'
  },

  personalityCss: `
.ag-root.ag-buk .ag-hero h1 { letter-spacing: -0.013em; }
.ag-root.ag-buk .ag-capsule { border-left-width: 4px; }
.ag-root.ag-buk .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-buk .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-buk .ag-steps li { line-height: 1.65; }
`,

  dossier: {
    curriculumAuthority: 'Bundeswettbewerb Künstliche Intelligenz (bw-ki.de: home page with the 2026 timeline, Wettbewerb page, Teilnahmebedingungen); providers\' terms via content/ai-tool-age-audit.json; Einheitenzeitgesetz. Read 2 and 3 November 2026.',
    localProject: 'Accuracy can lie: an invented, seeded dataset of 365 school weather-station days (labelled as invented) where a model that always says no reaches 92.0% test accuracy and catches 0 of 10 heavy-rain days, while a learned humidity threshold of 83 reaches 92.8% and catches 9 of 10 with 8 false alarms (precision 0.529), read through the confusion matrix. Lesson family: precision, recall and the confusion matrix on an imbalanced problem.',
    requiredMentions: ['Always no: tp fp fn tn, accuracy, precision, recall = (0, 0, 10, 115, 0.92, 0, 0.0)', 'Threshold model: (9, 8, 1, 107, 0.928, 0.529, 0.9)', 'Threshold learned on training days: 83', '12 July 2026, after an extension', 'Help is allowed. Hidden help is not.', 'the pupil names us in the documentation', 'any GPU computing power or technical infrastructure', 'Read the whole confusion matrix'],
    sources: [
      { claim: 'Organiser, patronage, KMK recommendation, eligibility, free topics, submission parts, disclosure of all support, German or English, final of up to 10 teams.', url: 'https://www.bw-ki.de/teilnahmebedingungen' },
      { claim: 'Teams of up to four, yearly rhythm, seven judging criteria, feedback for all, travel covered for finalists.', url: 'https://www.bw-ki.de/wettbewerb' },
      { claim: '2026 timeline: 1 March, 12 July (extended), 20 September, final 13 November 2026 in Tübingen; audience vote from 3 November.', url: 'https://www.bw-ki.de/' },
      { claim: 'AI tool minimum ages.', url: 'https://learn.modernagecoders.com/ai-tools-age-guide' }
    ],
    rejectedClaims: [
      'That we co-author, build, edit or submit projects: we do not; the pupil does the project.',
      'Prize money amounts and sponsor internships: not printed (no typed euro figures on Germany pages).',
      'BWKI 2027 dates: not yet published on the pages read; only the yearly pattern is given.',
      'Any affiliation with the BWKI or the Tübingen AI Center: none.',
      'That the invented weather data is real: it is labelled as invented throughout.'
    ]
  }
};
