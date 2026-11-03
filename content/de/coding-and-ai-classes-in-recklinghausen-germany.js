'use strict';
// Coding and AI classes in Recklinghausen (ag- city page, Germany cluster P6 row DE194, tier-2 shape
// coding-and-ai-classes-in-<city>-germany: all ages). Owner 2026-11-02: classes are live, in English only, with mentors
// who match the learner's pace and accent; pages show euro, checkout charges USD.
// Spine: one city, every age. What a Recklinghausen learner of 7, 14 or 40 starts with, what NRW schools already
// teach (Informatik compulsory in grades 5 and 6), one local data project on public charging points, AI tool ages,
// and German class times against the mentor's clock in India.
// Sources (facts read raw, quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md, fetched
// 2 November 2026, unless stated):
//  - GI Informatik-Monitor 2026/27, NRW page: "An allen allgemeinbildenden Schularten wird das Pflichtfach Informatik in
//    den Jahrgangsstufen 5 und 6 unterrichtet." (fact 80); Q-phase GK three hours, LK five hours (fact 81); "Der Einsatz
//    eines Computers ist für die Bearbeitung der schriftlich Abituraufgaben nicht vorgesehen." (fact 82); NRW Gymnasien
//    G9 (fact 62). National: about 15 percent take Informatik in the Q-phase (fact 97).
//  - NRW ZP10 at the end of grade 10 in German, maths, English (fact 64); NRW 2027 written Abitur 13 April to 5 May 2027
//    (fact 42), maths LK and GK Wednesday 5 May 2027 (fact 44).
//  - KMK FER2026_27.pdf, NRW: "17.10. - 31.10. 23.12. - 06.01. -- 22.03. - 03.04. 18.05. 19.07. - 31.08." (fact 275).
//  - bwinf.de: Biberwochen 9 to 20 November 2026 (fact 133), grades 3 to 13, free (129, 130).
//  - BWKI conditions: projects in German or English (facts 208 to 213, as on the live AI page).
//  - Destatis GV-ISys 05-staedte.xlsx: Recklinghausen, Stadt 115,344 on 31.12.2024 (facts-geo/places.tsv).
//  - AI tool ages: content/ai-tool-age-audit.json (OpenAI 13 with a parent's permission under 18; Anthropic 18+).
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027 (facts-geo/timezone.tsv).
//  - Data: Bundesnetzagentur, Ladesäulenregister, file Ladesaeulenregister_BNetzA_2026-09-01.csv ("Letzte
//    Aktualisierung vom: 01.09.2026"), from https://www.bundesnetzagentur.de/DE/Fachthemen/ElektrizitaetundGas/
//    E-Mobilitaet/Ladesaeulenkarte/start.html, licence on that page: "Die Daten sind durch eine Creative Commons
//    Namensnennung 4.0 International Lizenz lizenziert", attribution "Bundesnetzagentur.de". Downloaded 3 November 2026,
//    55,559,083 bytes, header on line 11. We kept the 109 rows whose Ort is exactly "Recklinghausen" (all "In Betrieb",
//    all Kreis Recklinghausen) as recklinghausen_charging.csv. Raw copies in src-pages/<slug>/.
//  - Tried first: Stadt Recklinghausen's own datasets on opendata.ruhr (PKW_Dichte_Stadtteile_RE, Datenlizenz Deutschland
//    Zero 2.0): the host answered 500 and 502 on 3 November 2026 (four tries over an hour), so not used.
// Our own calculations (scratchpad de/w/T7/run/rec/v1.py + v2.py, python3 -I): 109 stations, 168 points; average of
// station averages 47.6 kW per point; total power over total points 56.2 kW per point; normal 74 stations, 94 points,
// 18.4 kW per point; fast 35 stations, 74 points, 104.4 kW per point. Commissioning years: 2023 46, 2025 22, 2024 18,
// 2022 10, 2021 8, 2018 2, 2026 2, 2019 1. Most common setup one point at 22 kW (45 stations).
// Lesson family: the average of averages is not the average; weight each part by how many it stands for.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'with open("recklinghausen_charging.csv", encoding="utf-8") as f:',
  '    sites = list(csv.DictReader(f))',
  '',
  'points = [int(s["points"]) for s in sites]',
  'power = [float(s["kw"]) for s in sites]',
  'print("Charging stations:", len(sites), " charging points:", sum(points))',
  '',
  '# average of the per-station shares: every station counts once',
  'per_point = [kw / n for kw, n in zip(power, points)]',
  'print("Average of station averages:", round(sum(per_point) / len(per_point), 1), "kW per point")',
  '',
  '# total power over total points: every charging point counts once',
  'print("Total power / total points:", round(sum(power) / sum(points), 1), "kW per point")'
].join('\n');

