'use strict';
// Jugend forscht computer science project mentoring (ag- competition spoke, Germany cluster row DE052), written 2026-11-03.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD. We mentor and teach; the pupil does the project; no submission on anyone's behalf; we are
// not connected with the Stiftung Jugend forscht. Jugend forscht requires German for the written work, the stand and the
// jury talk, and the page says so plainly: our classes are in English, the German write-up is the pupil's own.
// Spine: design a fair experiment. An original simulation question (how fast does news spread through a class?), a
// hypothesis stated first, 1,000 seeded runs per class size, and the median and the spread reported, not one lucky run.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/jugend-forscht-computer-science-project-
// mentoring/ and facts-school/src/jufo, jufo-ablauf, jufo-alter, jufo-junior, jufo-mi; quoted strings grepped from the raw
// text, fetched 2 and 3 November 2026):
//  - jugend-forscht.de: "Pro Jahr gibt es bundesweit mehr als 130 Wettbewerbe. Teilnehmen können Jugendliche ab der 4.
//    Klasse bis zum Alter von 21 Jahren."; "Neun von zehn erfolgreichen Teilnehmenden studieren später ein Fach im
//    MINT-Bereich." (FACTS 194, 199)
//  - Ablauf auf einen Blick: "November: Online-Anmeldung bis 30. November"; "Januar: Abgabe der schriftlichen
//    Ausarbeitung"; "Februar: Alle Jungforscherinnen und Jungforscher starten beim Regionalwettbewerb"; "April:
//    Landeswettbewerbe Jugend forscht junior"; "Mai: Abschluss der Runde mit dem Bundesfinale Jugend forscht" (FACTS 197, 198)
//  - Alterssparten and Jugend forscht junior: "Jugendliche zwischen 15 und 21 Jahren starten in der Sparte Jugend forscht";
//    "am 31. Dezember des Anmeldejahres nicht älter als 14 Jahre"; "Bei Jugend forscht junior gibt es kein Bundesfinale.";
//    "das Alter des ältesten Teilnehmenden" decides the category (FACTS 195, 196).
//  - Fachgebiet Mathematik/Informatik: "In das Fachgebiet Mathematik/Informatik gehören nur solche Arbeiten, die tatsächlich
//    wissenschaftliche Beiträge für die Mathematik und/oder die Informatik liefern."; Teilgebiete incl. "Theoretische
//    Informatik (u.a., Algorithmik ...)"; plant-identification software example belongs to Biologie.
//  - FAQ: "Die deutsche Sprache ist verbindlich für die schriftliche Dokumentation, die visuelle Präsentation am
//    Ausstellungsstand sowie das Jurygespräch."; "Eine Gruppe besteht aus zwei oder maximal drei Personen."; Projektbetreuende
//    "keine Voraussetzung"; "maximal zwei Projektbetreuende"; written work date "liegt immer im Januar".
//  - Teilnahmebedingungen: "mit Wohn- und Ausbildungsort in Deutschland"; "bis zu drei Projekte"; "Die schriftliche Arbeit
//    darf einen Umfang von 15 DIN-A4-Seiten nicht überschreiten"; "Ein Anhang sowie Weblinks im Fließtext sind nicht
//    gestattet"; "Projektbetreuende und Begleitpersonen dürfen beim Jurygespräch nicht anwesend sein"; "Nach dem
//    Anmeldeschluss am 30. November ... bis zum 31. Dezember angeschrieben".
//  - Schriftliche Arbeit: "Alle bei der Erarbeitung des Projekts verwendeten Quellen sowie sämtliche Unterstützer ...
//    müssen in der Arbeit angegeben werden".
//  - Thema finden: "Jugend forscht ist ein Ideenwettbewerb"; "Arbeiten im Rahmen der 'Besonderen Lernleistung' ... können als
//    Jugend forscht Projekte eingereicht werden".
//  - Projektbetreuer finden: "Die meisten Jugend forscht Projekte werden von Lehrerinnen und Lehrern betreut."
//  - Bundeswettbewerb 2027: "Den 62. Bundeswettbewerb richtet die Stiftung Jugend forscht e. V. gemeinsam mit der Vogel
//    Stiftung Dr. Eckernkamp in Würzburg aus."
// Our own calculation (scratchpad de/w/G8/jufo1.py, python3 -I, random.Random(2027), 1,000 runs per size), output pasted:
//   10 pupils: median 6.0 days, middle 90% 5 to 9 / 20 pupils: median 8.0 days, middle 90% 7 to 11
//   40 pupils: median 10.0 days, middle 90% 8 to 13 / 80 pupils: median 12.0 days, middle 90% 10 to 14
// Lesson family: design a fair experiment (hypothesis first, many seeded repeats, median and spread reported).

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const RUMOUR = [
  'import random',
  'from statistics import median',
  '',
  'def days_until_all_know(size, rng):',
  '    knows = {0}',
  '    days = 0',
  '    while len(knows) < size:',
  '        days += 1',
  '        told = {rng.randrange(size) for pupil in knows}',
  '        knows |= told',
  '    return days',
  '',
  'rng = random.Random(2027)',
  'for size in [10, 20, 40, 80]:',
  '    runs = sorted(days_until_all_know(size, rng) for _ in range(1000))',
  '    print(size, "pupils: median", median(runs), "days, middle 90%", runs[50], "to", runs[949])'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'competition', label: 'Jugend forscht computer science' },
  slug: 'jugend-forscht-computer-science-project-mentoring',
  code: 'jfc',
  accent: '#005045',
  accentRationale: 'Jugend forscht computer science mentoring: a deep lab green #005045, scientific and calm, clear of the BWKI moss and the Germany hub fir; contrast 7.63 on the paper #FBF8F2 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Jugend forscht computer science project mentoring',
  title: 'Jugend forscht Informatik: Project Mentoring in English',
  description: 'Jugend forscht in maths and computer science: who may enter, the 2026 to 2027 timeline, the German-language rule, what juries want, and a lesson on fair tests.',
  ogDescription: 'Jugend forscht from its own rules for pupils with a computer science idea: age groups, the 30 November registration, the January write-up, why the work must be presented in German, and an original lesson on designing an experiment a jury can trust.',
  twitterDescription: 'Jugend forscht computer science projects explained, with mentoring in English where the pupil does the research.',
  pageName: 'Jugend forscht Computer Science Project Mentoring',
  webPageDescription: 'A guide for pupils in Germany and their parents to Jugend forscht in the field Mathematik/Informatik: age groups, the 2026 to 2027 timeline, the rules on teams, supervisors, the written work and the German language, what counts as a real contribution to informatics, and an original lesson on running a fair computer experiment.',
  courseDescription: 'Live online mentoring and teaching in English for pupils in Germany preparing a Jugend forscht project in maths or computer science: research questions, programming, fair experiments and honest reporting, with the pupil doing the research, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Jugend forscht Informatik',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#contest', label: 'Contest' },
    { href: '#round', label: 'Dates' },
    { href: '#language', label: 'German' },
    { href: '#field', label: 'Informatik' },
    { href: '#experiment', label: 'Lesson' }
  ],
  eyebrow: 'Germany &middot; Jugend forscht &middot; Mathematik/Informatik',
  h1: 'Jugend forscht computer science project mentoring',
  lede: 'Jugend forscht is Germany\'s large research competition for young people, and its field Mathematik/Informatik asks for more than a working app: a real question, a careful method and a result that adds something. This page explains the contest from the Stiftung Jugend forscht\'s own rules, including one that matters to every family reading in English: the written work, the stand and the jury talk must be in German. It also shows where a mentor teaching in English can help, where the pupil must stand alone, and a lesson on running an experiment a jury can trust.',
  secondaryCta: { href: '#language', label: 'Read the language rule' },
  wa: 'Hello Modern Age Coders, I am a pupil in Germany with a computer science idea for Jugend forscht and would like a free first class in English.',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; your research, your write-up, our teaching',
  spec: [
    ['Who', 'From Klasse 4 up to age 21'],
    ['Field', 'Mathematik/Informatik'],
    ['Contest language', 'German, by the organisers\' rule'],
    ['Our classes', 'In English: method and code'],
    ['Teachers', 'Mentors based in India'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Jugend forscht project mentoring at Modern Age Coders is live online teaching in English for pupils in Germany who are planning a maths or computer science project. We teach programming, research questions, fair experiments and honest reporting, and question the pupil\'s own plan; the pupil does the research, writes it up in German as the rules require, and registers. One mentor follows each pupil\'s pace and accent, one to one or in a group of fifteen to twenty.',

  picks: {
    eyebrow: 'Where research-minded pupils start',
    h2: 'Three courses behind a computer science research project',
    lede: 'Algorithms for a question in theoretical informatics, machine learning for a project with data, and Python for pupils who are still learning to program.',
    items: [
      { course: 'problem-solving-dsa-masterclass-teens', code: 'JFC / 01', title: 'Problem Solving for Teens', note: 'Ages 13 to 18. Logic, data structures and algorithms, the ground most Mathematik/Informatik projects stand on.' },
      { course: 'ai-ml-masterclass-teens', code: 'JFC / 02', title: 'AI and Machine Learning for Teens', note: 'Ages 13 to 18. For a project built on data and models, taught with baselines and honest tests from the first month.' },
      { course: 'python-complete-masterclass-teens', code: 'JFC / 03', title: 'Python for Teens', note: 'From the first line of code. Experiments like the one on this page need only plain Python and a careful plan.' }
    ]
  },

  sections: [
    {
      id: 'contest',
      eyebrow: 'The contest',
      h2: 'What is Jugend forscht, and who can take part?',
      lede: 'A competition of ideas: no tasks are set, and pupils choose their own question in one of seven fields. The Stiftung Jugend forscht runs more than 130 competitions across Germany every year, it says.',
      body: [
        { kind: 'table', numCols: [], caption: 'Jugend forscht: the two age groups', head: ['Age group', 'Who', 'How far it goes'], rows: [
          ['Jugend forscht junior', 'Up to 14 on 31 December of the registration year, and at least in Klasse 4', 'Regional, then Land level; no national final'],
          ['Jugend forscht', 'Ages 15 to 21', 'Regional, Land, then the national final in May']
        ] },
        { kind: 'source', html: 'Source: Stiftung Jugend forscht, Alterssparten and Jugend forscht junior pages (jugend-forscht.de), read on 3 November 2026. In a group, the age of the oldest member decides the category. In Mecklenburg-Vorpommern and the Saarland the junior category has regional contests only.' },
        { kind: 'two', mt: true,
          leftH3: 'Who may enter',
          left: [
            'Young people from Klasse 4 up to age 21 with their home and place of education in Germany. Pupils of German schools abroad and of schools near the German border may also take part, the conditions say, provided they have a sure command of German.',
            'A project is done alone or by a group of two or at most three. One person may enter up to three projects in a round.'
          ],
          rightH3: 'Supervisors',
          right: [
            'A Projektbetreuer, a supervising adult, is not required, the FAQ says, but many participants have one. Up to two can be named, and they register on the organisers\' supervisor portal. The organisers describe them as mainly STEM teachers, STEM professionals and trainers from institutions and companies, and say most projects are supervised by teachers.',
            'Supervisors and companions may not be present at the jury talk itself.'
          ] }
      ]
    },
    {
      id: 'round',
      tint: 'tint',
      eyebrow: '2026 to 2027',
      h2: 'What is the Jugend forscht timeline for the 2027 round?',
      lede: 'The organisers publish the yearly rhythm. For the round that ends in 2027, online registration closes on 30 November 2026.',
      body: [
        { kind: 'table', numCols: [], caption: 'The Jugend forscht year, as the organisers describe it, applied to 2026 to 2027', head: ['When', 'What happens'], rows: [
          ['August', 'Finding a topic and starting the project'],
          ['By 30 November 2026', 'Online registration at anmeldung.jugend-forscht.de, with a working title and a short overview'],
          ['By 31 December 2026', 'Participants are told which regional contest they will attend in February'],
          ['January 2027', 'The written work is uploaded as a PDF, by a date the regional leadership sets'],
          ['February 2027', 'Regional contests'],
          ['April 2027', 'Land contests of Jugend forscht junior'],
          ['May 2027', 'The 62nd national final, in Würzburg']
        ] },
        { kind: 'source', html: 'Sources: Stiftung Jugend forscht, Ablauf auf einen Blick, Einladung zum Wettbewerb, Teilnahmebedingungen and Bundeswettbewerb 2027 pages, read on 3 November 2026. The overview names April for the junior Land contests; for the main category, check your Land\'s contest page.' },
        { kind: 'p', mt: true, html: 'Read in November, the table is urgent. Registering needs only a provisional title and a short description, which may change before the written work is due. A pupil with an idea and a few weeks of real work behind it can register now and still shape the project over December and January. A pupil with no idea yet should not rush: the next round opens in the same way in 2027, and a strong question is worth a year.' }
      ]
    },
    {
      id: 'language',
      eyebrow: 'The language rule',
      h2: 'Can a Jugend forscht project be presented in English?',
      lede: 'No. This is the most important fact on the page for an English-speaking family, and the organisers state it without exceptions.',
      body: [
        { kind: 'two',
          leftH3: 'What the rule says',
          left: [
            'The Jugend forscht FAQ says German is binding for the written documentation, for the visual presentation at the stand and for the jury talk. Pupils from German schools abroad must have a sure command of German to take part.',
            'So a pupil who can explain their project only in English is not yet ready to enter, however strong the work.'
          ],
          rightH3: 'How we work with it',
          right: [
            'Our classes are in English only, and we do not teach in German. We help with the parts that do not depend on language: the question, the method, the code, the experiment, the figures and the honesty of the conclusions.',
            'The German text is the pupil\'s own. We do not write, translate or edit it. Many pupils at German schools write excellent German; for those at an international school, the honest advice is to check first that writing 15 pages and defending them in German is realistic.'
          ] },
        { kind: 'p', mt: true, html: 'This rule is a real difference from the Bundeswettbewerb Künstliche Intelligenz, which accepts projects in English, and from the Bundeswettbewerb Informatik, where the programming language is free. A pupil whose strongest language is English may find one of those a better first research contest, and can come to Jugend forscht later.' }
      ]
    },
    {
      id: 'field',
      tint: 'tint',
      eyebrow: 'Mathematik/Informatik',
      h2: 'What counts as a computer science project at Jugend forscht?',
      lede: 'A contribution to informatics itself. The organisers say the field takes only work that genuinely adds to mathematics or computer science, not work that simply uses known methods somewhere else.',
      body: [
        { kind: 'table', numCols: [], caption: 'Areas the organisers list for Mathematik/Informatik, and an example of a question of the right kind (examples ours)', head: ['Area named by the organisers', 'A question in the right spirit (ours)'], rows: [
          ['Theoretical informatics, including algorithms and complexity', 'How does the number of steps of a method grow, and can it be beaten?'],
          ['Discrete mathematics, including graph theory and combinatorics', 'How quickly does information spread through a network of a given shape?'],
          ['Applied mathematics, including stochastics and numerics', 'How accurate is a simulation, and how many runs does it need?'],
          ['Interactive and intelligent systems, image and language processing', 'Where exactly does a model fail, and why?'],
          ['Operating, communication, database and distributed systems', 'What breaks when many users act at once?']
        ] },
        { kind: 'source', html: 'Source: Stiftung Jugend forscht, Fachgebiet Mathematik/Informatik page, read on 3 November 2026. The organisers give an example of a project that belongs elsewhere: software to identify plant species, if the focus is on applying the identification key, belongs to Biologie.' },
        { kind: 'p', mt: true, html: 'In practice this rules out the most common first idea, an app that does something useful. An app can be part of a project, but the jury in this field will ask what new knowledge it produced. Our mentoring starts here: we help a pupil turn "I want to build X" into "I want to find out whether Y is true, and here is how I will test it". The organisers also say that a Besondere Lernleistung from the Oberstufe can be entered as a Jugend forscht project if it meets the rules for the written work.' }
      ]
    },
    {
      id: 'experiment',
      eyebrow: 'A lesson of our own',
      h2: 'How do you run a computer experiment a jury can trust?',
      lede: 'State the hypothesis before you run anything, repeat the experiment many times with a fixed seed, and report the typical result and the spread, never one lucky run. The question and code below are our own, written for this page.',
      body: [
        { kind: 'two',
          leftH3: 'The question (ours)',
          left: [
            'In a class, one pupil hears a piece of news. Each day, every pupil who knows it tells one name picked at random from the class list, who may already know. How many days until the whole class knows, and how does that change with class size?',
            '<strong>Hypothesis, written first:</strong> doubling the class roughly doubles the number of days.'
          ],
          rightH3: 'The fair design',
          right: [
            'One simulated run proves nothing, because chance decides who is told. So the program runs 1,000 classes of each size, with a seeded random generator so that anyone can repeat the exact experiment.',
            'It then reports the median, the typical value, and the range that holds the middle 90 percent of runs, the honest measure of how much the result varies.'
          ] },
        { kind: 'code', label: 'The experiment: 1,000 seeded runs per class size', lang: 'Python', code: RUMOUR, note: 'It prints <code>10 pupils: median 6.0 days, middle 90% 5 to 9</code>, <code>20 pupils: median 8.0 days, middle 90% 7 to 11</code>, <code>40 pupils: median 10.0 days, middle 90% 8 to 13</code> and <code>80 pupils: median 12.0 days, middle 90% 10 to 14</code>.' },
        { kind: 'table', mt: true, numCols: [0, 1, 2], caption: 'Days until everyone knows, over 1,000 simulated classes per size (our experiment)', head: ['Pupils in the class', 'Median days', 'Middle 90 percent of runs'], rows: [
          ['10', '6', '5 to 9'],
          ['20', '8', '7 to 11'],
          ['40', '10', '8 to 13'],
          ['80', '12', '10 to 14']
        ] },
        { kind: 'source', html: 'Simulation: our own model and code, seeded with random.Random(2027), run with Python 3 on 3 November 2026. The model is deliberately simple; real classes do not choose names at random.' },
        { kind: 'p', mt: true, html: 'The hypothesis is wrong, and that is the most useful outcome a young researcher can have. Doubling the class from 10 to 80 pupils, three doublings, adds about two days each time instead of doubling the time. The number of people who know grows faster and faster at first, roughly doubling each day, so a class twice as large needs only about one or two more days. A Jugend forscht write-up that states the wrong hypothesis, shows the data that refuted it, explains why, and names the limits of the model is a far stronger piece of science than one that shows a single run that happened to look impressive.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Repeat it.</strong> Run the code with a different seed. Which numbers change, and which stay the same? What does that tell you about 1,000 runs?',
          '<strong>Change one thing.</strong> Let each pupil tell two names a day. Predict the new medians before running it, and keep everything else fixed.',
          '<strong>Find the limit.</strong> Real pupils talk mostly to friends. How would you change the model to test that, and what data would you need?',
          '<strong>Write it up.</strong> In your own language first, then in the language of your contest, write the question, the hypothesis, the method and one honest sentence about what the model cannot show.'
        ] }
      ]
    },
    {
      id: 'written',
      tint: 'tint',
      eyebrow: 'The written work',
      h2: 'What must the Jugend forscht written work contain?',
      lede: 'A focused report of at most 15 A4 pages, uploaded as a PDF in January, that names every source and every helper.',
      body: [
        { kind: 'ol', items: [
          '<strong>Question and aim.</strong> What the project set out to find, and why.',
          '<strong>Materials and methods.</strong> For informatics: the algorithm, the program, the data and the experimental design.',
          '<strong>Experiments and results.</strong> What was run, and what came out, with figures that are needed for understanding.',
          '<strong>Evaluation and conclusions.</strong> What the results mean, and where they stop.',
          '<strong>Contents and sources.</strong> A table of contents and a list of references.',
          '<strong>Support declared.</strong> Every company, institution or person who helped, with a short note on what they did, also entered in a list when uploading.'
        ] },
        { kind: 'source', html: 'Source: Stiftung Jugend forscht, Schriftliche Arbeit page and Teilnahmebedingungen, read on 3 November 2026. The 15 pages include footnotes, tables, figures and images; the title page, overview, contents, sources and certain forms do not count. An appendix and web links in the main text are not allowed, apart from links to the pupil\'s own runnable programs.' },
        { kind: 'two', mt: true,
          leftH3: 'Our place in that list',
          left: [
            'If a pupil learned methods or programming from us during the project, that is support, and the rules ask for it to be named. We ask every pupil to list our classes, with a plain description of what we did.',
            'We are not connected with the Stiftung Jugend forscht, and we do not register pupils, act as the registered supervisor or submit anything.'
          ],
          rightH3: 'At the stand',
          right: [
            'The jury judges the written work, the stand and the talk, the organisers say, and each field has its own jury of experts from science, industry and schools. In the talk the pupil presents briefly and then answers questions alone.',
            'In class we practise exactly that: short explanations and hard questions, in English, so that the thinking is clear before the pupil rehearses it in German at school.'
          ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When can Jugend forscht mentoring run in German time?',
      lede: 'Afternoons and weekends, around school. Our mentors work from India, which is ahead of Germany.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example mentoring slots in Germany and India', head: ['Start in Germany', 'India, winter (to 27 March 2027)', 'India, summer (from 28 March 2027)'], rows: [
          ['15:50', '20:20', '19:20'],
          ['17:50', '22:20', '21:20'],
          ['Saturday 14:00', '18:30', '17:30'],
          ['Sunday 10:15', '14:45', '13:45']
        ] },
        { kind: 'source', html: 'Germany runs on UTC+1 in winter and UTC+2 in summer, as the Einheitenzeitgesetz provides; winter time began on 25 October 2026 and summer time resumes on 28 March 2027. India keeps UTC+5:30 the whole year, which is four and a half hours ahead of German winter time and three and a half ahead of summer time.' },
        { kind: 'p', mt: true, html: 'These are illustrations, not fixed batch times. Before the January deadline many one-to-one pupils meet weekly; after it, the focus moves to presentation practice for February.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'From an idea to a project ready for the jury',
    lede: 'Milestones we work through with research pupils; they show where a pupil stands and what comes next.',
    table: { caption: 'Research project milestones (ours)', head: ['Step', 'Typical point', 'The pupil has'], rows: [
      ['1. A question', 'Before registering', 'A question that can be answered with a program or a proof, written in one sentence'],
      ['2. A hypothesis', 'Week 1 to 2', 'A prediction stated before any experiment is run'],
      ['3. A fair test', 'Weeks 2 to 6', 'An experiment with repeats, fixed seeds and one change at a time'],
      ['4. Honest results', 'Weeks 6 to 10', 'Medians, spreads and the limits of the model, in tables and figures'],
      ['5. A defended project', 'Before the regional contest', 'A written work and a talk they can give and defend alone, in the contest\'s language']
    ] },
    left: { h3: 'For pupils', ps: [
      'Write the hypothesis down before you run anything. A prediction made afterwards is not a prediction.',
      'A refuted hypothesis is a result. Report it proudly and explain it.'
    ] },
    right: { h3: 'For parents', ps: [
      'Ask your child\'s school early who supervises Jugend forscht projects; most are supervised by teachers.',
      'Check the language question honestly. The written work, the stand and the talk are all in German.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for young researchers in Germany',
    lede: 'Taught live and in English, with the same mentor every time, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Junior researchers', sub: 'Ages 9 to 14', courses: [
        { code: 'JFC / JUNIOR / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'First programs and small experiments, 9 to 12.' },
        { code: 'JFC / JUNIOR / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Questions about numbers, tested in Python.' },
        { code: 'JFC / JUNIOR / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Patterns, logic and careful reasoning.' }
      ] },
      { num: 'II', h3: 'Methods', sub: 'Ages 14 and up', courses: [
        { code: 'JFC / METHOD / 01', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Medians, spread and fair comparison.' },
        { code: 'JFC / METHOD / 02', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'For questions in theoretical informatics.' },
        { code: 'JFC / METHOD / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Maths olympiad', blurb: 'Proof and discrete maths in depth.' }
      ] },
      { num: 'III', h3: 'Other routes', sub: 'Ages 13 and up', courses: [
        { code: 'JFC / ROUTE / 01', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'German informatics competitions', blurb: 'BWINF contests and a BWKI project track.' },
        { code: 'JFC / ROUTE / 02', slug: 'informatik-abitur-course-java-python', title: 'Informatik Abitur in English', blurb: 'For a Besondere Lernleistung in Informatik.' },
        { code: 'JFC / ROUTE / 03', slug: 'vibe-coding-for-teens-python-web-ai-projects-course', title: 'Vibe coding for teens', blurb: 'Building tools, with AI help checked by you.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How mentoring runs',
    h2: 'How live Jugend forscht mentoring works',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Afternoon', l: 'After school, German time, for weekly sessions.' },
      { time: 'Weekend', l: 'Saturday or Sunday, for longer work on experiments.' },
      { time: 'One to one', l: 'Most research pupils choose this, at times agreed together.' }
    ],
    cells: [
      { h3: 'Pupil\'s own research', p: 'The pupil chooses, runs and writes it.' },
      { h3: 'Method taught', p: 'Questions, hypotheses and fair tests.' },
      { h3: 'Code reviewed', p: 'Explained and questioned, never rewritten.' },
      { h3: 'German stays yours', p: 'We never write or edit the German text.' },
      { h3: 'Help declared', p: 'Our classes named as support in the write-up.' },
      { h3: 'Same mentor', p: 'One person across the whole project.' }
    ]
  },

  projectsH2: 'Projects built by our students',
  projectsLede: 'Our students make their own things; a few are shown here, and the <a class="ag-inline-link" href="/student-labs">student labs</a> list many more.',
  reviewsLede: 'Unaltered Google reviews from our students and the parents who enrolled them.',

  fees: {
    h2: 'Fees for research mentoring and classes',
    lede: 'A month of mentoring or classes is eight live sessions. The euro amount comes from converting at a European Central Bank reference rate; the money itself is taken in US dollars, and your bank does the converting, so the euro sum it shows can differ by a little.',
    free: ['A free first class', 'A conversation about your research question', 'No card needed'],
    group: ['Fifteen to twenty pupils of a similar level', 'One regular mentor', 'Two classes a week', 'Monthly, stop at any time'],
    one: ['One pupil, one mentor', 'Sessions shaped around your project', 'Times agreed together']
  },

  faq: {
    eyebrow: 'Pupils and parents ask',
    h2: 'Jugend forscht computer science mentoring: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Our classes and mentoring are live and in English only, with a mentor who matches the pupil\'s pace and accent. Jugend forscht itself requires German for the written work, the stand and the jury talk, and that part is the pupil\'s own.' },
      { q: 'Can my child present a Jugend forscht project in English?', a: 'No. The organisers state that German is binding for the written documentation, the visual presentation at the stand and the jury talk. The Bundeswettbewerb Künstliche Intelligenz, by contrast, accepts projects in English.' },
      { q: 'When is the registration deadline?', a: 'The organisers give 30 November for online registration, so for the round ending in 2027 it is 30 November 2026. The written work follows in January 2027, the regional contests in February 2027 and the national final in May 2027.' },
      { q: 'Will you write or check the German written work?', a: 'No. We do not write, translate or edit the German text. We teach the method and the programming in English and question the pupil\'s plan and results; the write-up is the pupil\'s own.' },
      { q: 'Do we have to mention your help?', a: 'Yes. The organisers require every supporter, company, institution or person, to be named in the written work with a short description of the help. A pupil who learned from us names our classes there.' },
      { q: 'Can you be the official project supervisor?', a: 'We do not register as Projektbetreuer. The organisers say a supervisor is not required, that up to two can be named, and that most projects are supervised by teachers, so we suggest asking the school first. We are not connected with the Stiftung Jugend forscht.' },
      { q: 'What kind of project fits Mathematik/Informatik?', a: 'Work that adds to mathematics or computer science itself, the organisers say, not just the use of known methods in another area. A question about how an algorithm behaves, with careful experiments or a proof, fits; a useful app on its own usually does not.' },
      { q: 'How old must my child be?', a: 'From Klasse 4 up to age 21. Those aged up to 14 on 31 December of the registration year compete in Jugend forscht junior, which has no national final; those aged 15 to 21 compete in Jugend forscht.' },
      { q: 'When are classes in German time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Research pupils mostly choose a weekly one-to-one slot.' },
      { q: 'What currency do we pay in?', a: 'Fees are shown in euro after conversion at a European Central Bank reference rate, and charged in US dollars, which your bank converts for you. The first class is free.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for young researchers in Germany.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Every Germany page, gathered in one place.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning in Germany', p: 'For projects built on data and models.' },
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'The statistics and proof a project needs.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Our German-language page on school Informatik.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What a live session looks like.' },
      { href: '/student-labs', label: 'Student labs', p: 'Work our students have built.' }
    ]
  },

  start: {
    h2: 'Book a free first class about your research idea',
    lede: 'Bring your idea, however rough. In the first class the mentor helps you turn it into a question that can be tested, checks what you already know, and suggests the next step, in English and at your pace.',
    readFirst: 'If you want more background first, see <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or <a class="ag-inline-link" href="/courses">the courses we offer</a>.',
    note: 'We teach live online, in English only, from India. The fastest way to ask us something is a WhatsApp message in English.',
    formNote: 'The first class is free and no card is needed.'
  },

  footer: {
    cols: [
      { h4: 'Research', links: [
        { href: '/courses/problem-solving-dsa-masterclass-teens', label: 'Problem solving for teens' },
        { href: '/courses/ai-ml-masterclass-teens', label: 'AI and machine learning for teens' },
        { href: '/courses/statistics-probability-maths-course', label: 'Statistics and probability' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths in English' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' }
      ] }
    ],
    bottomRight: 'Hypothesis first, then a thousand runs'
  },

  personalityCss: `
.ag-root.ag-jfc .ag-hero h1 { letter-spacing: -0.017em; }
.ag-root.ag-jfc .ag-capsule { border-left-width: 3px; }
.ag-root.ag-jfc .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-jfc .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-jfc .ag-grid-2 p { line-height: 1.68; }
`,

  dossier: {
    curriculumAuthority: 'Stiftung Jugend forscht e. V. (jugend-forscht.de: home, Ablauf auf einen Blick, Einladung zum Wettbewerb, Schriftliche Arbeit, Projektbetreuer finden, Thema finden, Präsentation und Bewertung, Alterssparten, Jugend forscht junior, Fachgebiet Mathematik/Informatik, FAQ answers, Teilnahmebedingungen, Bundeswettbewerb 2027); Einheitenzeitgesetz. Read 2 and 3 November 2026.',
    localProject: 'A fair computer experiment: an original question (how many days until news reaches a whole class when each informed pupil tells one random name a day), a hypothesis written first (doubling the class doubles the days), 1,000 seeded runs per class size of 10, 20, 40 and 80, with medians 6, 8, 10 and 12 days and middle-90-percent ranges reported; the hypothesis is refuted. Lesson family: design a fair experiment, hypothesis first, many seeded repeats, median and spread.',
    requiredMentions: ['10 pupils: median 6.0 days, middle 90% 5 to 9', '80 pupils: median 12.0 days, middle 90% 10 to 14', 'random.Random(2027)', 'German is binding for the written documentation', 'The German text is the pupil\'s own', 'The 62nd national final, in Würzburg', 'doubling the class roughly doubles the number of days', 'Hypothesis first, then a thousand runs'],
    sources: [
      { claim: 'More than 130 competitions a year, from Klasse 4 to age 21; nine in ten successful participants later study STEM.', url: 'https://www.jugend-forscht.de/' },
      { claim: 'Yearly timeline: registration by 30 November, written work in January, regional contests in February, final in May.', url: 'https://www.jugend-forscht.de/teilnahme/ablauf/ablauf-auf-einen-blick.html' },
      { claim: 'German binding for written work, stand and jury talk.', url: 'https://www.jugend-forscht.de/teilnahme/wichtige-infos/faq/welche-wettbewerbssprache-ist-zulaessig.html' },
      { claim: 'Groups of up to three, residence in Germany, up to three projects, 15 pages, supervisors absent from the jury talk.', url: 'https://www.jugend-forscht.de/teilnahme/wichtige-infos/teilnahmebedingungen.html' },
      { claim: 'Mathematik/Informatik takes only genuine contributions to the field; listed sub-areas.', url: 'https://www.jugend-forscht.de/teilnahme/fachgebiete/mathematikinformatik.html' },
      { claim: '62nd national final 2027 in Würzburg.', url: 'https://www.jugend-forscht.de/wettbewerbe/bundeswettbewerb-2027.html' }
    ],
    rejectedClaims: [
      'That a project can be presented in English: false; German is binding, and the page says so.',
      'That we write, translate, edit or submit any part of a project, or register as Projektbetreuer: we do not.',
      'The number of competitions: the home page says more than 130, the conditions more than 120; the home page figure is used with its source.',
      'Exact dates of the 2027 Land contests and the national final: not on the pages read; only months are given.',
      'Any affiliation with the Stiftung Jugend forscht: none.'
    ]
  }
};