const V2 = [
  'groups = {}',
  'for s in sites:',
  '    g = groups.setdefault(s["kind"], [0, 0.0, 0])',
  '    g[0] += 1                      # stations',
  '    g[1] += float(s["kw"])         # power',
  '    g[2] += int(s["points"])       # points',
  'for kind, (n, kw, pts) in sorted(groups.items()):',
  '    print(kind, n, "stations,", pts, "points,", round(kw / pts, 1), "kW per point")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Recklinghausen: coding and AI' },
  slug: 'coding-and-ai-classes-in-recklinghausen-germany',
  code: 'rec',
  accent: '#745444',
  accentRationale: 'Coding and AI in Recklinghausen: a warm umber #745444, the colour of old Ruhr brick and pithead timber, kept apart from the Berlin brick red and the NRW teal; contrast 5.51 on the paper #FBF8F2 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-north-rhine-westphalia', name: 'North Rhine-Westphalia' }],
  routeLabel: 'Coding and AI classes in Recklinghausen',
  title: 'Coding and AI Classes in Recklinghausen, Live in English',
  description: 'Coding and AI classes in Recklinghausen for children, teens and adults: live online in English, what NRW schools teach, AI tool ages, and a local data project.',
  ogDescription: 'Live coding and AI lessons in English for every age in Recklinghausen, from a first Scratch game at seven to Python and machine learning for adults, with a project on the town\'s public charging points.',
  twitterDescription: 'Coding and AI for all ages in Recklinghausen, taught live in English, with a real local data project.',
  pageName: 'Coding and AI Classes in Recklinghausen',
  webPageDescription: 'A guide for families and adult learners in Recklinghausen to coding and artificial intelligence: where each age starts, what Informatik NRW schools teach and when, which AI tools each age may use, and an original Python project on the Bundesnetzagentur charging point register for Recklinghausen.',
  courseDescription: 'Live online coding and AI classes in English for learners in Recklinghausen from 6 to adult: Scratch and Python for children, Python, data and machine learning for teenagers, and applied Python and AI for adults, in a group of fifteen to twenty or one to one, with one regular mentor.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Recklinghausen',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#ages', label: 'Ages' },
    { href: '#project', label: 'Project' },
    { href: '#ai', label: 'AI' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Recklinghausen &middot; Coding and AI &middot; Every age',
  h1: 'Coding and AI classes in Recklinghausen',
  lede: 'In one Recklinghausen household the seven year old wants to make a game, the fourteen year old has heard that AI will change every job, and a parent wants to automate the spreadsheet that eats every Friday afternoon. All three can learn the same craft, at different depths. This page sets out where each age begins, what an NRW school already covers, which AI tools each age is allowed to use, and a small project on the town\'s own charging points that teaches a mistake even professionals make with averages.',
  secondaryCta: { href: '#project', label: 'See the charging point project' },
  wa: 'Hello Modern Age Coders, we live in Recklinghausen and would like a free first class in coding or AI, taught in English.',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students worldwide &middot; from first blocks to working models',
  spec: [
    ['Ages', '6 to 12, 13 to 18, and adults'],
    ['Children start with', 'Scratch, then typed Python'],
    ['Teens and adults start with', 'Python and real data'],
    ['German times', 'Afternoons, evenings and weekends'],
    ['Teachers', 'Mentors based in India'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders teaches coding and AI to Recklinghausen learners of every age, live over video and in English: Scratch then Python from age 6, data and machine learning for teenagers, and practical Python with AI services for adults. Each learner keeps one mentor, based in India, who adapts to their speed and way of speaking. You choose a class of fifteen to twenty or private lessons, after school, after work or at the weekend.',

  picks: {
    eyebrow: 'One starting point per age',
    h2: 'Three courses for learners in Recklinghausen',
    lede: 'A child, a teenager and an adult need different first steps. These are the three we suggest most often after a free first class.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'REC / 01', title: 'Python and AI for Kids', note: 'For 9 to 12. Children type real Python straight away, draw and play with it, then make little programs that learn from examples they give them.' },
      { course: 'ai-ml-masterclass-teens', code: 'REC / 02', title: 'AI and Machine Learning for Teens', note: 'For 13 to 18. Datasets, the statistics that models rest on, and enough Python that a teenager ends up training, checking and defending a model they made.' },
      { course: 'python-ai-automation-masterclass-college', code: 'REC / 03', title: 'Python Automation and Applied AI', note: 'For adults. Short programs that open files, tidy columns and hand text to AI services, until a dull Friday task runs on its own.' }
    ]
  },

  sections: [
    {
      id: 'ages',
      eyebrow: 'Every age',
      h2: 'Who are coding and AI classes in Recklinghausen for?',
      lede: 'For anyone from about six who wants to make a computer do something new, and is willing to think it through rather than copy an answer. The first steps differ by age; the habits we teach do not.',
      body: [
        { kind: 'table', numCols: [], caption: 'Where each age usually starts with us, and what the first months look like (our own plan)', head: ['Learner', 'First tool', 'First months', 'Where it leads'], rows: [
          ['6 to 8', 'Scratch blocks', 'Moving sprites, simple games, stories that react to a click', 'Loops and events without typing'],
          ['9 to 12', 'Python, typed', 'Turtle drawings, number games, a first look at how a program decides', 'Small AI projects, lists and real data'],
          ['13 to 18', 'Python and data', 'Reading files, cleaning them, first models checked against a simple guess', 'Machine learning, competitions, Informatik support'],
          ['Adults', 'Python and work data', 'Scripts for files and spreadsheets, then AI services called from code', 'Automation, data analysis, a new career path']
        ] },
        { kind: 'source', html: 'Our own placement plan. After the free first class the mentor may suggest a different starting point; a twelve year old who already codes can join teenagers, and an adult beginner can start as slowly as a child.' },
        { kind: 'two',
          leftH3: 'One craft, three depths',
          left: [
            'A seven year old learns that a computer follows instructions exactly, in order, and that a loop saves writing the same step twenty times. A teenager learns the same idea when a program reads ten thousand rows of data. An adult learns it again when a script renames four hundred files that used to take an afternoon.',
            'That is why one family can share the same mentor style without sharing a class. Each learner is grouped with people of a similar age and level.'
          ],
          rightH3: 'Thinking before typing',
          right: [
            'We teach learners to work out a problem before they ask any tool to solve it: what is the input, what should come out, how would you check the answer by hand? AI tools are part of the course for the ages that may use them, but a learner who cannot check an answer has not learned anything from it.',
            'Every learner on this page, from Scratch to machine learning, writes and runs their own code in class. The mentor guides; the learner drives.'
          ] }
      ]
    },
    {
      id: 'school',
      eyebrow: 'NRW schools',
      h2: 'What do schools in Recklinghausen teach about Informatik?',
      lede: 'More than many parents remember from their own school days, though not much of it after grade 6 unless a pupil chooses the subject. Recklinghausen schools follow the rules of North Rhine-Westphalia.',
      body: [
        { kind: 'two',
          leftH3: 'Compulsory in grades 5 and 6',
          left: [
            'The Gesellschaft für Informatik sums up the NRW rule in its Informatik-Monitor 2026/27: Informatik is a compulsory subject in grades 5 and 6 at every type of general school. So a Recklinghausen child meets the subject soon after leaving Grundschule, whichever secondary school they attend.',
            'From grade 7 on, Informatik is something a pupil opts into; at a G9 Gymnasium it can be picked as a Wahlpflicht subject in grades 9 and 10. In the Oberstufe it can be taken as a Grundkurs of three hours a week or a Leistungskurs of five hours in the Qualifikationsphase, where a school offers it.'
          ],
          rightH3: 'The exam is written on paper',
          right: [
            'The written Informatik Abitur in NRW is set centrally, and the same monitor notes that no computer is used to answer the written tasks. A pupil has to read, trace and write code by hand, which rewards understanding over trial and error at a keyboard.',
            'Across Germany only about 15 percent of pupils take Informatik in the Qualifikationsphase, the monitor estimates. Most young people in Recklinghausen will therefore leave school with two years of compulsory Informatik and no more.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Informatik and maths milestones for a Recklinghausen pupil, school year 2026/27', head: ['When', 'What happens', 'Where it comes from'], rows: [
          ['Grades 5 and 6', 'Informatik compulsory at every general school', 'NRW rule, Informatik-Monitor 2026/27'],
          ['End of grade 10', 'Zentrale Prüfungen 10 (ZP10) in German, maths and English', 'NRW Ministry for Schools'],
          ['Qualifikationsphase', 'Informatik optional: Grundkurs 3 hours, Leistungskurs 5 hours', 'NRW rule, Informatik-Monitor 2026/27'],
          ['13 April to 5 May 2027', 'Written Abitur main exams', 'NRW Abitur timetable 2027'],
          ['Wednesday 5 May 2027', 'Written Abitur in Mathematik, LK and GK', 'NRW Abitur timetable 2027']
        ] },
        { kind: 'source', html: 'Sources: Gesellschaft für Informatik, Informatik-Monitor 2026/27, North Rhine-Westphalia page and national summary; Ministerium für Schule und Bildung NRW, ZP10 and Abitur 2027 dates. Read on 2 November 2026. NRW Gymnasien follow the nine-year route (G9).' },
        { kind: 'p', mt: true, html: 'Our lessons sit beside school, not in place of it: marks and the Abitur come only from the school course. For pupils who take Informatik, our <a class="ag-inline-link" href="/courses/informatik-companion-course-klasse-5-10">Informatik companion course for Klasse 5 to 10</a> and the <a class="ag-inline-link" href="/courses/informatik-abitur-course-java-python">Informatik Abitur course in Java and Python</a> follow the same topics in English, with extra practice in tracing code on paper. The <a class="ag-inline-link" href="/coding-classes-in-north-rhine-westphalia">North Rhine-Westphalia page</a> covers the Land in more detail.' }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A Recklinghausen data project',
      h2: 'How powerful is a public charging point in Recklinghausen?',
      lede: 'The Bundesnetzagentur publishes a register of public charging stations for electric cars, free to reuse under a Creative Commons licence. We use the Recklinghausen rows to teach a trap that hides inside the word "average", and that matters just as much when an AI model is scored.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The register is called the Ladesäulenregister. The file we downloaded on 3 November 2026 is dated 1 September 2026 and lists every charging station whose operator has completed the Bundesnetzagentur\'s reporting process, so the true number in town can be higher. The first ten lines are notes; the column names only start on line 11.',
            'We kept the 109 stations whose place is given as Recklinghausen, all marked as in operation, and saved four columns from them as recklinghausen_charging.csv: the kind of station, the number of charging points, the rated power in kilowatts and the date it went into service.'
          ],
          rightH3: 'The question',
          right: [
            'A station can have one charging point or several. Its rated power is for the station as a whole, so we share it evenly across its points, an assumption we make for this exercise and say out loud.',
            'Then we ask: what is the average power of one charging point in Recklinghausen? There are two honest-looking ways to calculate it, and they give different answers. The task is to find out which one answers the question we asked.'
          ] },
        { kind: 'code', label: 'Version 1: two averages from the same file', lang: 'Python', code: V1, note: 'It prints <code>Charging stations: 109  charging points: 168</code>, then <code>Average of station averages: 47.6 kW per point</code> and <code>Total power / total points: 56.2 kW per point</code>.' },
        { kind: 'p', mt: true, html: 'The first number treats every station as one vote. A single-point station at 22 kilowatts counts exactly as much as a station with two fast points at 300 kilowatts. The second number treats every charging point as one vote, which is what the question asked for. The gap of almost nine kilowatts is not a rounding error: it appears because the big fast stations tend to have more points than the small ones, so giving each station one vote quietly shrinks them.' },
        { kind: 'code', label: 'Version 2: split by kind of station', lang: 'Python', code: V2, note: 'It prints <code>Normalladeeinrichtung 74 stations, 94 points, 18.4 kW per point</code> and <code>Schnellladeeinrichtung 35 stations, 74 points, 104.4 kW per point</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'Public charging in Recklinghausen by kind of station, register of 1 September 2026 (our calculation)', head: ['Kind of station', 'Stations', 'Charging points', 'kW per point'], rows: [
          ['Normal charging', '74', '94', '18.4'],
          ['Fast charging', '35', '74', '104.4'],
          ['All', '109', '168', '56.2']
        ] },
        { kind: 'source', html: 'Data: Bundesnetzagentur, Ladesäulenregister, file of 1 September 2026, rows with place Recklinghausen, licence CC BY 4.0, attribution Bundesnetzagentur.de; downloaded 3 November 2026. Sharing a station\'s power evenly across its points, and every figure in the table, are our own work.' },
        { kind: 'p', mt: true, html: 'Look at the last column. Fast stations are a third of the stations but deliver 104.4 kilowatts per point, more than five times the normal ones. More stations went into service in 2023 than in any other year, 46 of them, and the single most common setup is one point at 22 kilowatts, found at 45 stations. The overall 56.2 sits between the two kinds, pulled towards the fast ones because they carry 74 of the 168 points. That is the whole lesson in one line: an average of group averages is only right if every group is the same size, and here they are not.' },
        { kind: 'p', html: 'The same trap appears in machine learning, where it has a name. A model that sorts photos into classes can be scored by averaging its accuracy class by class, the macro average, or over every photo, the micro average. With uneven classes the two disagree, exactly as the stations did, and a report that does not say which one it used can make a weak model look strong.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Children, 9 to 12.</strong> Two classes take a quiz: one of 10 pupils averages 8 points, one of 30 averages 5. Is the average pupil score 6.5? Work it out with counters before using any code.',
          '<strong>Teenagers.</strong> Run both versions, then write a third that weights each station by its number of points and check it gives 56.2.',
          '<strong>Adults.</strong> Find an average in a report at work and ask what each row stands for. Recalculate it the other way and see if the story changes.',
          '<strong>Going further.</strong> Group the stations by the year they went into service and compute the power per point for each year. Which years pull the average up?'
        ] }
      ]
    },
    {
      id: 'ai',
      eyebrow: 'AI, safely and by age',
      h2: 'Which AI tools may a child, a teenager or an adult use?',
      lede: 'Each AI company writes an age limit into its terms of use. Because we teach six year olds and sixty year olds, we keep to those limits course by course.',
      body: [
        { kind: 'table', numCols: [], caption: 'Age limits written into each provider\'s terms, and what that means in our courses', head: ['Tool or approach', 'Age limit', 'In our classes'], rows: [
          ['Python and its libraries', 'None', 'Every age; the learner writes the code'],
          ['ChatGPT (OpenAI)', '13', 'From 13, and under 18 only with a parent\'s permission'],
          ['Claude (Anthropic)', '18', 'Adult courses only, never with under-18 learners']
        ] },
        { kind: 'source', html: 'Each limit is quoted from the company\'s terms, with a link and the date it was read, on our <a class="ag-inline-link" href="/ai-tools-age-guide">guide to AI tool ages</a>. Terms are revised now and then; we look again before a course starts.' },
        { kind: 'three', cells: [
          { h3: 'Children build, not chat', p: 'Children under 13 learn how AI works by making tiny models in Scratch and Python: a program that learns which answer goes with which example. They need no account anywhere, and they see that a machine only knows what its examples showed it.' },
          { h3: 'Teenagers train and test', p: 'Teenagers write models on real data and measure them honestly against a simple guess. Pupils who want a target can aim at the Bundeswettbewerb Künstliche Intelligenz, which accepts projects in German or in English. We are not connected with it.' },
          { h3: 'Adults put AI to work', p: 'Adults learn to call AI services from their own scripts and, from 18, to use coding agents such as Claude Code, always reviewing and testing what the tool wrote. The skill is judging the output, not typing the prompt.' }
        ] },
        { kind: 'p', mt: true, html: 'Younger children can also enter a free puzzle contest this month without writing any code: the Informatik-Biber runs from 9 to 20 November 2026 for grades 3 to 13 and is entered through the school. Our <a class="ag-inline-link" href="/informatik-biber-practice-in-english">Biber practice page</a> has original puzzles in the same spirit, and the <a class="ag-inline-link" href="/learn-to-think-not-copy-ai-germany">learn to think, not copy AI</a> page explains how we keep AI from doing a learner\'s thinking.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When do classes run in Recklinghausen time?',
      lede: 'Younger learners tend to log in once homework is done, teenagers around tea time or on Saturdays, adults once the working day is over. The mentor sits in India, where it is already evening.',
      body: [
        { kind: 'table', numCols: [], caption: 'Four example slots, read on both clocks', head: ['Recklinghausen', 'Mentor in India, to 27 March 2027', 'Mentor in India, after the clocks change'], rows: [
          ['16:15', '20:45', '19:45'],
          ['18:00', '22:30', '21:30'],
          ['Saturday 11:30', '16:00', '15:00'],
          ['Sunday 10:00', '14:30', '13:30']
        ] },
        { kind: 'source', html: 'German law (the Einheitenzeitgesetz) puts Recklinghausen on MEZ, one hour ahead of UTC, through the winter and on MESZ, two hours ahead, through the summer. The clocks went back on 25 October 2026 and go forward on 28 March 2027. India does not change its clocks (UTC+5:30), so the mentor is four and a half hours ahead now and three and a half from spring. The rows are examples only.' },
        { kind: 'table', mt: true, numCols: [], caption: 'NRW school holidays in the 2026/27 school year', head: ['Holiday', 'Dates'], rows: [
          ['Autumn (Herbstferien)', '17 to 31 October 2026'],
          ['Christmas', '23 December 2026 to 6 January 2027'],
          ['Easter (Osterferien)', '22 March to 3 April 2027'],
          ['Whitsun', '18 May 2027'],
          ['Summer', '19 July to 31 August 2027']
        ] },
        { kind: 'source', html: 'Source: Kultusministerkonferenz, Ferienregelung 2026/27 (FER2026_27.pdf), North Rhine-Westphalia row, dated 9 October 2025. Classes continue through school holidays; families who travel pause and pick up again.' },
        { kind: 'p', mt: true, html: 'The booking form shows times in your own clock, so nobody has to do the sums. Recklinghausen learners join from all over the town and from nearby Herten, Marl, Castrop-Rauxel, Datteln and Oer-Erkenschwick; the class is online, so only the internet connection has to reach.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What a learner can do at each stage',
    lede: 'Our own milestones, used across all ages to place a learner and to report progress in plain terms.',
    table: { caption: 'Five stages we use for every age (our own scale)', head: ['Stage', 'Usually reached', 'What the learner can do'], rows: [
      ['1. Instructions', 'Week 1', 'Give a computer steps in order and predict what it will do'],
      ['2. Repetition and choice', 'Month 1', 'Use loops and conditions to avoid repeating work'],
      ['3. Data', 'Months 2 to 4', 'Read a file, count and average it, and say what each row stands for'],
      ['4. Models', 'Months 4 to 8', 'Fit a simple model and test it against a plain guess'],
      ['5. Own project', 'Months 8 and up', 'Plan, build and explain a project, including its limits']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 3 is where the charging point project sits. A learner who asks what each row stands for will read every average in the news more carefully.',
      'We report what your child built and explained, not minutes spent at a screen.'
    ] },
    right: { h3: 'For adult learners', ps: [
      'Before you trust an average at work, ask whether every row was meant to count the same.',
      'An automation you understand line by line is worth more than a longer one you cannot fix.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for Recklinghausen learners',
    lede: 'Same format for each: taught live, in English, by a mentor who stays with the learner, as a class or as private lessons.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'REC / KIDS / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'From Scratch games to apps and a first taste of AI.' },
        { code: 'REC / KIDS / 02', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'How machines learn, with no adult chatbot accounts.' },
        { code: 'REC / KIDS / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Logic puzzles and step-by-step thinking, good before the Biber.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'REC / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The language behind almost every AI project.' },
        { code: 'REC / TEEN / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Open data, honest charts, a first trained model.' },
        { code: 'REC / TEEN / 03', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'Biber, BwInf and BWKI', blurb: 'Contest thinking from puzzles to an AI project.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Ages 18 and up', courses: [
        { code: 'REC / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python masterclass', blurb: 'For grown-ups who have never written a line.' },
        { code: 'REC / ADULT / 02', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Excel, SQL and Python for work data.' },
        { code: 'REC / ADULT / 03', slug: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', title: 'AI coding agents', blurb: 'Working with Codex and Claude Code, 18 and over.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live classes work for a Recklinghausen learner',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school', l: 'Late afternoons for children and teenagers in Recklinghausen.' },
      { time: 'After work', l: 'Early evenings for adults, on weekdays.' },
      { time: 'One to one', l: 'Any time agreed with the mentor, Saturdays and Sundays included.' }
    ],
    cells: [
      { h3: 'Same-age classes', p: 'A seven year old is never placed with a forty year old.' },
      { h3: 'Your own code', p: 'Every learner types and runs the program.' },
      { h3: 'Clear English', p: 'Mentors slow down and rephrase until it lands.' },
      { h3: 'One mentor', p: 'The same person every week, who knows your level.' },
      { h3: 'Age rules kept', p: 'Adult-only AI tools stay in adult classes.' },
      { h3: 'Class or solo', p: 'A class of fifteen to twenty, or private lessons.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'A few projects by our students around the world; the <a class="ag-inline-link" href="/student-labs">student labs</a> page collects many more.',
  reviewsLede: 'Reviews from students and parents, copied from Google as they were written.',

  fees: {
    h2: 'Fees for learners in Recklinghausen',
    lede: 'One monthly fee covers eight live classes. The euro figure you see is converted from our US dollar price with the ECB reference rate; the payment is then made in dollars, so your bank converts it and may book a slightly different amount.',
    free: ['A free first class', 'A short task at the right level for the age', 'No card asked for'],
    group: ['Fifteen to twenty learners of a similar age', 'One regular mentor', 'Two classes a week', 'Monthly, cancel any month'],
    one: ['One learner, one mentor', 'Your own pace and projects', 'Times you agree together']
  },

  faq: {
    eyebrow: 'Recklinghausen learners ask',
    h2: 'Coding and AI classes in Recklinghausen: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No, never. We teach only in English, live, and the mentor adjusts speed and pronunciation to the learner. Python and Scratch are built from English words anyway, so learners in Recklinghausen pick up the language of code and the language of the lesson together.' },
      { q: 'How young can a learner start?', a: 'Six. Children of 6 to 8 start with Scratch blocks, which need no typing, and most move to typed Python at about 9. There is no upper age limit for the adult courses.' },
      { q: 'Can a parent and a child both learn?', a: 'Yes, but in separate classes. Children, teenagers and adults are grouped by age and level, so each learns at the right depth. Families often book the free first classes on the same day.' },
      { q: 'Do schools in Recklinghausen teach coding already?', a: 'Yes, briefly. The Gesellschaft für Informatik reports that every general school in NRW has compulsory Informatik in grades 5 and 6. After that it is an elective, and only about 15 percent of pupils nationally take it in the Qualifikationsphase.' },
      { q: 'Will my child use ChatGPT in class?', a: 'Not under 13, because OpenAI sets 13 as its minimum age, and from 13 to 17 only with a parent\'s permission. Children learn how AI works by building small models in Python and Scratch, which needs no account.' },
      { q: 'When are classes in Recklinghausen time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Children usually come in the late afternoon and adults in the early evening.' },
      { q: 'Where are the teachers?', a: 'Our mentors are based in India and teach live over video. India is four and a half hours ahead of Recklinghausen in winter and three and a half in summer, which is why German afternoons and evenings suit both sides.' },
      { q: 'Which currency do I pay in?', a: 'The page shows euro, worked out from the ECB reference rate, while the card or bank payment is made in US dollars. Because your bank does the exchange, its figure may move by a few cents. Nothing is charged for the first class.' },
      { q: 'Can an adult with no experience learn AI?', a: 'Yes. The adult route starts with Python from the first line and moves to data and AI services once the basics are secure. Most adults begin with something from their own work, such as a spreadsheet they update every week.' },
      { q: 'What is the charging point project?', a: 'An exercise on the Bundesnetzagentur register of public charging stations, using the 109 Recklinghausen stations in the file of 1 September 2026. It shows why an average of station averages gives 47.6 kilowatts per point while the true figure is 56.2.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Recklinghausen learners and families.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'The national hub, with every city and Land.' },
      { href: '/coding-classes-in-north-rhine-westphalia', label: 'Coding classes in North Rhine-Westphalia', p: 'The NRW school rules in more depth.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning in Germany', p: 'Models built and tested, for 13 and up.' },
      { href: '/coding-classes-for-adults-germany', label: 'Coding for adults in Germany', p: 'For grown-ups learning their first language.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Age limits for the big AI tools, with quotes.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What a live class looks like.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us the learner\'s age and what they would like to make. The mentor sets a short task at that level, watches how they think, and suggests the course and group that fit, all in English.',
    readFirst: 'If you would like to read more first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> walks through a class, and <a class="ag-inline-link" href="/courses">all courses</a> lists every syllabus.',
    note: 'Classes are live online with mentors in India, taught in English only. WhatsApp, in English, is the quickest way to reach us.',
    formNote: 'Free, without a card and without any obligation.'
  },

  footer: {
    cols: [
      { h4: 'Coding and AI', links: [
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and ML in Germany' },
        { href: '/python-course-germany', label: 'Python course in Germany' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Nearby', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-north-rhine-westphalia', label: 'North Rhine-Westphalia' },
        { href: '/coding-classes-for-kids-cologne', label: 'Coding for kids in Cologne' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Ask what each row stands for'
  },

  personalityCss: `
.ag-root.ag-rec .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-rec .ag-capsule { border-left-width: 6px; }
.ag-root.ag-rec .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-rec .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-rec .ag-code-head b { letter-spacing: 0.015em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (NRW page and national summary); Ministerium für Schule und Bildung NRW (ZP10, Abitur 2027 dates); KMK Ferienregelung 2026/27; Bundesweite Informatikwettbewerbe (Biber 2026); BWKI conditions; providers\' terms via our AI tools age guide; Einheitenzeitgesetz; Destatis GV-ISys. Bundesnetzagentur, Ladesäulenregister of 1 September 2026, CC BY 4.0.',
    localProject: 'Charging points in Recklinghausen: an original Python project on the 109 Recklinghausen stations in the Bundesnetzagentur register of 1 September 2026 (168 points), where the average of station averages gives 47.6 kW per point but total power over total points gives 56.2, because fast stations (35, 104.4 kW per point) carry more points than normal ones (74, 18.4). Lesson family: the average of averages is not the average; weight each part by what it stands for.',
    requiredMentions: ['recklinghausen_charging.csv', 'Average of station averages: 47.6 kW per point', 'Total power / total points: 56.2 kW per point', 'Schnellladeeinrichtung 35 stations, 74 points, 104.4 kW per point', 'the macro average', 'Herten, Marl, Castrop-Rauxel, Datteln and Oer-Erkenschwick', '17 to 31 October 2026', 'Ask what each row stands for'],
    sources: [
      { claim: 'NRW Informatik compulsory in grades 5 and 6; GK 3 and LK 5 hours; no computer in the written Abitur.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/nordrhein-westfalen' },
      { claim: 'About 15 percent take Informatik in the Qualifikationsphase nationally.', url: 'https://informatik-monitor.de/' },
      { claim: 'NRW school holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Ladesäulenregister and its CC BY 4.0 licence.', url: 'https://www.bundesnetzagentur.de/DE/Fachthemen/ElektrizitaetundGas/E-Mobilitaet/Ladesaeulenkarte/start.html' },
      { claim: 'Informatik-Biber 2026 dates.', url: 'https://bwinf.de/biber/2026/' },
      { claim: 'AI tool minimum ages.', url: 'https://learn.modernagecoders.com/ai-tools-age-guide' }
    ],
    rejectedClaims: [
      'Stadt Recklinghausen car density by district (opendata.ruhr): the host returned 500 and 502 on 3 November 2026, so not used.',
      'Any claim that the register is complete: the Bundesnetzagentur says the true number is higher.',
      'Naming Recklinghausen schools or operators as partners: none, and no affiliation with the Bundesnetzagentur, BWINF, the BWKI or the city.',
      'German-language teaching: we teach in English only, and the page says so.'
    ]
  }
};
