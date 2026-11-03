'use strict';
// Maths and coding competitions in Germany, 2026/27 (ag- pillar, Germany cluster row DE008, hub group 'guide').
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md. Owner 2026-11-02: classes are live, in English only, with
// mentors who match the learner's pace and accent; pages show euro, checkout charges USD.
// Angle: the calendar pillar. The hub has a six-row table by competition; this page is organised three other ways:
// month by month through the school year (September 2026 to September 2027), by Klasse (3 to 13), and by skill
// (puzzles, algorithms, proofs, projects), with the entry route of each (teacher, coordinator, self, team).
// Sources (raw, all under ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/src/, quoted in FACTS.md 4a to 4c,
// fetched 2 Nov 2026):
//  - BWINF Biber (biber/, biber2026/, bwinf/, bwinf-termine/): free online quiz (129); grades 3 to 13, no prior
//    knowledge (130); "Grundschülerinnen und Grundschüler lösen neun Aufgaben in 30 Minuten, ... Klassen 5 und 6 ...
//    zwölf Aufgaben 35 Minuten ... ab Klasse 7 ... 15 Aufgaben in 40 Minuten" (132); Biberwochen 9 to 20 November 2026
//    (133); 20th Biber (134); Schnupper-Biber from 14 September 2026 (135); results December 2026, certificates January
//    2027 (136); over 580,000 in 2025 (137); "Zweier-Teams möglich"; "Für jede Institution ... muss (mindestens) eine/ein
//    Koordinator:in bestimmt werden. Informatikkenntnisse sind nicht erforderlich." (biber/98b82749.txt).
//  - Jugendwettbewerb Informatik (jwinf/, jwinf2026/): 2026 round 1 23 Feb to 8 Mar 2026 (139); round 2 17 April to
//    3 May, round 3 from 1 September with the Bundeswettbewerb (140); from grade 3 possible (141); Bronze Jg. 5/6 3 tasks
//    30 min, Silber 7/8/9 4 tasks 40 min, Gold from 10 6 tasks 60 min (142); round 3 deadline 23 November 2026 (143);
//    71,971 participants (144); "Jugendliche melden sich selbst an oder werden über eine Lehrkraft registriert.";
//    round 3 "die beiden Junioraufgaben des Bundeswettbewerbs, zu Hause mit eigenen Programmierwerkzeugen, allein oder im
//    Team aus bis zu vier Personen" and "Qualifiziert ist, wer im Gold-Level der 2. Runde mindestens eine Anerkennung
//    erreicht hat." (jwinf2026/500efa1f.txt).
//  - Bundeswettbewerb Informatik (bwinf-bw/): up to 21, not studying or working (145); round 1 1 Sept to 23 Nov 2026,
//    round 2 early 2027 to April 2027, round 3 September 2027 (146); round 1 group work, round 2 individual (147);
//    national winners into the Studienstiftung (148); round 2 can count as besondere Lernleistung, "hängt von
//    Bundesland und Schule ab" (149); 1,790 at the 43rd (150); "Aufgaben der 1. Runde ... ohne größere
//    Informatikkenntnisse gelöst werden".
//  - IOI (ioi-teilnehmen/, ioi2027/, ioi2026news/): team from the up to 20 top of the Bundeswettbewerb over three
//    Lehrgänge (151); at school in the last school year, not older than 20 on opening day (152); 39th IOI 12 to 19
//    September 2027, HPI Potsdam, second time after 1992 (153); pre-selection began 5 September with 72 (154); C++,
//    own contest system (155); two qualification contests in November (156); BOI 14 to 18 April 2027, Bergen (157);
//    45th Bundeswettbewerb is the entry into selection for IOI 2028 in Japan (160); KMK-supported (161).
//  - Mathematik-Olympiade (mo-bw/, moev/): about 200,000 a year (162); 5 to 7 three rounds, from 8 four (163);
//    primary since 2005 (164); Regionalrunde 11 November 2026 (165); Landesrunde 26 to 28 February 2027, Bundesrunde 30 May
//    to 2 June 2027 (166); Kaiserslautern (167); teams of up to 15 per Land from grade 8 (168); "Interessierte
//    Schülerinnen und Schüler wenden sich direkt an die Fachlehrerin oder den Fachlehrer ihrer Schule."
//  - Bundeswettbewerb Mathematik (bwm/): Hochschulreife track, three rounds, about 14 months (170); four problems per
//    home round, geometry, combinatorics, number theory, algebra (171); at least three correct for a prize (172); no AI
//    to solve or check (173); groups of at most three in round 1 (174); 2026 deadlines 2 March and 24 August 2026 (175,
//    176); tasks from 1 December (stated as 2025 for the 2026 run) (177); "registrierst du dich und deine Arbeit".
//  - IMO route (imo/): AIMO decides the six-person team (180); starts end of November or early December (181);
//    final seminar Oberwolfach (182).
//  - Känguru (kaenguru/): 8 April 2027 (183); registration 1 December 2026 to 31 January 2027 (184); over 920,000 from
//    more than 13,000 schools in 2026 (185); 75 minutes, 24 problems in 3/4 and 5/6, 30 in 7/8, 9/10, 11 to 13 (186);
//    usually the 3rd Thursday in March (187).
//  - Pangea (pangea-termine/, pangea-ablauf/): registration from 1 October 2026, closes 17 February 2027, Vorrunde 23 Feb
//    to 3 Mar 2027 (189); Zwischenrunde 21 to 22 April, final 12 June 2027 (190); 15 or 20 questions in 45 to 60
//    minutes, no calculators (191); top 500 per grade (192); registration "klassen- oder klassenstufenweise".
//  - Jugend forscht (jufo*): from grade 4 to 21 (194); junior up to 14 (195); no national final for junior (196);
//    register by 30 November (197); regional contests February (198).
//  - FIRST LEGO League (first-fll/, fll-wandel/, fll/): BIOGLOW 2026/27 final FIRST season (200, 202); LEGO League from
//    2027/28 (203); ages 5 to 16 (207); registration from 19 May 2026 (206); "Ob als Schulteam, Klassenverband, AG oder
//    private Gruppe".
//  - BWKI (bwki-tb/, bwki/): Tübingen AI Center (208); Sek I and II (209); documentation, code, video (211); up to 10
//    teams in the November final (212); German or English (213); 2026: project deadline 20 September 2026, final in
//    Tübingen 13 November 2026 (214); "Bei Teilnehmenden, die bei Anmeldung unter 18 Jahre alt sind, müssen die
//    Erziehungsberechtigten der Teilnahme am Wettbewerb zustimmen."
// Our own work (scratchpad de/w/G2/mcc/v1.py, v2.py, v3.py, python3 -I): v1 sorts twelve dates as German text and prints
// "01.12.2026 Känguru, registration opens" first and "08.04.2027 Känguru der Mathematik" second; v2 parses with
// strptime and prints "2026-11-09 Informatik-Biber, first day" first; v3 prints "Longest gap: 92 days, from 2027-06-12
// to 2027-09-12". Practice answers checked in Python: 3 adjacent swaps, 13 twos, 2030 = 404 + ... + 408, 2026 % 5 = 1.
// Lesson family: sort dates as dates, never as text.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  '# Competition dates for 2026/27, written the German way: day.month.year',
  'termine = [',
  '    ("Mathematik-Olympiade, Regionalrunde", "11.11.2026"),',
  '    ("Informatik-Biber, first day", "09.11.2026"),',
  '    ("Bundeswettbewerb Informatik, round 1 closes", "23.11.2026"),',
  '    ("Jugend forscht, registration closes", "30.11.2026"),',
  '    ("Känguru, registration opens", "01.12.2026"),',
  '    ("Känguru, registration closes", "31.01.2027"),',
  '    ("Pangea, preliminary round opens", "23.02.2027"),',
  '    ("Mathematik-Olympiade, Landesrunde", "26.02.2027"),',
  '    ("Känguru der Mathematik", "08.04.2027"),',
  '    ("Mathematik-Olympiade, Bundesrunde", "30.05.2027"),',
  '    ("Pangea, final", "12.06.2027"),',
  '    ("IOI 2027, Potsdam", "12.09.2027"),',
  ']',
  '',
  'for name, datum in sorted(termine, key=lambda t: t[1])[:4]:',
  '    print(datum, name)'
].join('\n');

const V2 = [
  'from datetime import datetime',
  '',
  'def als_datum(text):',
  '    return datetime.strptime(text, "%d.%m.%Y").date()',
  '',
  'for name, datum in sorted(termine, key=lambda t: als_datum(t[1]))[:4]:',
  '    print(datum, name)'
].join('\n');

const V3 = [
  'daten = sorted(als_datum(d) for _, d in termine)',
  'paare = zip(daten, daten[1:])',
  'a, b = max(paare, key=lambda p: (p[1] - p[0]).days)',
  'print("Longest gap:", (b - a).days, "days, from", a, "to", b)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'guide', label: 'Maths and coding competitions' },
  slug: 'math-and-coding-competitions-germany',
  code: 'mcc',
  accent: '#7A354D',
  accentRationale: 'Competitions calendar: a deep mulberry #7A354D, the colour of a winner\'s rosette rather than a school uniform, kept apart from the hub fir green, the Abitur slate and the Berlin brick; contrast on the paper #FBF8F2 above 7:1 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Maths and coding competitions in Germany',
  title: 'Maths and Coding Competitions in Germany: 2026/27 Calendar',
  description: 'Every maths, coding and AI competition for pupils in Germany in 2026/27, month by month and by Klasse, with entry routes and live preparation in English.',
  ogDescription: 'The Informatik-Biber, Jugendwettbewerb and Bundeswettbewerb Informatik, the IOI 2027 in Potsdam, the Mathematik-Olympiade, Känguru, Pangea, Bundeswettbewerb Mathematik, Jugend forscht, BWKI and FIRST LEGO League: dates, Klassen and how to enter.',
  twitterDescription: 'The 2026/27 competition year in Germany, month by month and Klasse by Klasse, with how each one is entered.',
  pageName: 'Maths and Coding Competitions in Germany',
  webPageDescription: 'A calendar of the maths, informatics, AI and research competitions open to pupils in Germany in the 2026/27 school year, organised by month, by Klasse and by skill, with each organiser\'s entry route, the paths to the IOI and IMO teams, an original Python project on sorting German dates and original practice problems.',
  courseDescription: 'Live online competition preparation in English for pupils in Germany: the Informatik-Biber, Jugendwettbewerb and Bundeswettbewerb Informatik, the Mathematik-Olympiade and Känguru, with original problems written by our mentors, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Competitions',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#calendar', label: 'Calendar' },
    { href: '#klasse', label: 'Klasse' },
    { href: '#skill', label: 'Skills' },
    { href: '#entry', label: 'Entry' },
    { href: '#practice', label: 'Practice' }
  ],
  eyebrow: 'Germany &middot; Competitions 2026/27 &middot; Klasse 3 to 13',
  h1: 'Maths and coding competitions in Germany',
  lede: 'A pupil in Germany who likes puzzles, numbers or code can enter something in almost every month of the school year. The difficulty is finding them: the competitions belong to different organisers, run on different calendars and are entered in different ways. This page puts all of them on one timeline for 2026/27, then sorts them by Klasse and by the skill they reward, and says who has to sign your child up.',
  secondaryCta: { href: '#calendar', label: 'See the calendar' },
  wa: 'Hello Modern Age Coders, my child is at school in Germany and wants to prepare for a maths or informatics competition. Could we book a free first class in English?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; original practice problems, never the organisers\' tasks',
  spec: [
    ['Competitions', 'Informatics, maths, AI, research'],
    ['Klassen', '3 to 13, some up to age 21'],
    ['Entry routes', 'School, self or team'],
    ['Peak months', 'November and February'],
    ['Our part', 'Live preparation in English'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Pupils in Germany can enter the Informatik-Biber (9 to 20 November 2026), the Jugendwettbewerb and Bundeswettbewerb Informatik, the Mathematik-Olympiade (Regionalrunde 11 November 2026), the Känguru der Mathematik (8 April 2027), Pangea, Jugend forscht and the BWKI. Modern Age Coders prepares them live online in English, in a group or one to one, through its German informatics competitions and Mathematik-Olympiade courses, with original problems only.',

  picks: {
    eyebrow: 'Preparation courses',
    h2: 'Three courses built around these competitions',
    lede: 'One for the informatics contests, one for the maths contests, and one for teenagers who want the programming depth that the later rounds and the olympiad selection expect.',
    items: [
      { course: 'german-informatics-competitions-course-biber-bwinf-bwki', code: 'MCC / 01', title: 'German informatics competitions', note: 'Ages 9 to 19. Biber-style logic first, then Python for the Jugendwettbewerb levels, then the longer algorithm problems of the Bundeswettbewerb and a machine-learning project of the kind the BWKI asks for.' },
      { course: 'mathematik-olympiade-and-kaenguru-training-course', code: 'MCC / 02', title: 'Mathematik-Olympiade and Känguru', note: 'Ages 8 to 18, grouped by Klassenstufe. Fast multiple choice for the Känguru morning and written, reasoned solutions for the Olympiade rounds.' },
      { course: 'competitive-programming-for-teens-course', code: 'MCC / 03', title: 'Competitive programming for teens', note: 'Ages 13 to 18. Complexity, greedy methods, graphs and dynamic programming, for pupils aiming at round 2 of the Bundeswettbewerb and beyond.' }
    ]
  },

  sections: [
    {
      id: 'calendar',
      eyebrow: 'The 2026/27 timeline',
      h2: 'What are the maths and coding competitions for pupils in Germany in 2026/27, month by month?',
      lede: 'Each date below is the one its organiser publishes. Where an organiser had not yet put its 2027 dates online when we read its pages on 2 November 2026, the row says so instead of guessing.',
      body: [
        { kind: 'table', numCols: [], caption: 'The competition year from September 2026 to September 2027, by month', head: ['Month', 'What happens', 'Competition'], rows: [
          ['September 2026', 'Round 1 opens on 1 September; the practice Biber opens on 14 September', 'Bundeswettbewerb Informatik; Informatik-Biber'],
          ['September 2026', 'Projects due 20 September 2026', 'Bundeswettbewerb Künstliche Intelligenz (BWKI)'],
          ['October 2026', 'Registration opens 1 October 2026', 'Pangea-Mathematikwettbewerb'],
          ['November 2026', 'Biberwochen 9 to 20 November', 'Informatik-Biber'],
          ['November 2026', 'Regionalrunde on 11 November', 'Mathematik-Olympiade'],
          ['November 2026', 'Final in Tübingen on 13 November', 'BWKI'],
          ['November 2026', 'Round 1 and Jugendwettbewerb round 3 close on 23 November', 'Bundeswettbewerb and Jugendwettbewerb Informatik'],
          ['November 2026', 'Online registration closes 30 November', 'Jugend forscht'],
          ['December 2026', 'Results published; registration opens 1 December', 'Informatik-Biber; Känguru der Mathematik'],
          ['January 2027', 'Certificates sent; registration closes 31 January', 'Informatik-Biber; Känguru der Mathematik'],
          ['February 2027', 'Landesrunde 26 to 28 February; regional contests', 'Mathematik-Olympiade; Jugend forscht'],
          ['February to March 2027', 'Preliminary round 23 February to 3 March', 'Pangea'],
          ['Early 2027 to April 2027', 'Round 2, solved alone at home', 'Bundeswettbewerb Informatik'],
          ['April 2027', 'Contest day 8 April; intermediate round 21 to 22 April', 'Känguru der Mathematik; Pangea'],
          ['May to June 2027', 'Bundesrunde 30 May to 2 June in Kaiserslautern; national final in May', 'Mathematik-Olympiade; Jugend forscht'],
          ['June 2027', 'Final on Saturday 12 June', 'Pangea'],
          ['September 2027', 'Round 3; the IOI in Potsdam from 12 to 19 September', 'Bundeswettbewerb Informatik; International Olympiad in Informatics']
        ] },
        { kind: 'source', html: 'Sources, all read on 2 November 2026: bwinf.de (Biber 2026, Termine, Jugendwettbewerb 2026, Bundeswettbewerb, Olympiade 2027); mathe-wettbewerbe.de (Mathematik-Olympiade); mathematik-olympiaden.de; mathe-kaenguru.de; pangea-wettbewerb.de (Termine); jugend-forscht.de (Ablauf auf einen Blick); bw-ki.de. The Jugendwettbewerb Informatik had not yet published its 2027 rounds; in 2026, round 1 ran from 23 February to 8 March 2026 and round 2 from 17 April to 3 May 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'Two crowded months',
          left: [
            'November 2026 holds five rows of the table, from the first Biber day to the Jugend forscht deadline. A pupil in Klasse 8 who enters the Biber, the Olympiade and the Bundeswettbewerb Informatik meets all three between Monday 9 and Monday 23 November. That is manageable only if the long Bundeswettbewerb tasks were started in September, when round 1 opened.',
            'February 2027 is the second peak: the Olympiade Landesrunde, the Pangea preliminary round and the regional Jugend forscht contests all fall within a few weeks of each other.'
          ],
          rightH3: 'One quiet stretch',
          right: [
            'Between the Pangea final on 12 June 2027 and the IOI opening on 12 September 2027 the national calendar is almost empty. Our own count in the project below makes it 92 days. For a pupil who wants to compete again in the autumn, the summer is the time to learn new material, not to sit contests.',
            'The Känguru moves in 2027. It is normally written on the third Thursday in March, but its organiser has put it on 8 April 2027: in 2027 that March Thursday would sit right on the eve of the Osterferien in nearly all Länder.'
          ] }
      ]
    },
    {
      id: 'klasse',
      eyebrow: 'By Klasse',
      h2: 'Which competitions can my child enter in each Klasse?',
      lede: 'Most competitions are open from Klasse 3, but they ask very different things of an eight year old and a seventeen year old. The organisers set their own bands, so the table follows them.',
      body: [
        { kind: 'table', numCols: [], caption: 'What each competition asks for, by Klasse, as the organisers describe it', head: ['Klasse', 'Informatics', 'Maths', 'Projects'], rows: [
          ['3 and 4', 'Biber: nine tasks in 30 minutes', 'Olympiade in three rounds; Känguru: 24 problems in 75 minutes; Pangea preliminary: 15 questions', 'Jugend forscht junior from Klasse 4; FIRST LEGO League from age 5'],
          ['5 and 6', 'Biber: twelve tasks in 35 minutes; Jugendwettbewerb Bronze: 3 tasks in 30 minutes', 'Olympiade in three rounds; Känguru: 24 problems; Pangea: 20 questions', 'Jugend forscht junior; FIRST LEGO League'],
          ['7 to 9', 'Biber: 15 tasks in 40 minutes; Jugendwettbewerb Silber: 4 tasks in 40 minutes', 'Olympiade in three rounds up to Klasse 7, four from Klasse 8; Känguru: 30 problems', 'Jugend forscht junior up to age 14; BWKI from Sekundarstufe I'],
          ['10 to 13', 'Biber; Jugendwettbewerb Gold: 6 tasks in 60 minutes; Bundeswettbewerb Informatik', 'Olympiade in four rounds; Känguru: 30 problems; Bundeswettbewerb Mathematik', 'Jugend forscht from age 15; BWKI in Sekundarstufe II'],
          ['After school', 'Bundeswettbewerb Informatik up to age 21, if not yet studying or working', 'None of the school contests', 'Jugend forscht up to age 21']
        ] },
        { kind: 'source', html: 'Sources: bwinf.de (Biber task counts per Klasse; Jugendwettbewerb levels, recommended Jahrgangsstufen; Bundeswettbewerb eligibility); mathe-wettbewerbe.de (Olympiade rounds by Klassenstufe; Bundeswettbewerb Mathematik for pupils who can reach the Hochschulreife); mathe-kaenguru.de (75 minutes, 24 or 30 problems by Klassenstufe); pangea-wettbewerb.de (Ablauf); jugend-forscht.de (Alterssparten); first-lego-league.org (ages 5 to 16); bw-ki.de (Teilnahmebedingungen). Read 2 November 2026.' },
        { kind: 'p', mt: true, html: 'The Jugendwettbewerb levels are recommendations, not rules. Since 2026 all three levels are open to everyone in round 1, so a strong pupil in Klasse 6 can try Silber, and a pupil in Klasse 10 who has never programmed can start with Bronze. Only Gold leads on: whoever earns at least an Anerkennung in Gold in round 2 is qualified for round 3, which is the two junior tasks of the Bundeswettbewerb.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Grundschule', p: 'The Biber and the Känguru are the natural first steps: one sitting, short tasks, no preparation required by the rules. The Olympiade for Klassen 3 and 4 has existed since 2005.' },
          { h3: 'Klasse 5 to 9', p: 'The years where typed code starts to pay: the Jugendwettbewerb asks for small programs, and the Olympiade starts to expect written reasons rather than bare answers.' },
          { h3: 'Oberstufe', p: 'The long competitions: the Bundeswettbewerbe in informatics and maths run for most of a year, and their national winners are admitted to the Studienstiftung des deutschen Volkes.' }
        ] }
      ]
    },
    {
      id: 'skill',
      eyebrow: 'By skill',
      h2: 'Which competition suits which kind of thinker?',
      lede: 'A list sorted by month tells you when. It does not tell you which contests your child will enjoy. These four families reward four different habits of mind.',
      body: [
        { kind: 'table', numCols: [], caption: 'The competitions of 2026/27 grouped by the skill they reward (our grouping)', head: ['Skill', 'Competitions', 'Format', 'Help allowed'], rows: [
          ['Quick logic, no code', 'Informatik-Biber; Känguru; Pangea', 'One timed sitting, multiple choice or short answers', 'Biber: alone or in pairs; Känguru: individual'],
          ['Algorithms and programs', 'Jugendwettbewerb Informatik; Bundeswettbewerb Informatik; IOI selection', 'Tasks solved over days or weeks with your own tools', 'Bundeswettbewerb round 1: groups welcome; round 2: alone'],
          ['Proof and written reasoning', 'Mathematik-Olympiade; Bundeswettbewerb Mathematik; AIMO', 'Home rounds and supervised papers with full solutions', 'BWM round 1: groups of up to three; no AI to solve or check'],
          ['Research and building', 'Jugend forscht; BWKI; FIRST LEGO League', 'A project, written up and presented', 'BWKI: teams of one to four; FLL: school or private teams']
        ] },
        { kind: 'source', html: 'Sources: bwinf.de (Biber, Bundeswettbewerb); mathe-kaenguru.de ("ein Einzelwettbewerb"); mathe-wettbewerbe.de (Bundeswettbewerb Mathematik rules on groups and on artificial intelligence); bw-ki.de (team size, documentation, runnable code and video pitch); first-lego-league.org (school teams, classes, clubs or private groups). The grouping into four skills is ours.' },
        { kind: 'two', mt: true,
          leftH3: 'Puzzlers and builders',
          left: [
            'A child who loves riddles but has never coded belongs in the first row. BWINF states that the Biber needs no prior knowledge. In our experience its tasks are about order, rules, patterns and information, the ideas underneath programming, told as small stories.',
            'A child who would rather make something than answer questions belongs in the last row. The BWKI asks for a working project that uses machine-learning methods, with written documentation, runnable code and a two to four minute video, and it accepts projects in German or in English.'
          ],
          rightH3: 'Coders and provers',
          right: [
            'The second and third rows are where weekly practice shows. Bundeswettbewerb Informatik round 1 can be solved without deep informatics knowledge, according to BWINF, but round 2 is clearly harder and must be done alone. The national selection for the IOI then trains in C++.',
            'The maths rows reward a different habit: writing down why. In each home round the Bundeswettbewerb Mathematik sets four problems, from geometry, combinatorics, number theory and algebra, and a pupil needs at least three correct solutions in round 1 for a prize and a place in round 2.'
          ] }
      ]
    },
    {
      id: 'entry',
      eyebrow: 'Entry routes',
      h2: 'How does a pupil enter: through the school, or on their own?',
      lede: 'This is the question families from abroad ask most, because in Germany it differs from one competition to the next. Some are run entirely through teachers, some accept a pupil who signs up alone, and some want a team.',
      body: [
        { kind: 'table', numCols: [], caption: 'Who registers whom, according to each organiser', head: ['Competition', 'Who signs up', 'What the organiser says'], rows: [
          ['Informatik-Biber', 'A coordinator at the school or learning place', 'Each institution names at least one coordinator; informatics knowledge is not required'],
          ['Jugendwettbewerb Informatik', 'The pupil, or a teacher for a group', 'Young people register themselves or through a teacher'],
          ['Bundeswettbewerb Informatik', 'The pupil, alone or in a group for round 1', 'Registration and submission through the BWINF login'],
          ['Mathematik-Olympiade', 'The school, through the Land\'s representative', 'Interested pupils go directly to their maths teacher'],
          ['Bundeswettbewerb Mathematik', 'The pupil', 'You register yourself and your work online, then post the solutions'],
          ['Känguru der Mathematik', 'Schools; the paper is written at school under supervision', 'Online registration from 1 December 2026 to 31 January 2027'],
          ['Pangea', 'Schools, by class or year group', 'Registration by class, by year group or by uploaded list, with a teacher account'],
          ['Jugend forscht', 'The pupil or team', 'Online registration by 30 November'],
          ['BWKI', 'The pupil or a team of up to four', 'Under 18, a parent must agree to the entry'],
          ['FIRST LEGO League', 'A team', 'School teams, classes, clubs or private groups']
        ] },
        { kind: 'source', html: 'Sources: bwinf.de (Biber Teilnehmen, Jugendwettbewerb Für wen, Bundeswettbewerb); mathe-wettbewerbe.de (Mathematik-Olympiade in weiterführenden Schulen; Bundeswettbewerb Mathematik); mathe-kaenguru.de; pangea-wettbewerb.de (Ablauf, Online-Anmeldung); jugend-forscht.de; bw-ki.de; first-lego-league.org. Read 2 November 2026. Rules change from year to year: the organiser\'s page is the one that counts.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ask the maths or computing teacher in September.</strong> The Olympiade school round starts with the school year, and the Biber coordinator registers from September. A teacher who knows a pupil is keen will often pass the first tasks on.',
          '<strong>If the school does not take part, look at the self-entry routes.</strong> The Jugendwettbewerb, the Bundeswettbewerb Informatik, the Bundeswettbewerb Mathematik, Jugend forscht and the BWKI can all be entered by the pupil, with a parent\'s agreement where the rules ask for it.',
          '<strong>Note the closing dates, not only the contest days.</strong> The Känguru closes registration on 31 January 2027 for a contest on 8 April 2027; Jugend forscht closes on 30 November for a contest in February.',
          '<strong>Keep the work the pupil\'s own.</strong> Group work is welcome in some rounds and forbidden in others, and the Bundeswettbewerb Mathematik excludes using artificial intelligence to solve the problems or to check a solution.'
        ] },
        { kind: 'p', mt: true, html: 'We are not connected with BWINF, the Mathematik-Olympiaden e.V., Mathematikwettbewerb Känguru e.V., Bildung &amp; Begabung, the Stiftung Jugend forscht, the Tübingen AI Center or any other organiser, and we cannot register anyone for a contest. We teach the thinking behind the tasks; the entry itself goes through the school or the organiser\'s own site.' }
      ]
    },
    {
      id: 'routes',
      tint: 'tint',
      eyebrow: 'Where it leads',
      h2: 'How do pupils in Germany reach the IOI or the IMO team?',
      lede: 'Two national ladders start inside these school competitions. Both take more than a year and both end in a team of only a handful of pupils, so for most families they matter as a direction of travel, not a target.',
      body: [
        { kind: 'two',
          leftH3: 'Informatics: to the IOI',
          left: [
            'BWINF has run the German selection for the International Olympiad in Informatics since 1989. The route goes through the Bundeswettbewerb Informatik: from its top 20 at most, three training camps pick the team that represents Germany at the IOI the following year.',
            'The 39th IOI takes place from 12 to 19 September 2027 at the Hasso-Plattner-Institut in Potsdam, Germany\'s first time as host since 1992. Its pre-selection began on 5 September 2026 with 72 pupils, trains online on Saturdays in C++, and two qualification contests in November decide who is invited to the camps. The 45th Bundeswettbewerb, which opened on 1 September 2026, is already the entry into the selection for the IOI 2028 in Japan.'
          ],
          rightH3: 'Maths: to the IMO',
          right: [
            'The six-person German team for the International Mathematical Olympiad is chosen in a selection competition called the AIMO. It invites the strongest pupils from the Olympiade Bundesrunde, from round 2 of the Bundeswettbewerb Mathematik and from the maths winners of Jugend forscht at Land level.',
            'The AIMO begins each year at the end of November or the start of December with two papers. The top 16 then attend five preparation seminars from February to May, and the final seminar is held at the Mathematisches Forschungsinstitut Oberwolfach in the Black Forest.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Eligibility and recognition along the two ladders', head: ['Rule', 'What the organiser says'], rows: [
          ['IOI age limit', 'At school in the last school year before the IOI, and not older than 20 on the opening day'],
          ['Bundeswettbewerb Informatik', 'Up to age 21, if not yet at university or in work'],
          ['Studienstiftung', 'National winners of the Bundeswettbewerb Informatik, and of the Bundeswettbewerb Mathematik when they start university'],
          ['Abitur', 'Bundeswettbewerb Informatik round 2 can count as the besondere Lernleistung; whether it does depends on the Land and the school'],
          ['Baltic Olympiad in Informatics', 'The 33rd BOI runs from 14 to 18 April 2027 in Bergen, Norway']
        ] },
        { kind: 'source', html: 'Sources: bwinf.de (Olympiade teilnehmen; Olympiade 2027; news item on the IOI 2026, where all four German team members won medals); mathe-wettbewerbe.de (IMO page; Bundeswettbewerb Mathematik). Read 2 November 2026.' }
      ]
    },
    {
      id: 'project',
      eyebrow: 'A calendar project',
      h2: 'Why does a computer sort German dates in the wrong order?',
      lede: 'Our students build this calendar themselves, in Python, from the dates in the first table. The first attempt looks finished and is wrong in a way that every programmer in Germany meets sooner or later.',
      body: [
        { kind: 'two',
          leftH3: 'The plan',
          left: [
            'German organisers write dates as day, month, year with dots: 11.11.2026, 08.04.2027. Students type twelve of them into a list of pairs, a name and a date, and ask Python to sort the list so the earliest event comes first.',
            'Sorting is one line in Python, which is exactly why it is tempting not to think about what is being sorted.'
          ],
          rightH3: 'The trap',
          right: [
            'A date written as text is just a string of characters. Python compares two strings one character at a time from the left, so for German dates it compares the day first, then the month, and the year last of all.',
            'Any date on the first of a month therefore sorts before any date on the eighth, whatever the month or the year.'
          ] },
        { kind: 'code', label: 'Version 1: sort the dates as text', lang: 'Python', code: V1, note: 'It prints <code>01.12.2026 Känguru, registration opens</code>, then <code>08.04.2027 Känguru der Mathematik</code>, then <code>09.11.2026 Informatik-Biber, first day</code> and <code>11.11.2026 Mathematik-Olympiade, Regionalrunde</code>.' },
        { kind: 'p', mt: true, html: 'An April 2027 contest has jumped ahead of the November 2026 Biber. Nothing crashed and no error appeared, which makes this kind of bug dangerous: the output has the right shape and the wrong order. The fix is to stop sorting text and sort dates. Python\'s <code>strptime</code> reads the German pattern, day, dot, month, dot, four-digit year, and turns each string into a real date that knows which year it belongs to.' },
        { kind: 'code', label: 'Version 2: sort the dates as dates', lang: 'Python', code: V2, note: 'Now it prints <code>2026-11-09 Informatik-Biber, first day</code>, then <code>2026-11-11 Mathematik-Olympiade, Regionalrunde</code>, <code>2026-11-23 Bundeswettbewerb Informatik, round 1 closes</code> and <code>2026-11-30 Jugend forscht, registration closes</code>.' },
        { kind: 'code', label: 'Going further: find the longest gap', lang: 'Python', code: V3, note: 'It prints <code>Longest gap: 92 days, from 2027-06-12 to 2027-09-12</code>: from the Pangea final to the opening of the IOI in Potsdam.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 8 to 10, on paper.</strong> Write the twelve dates on cards, shuffle them, and sort them by hand. Then sort them again reading only the first two digits. Which cards move?',
          '<strong>Ages 10 to 13, Python.</strong> Run Version 1 and explain, in one sentence, why 01.12.2026 comes first. Then change the dates to the year-month-day form 2026-12-01 and sort them as text. Why does that order come out right?',
          '<strong>Ages 13 and up.</strong> Add the closing date of every registration to the list and print, for a date you type in, the next three deadlines. Test it with 1 December 2026, a day on which one window opens.'
        ] },
        { kind: 'source', html: 'The program, its output and the gap of 92 days are our own work, run with Python 3 on 3 November 2026. The dates come from the organisers named in the first table.' }
      ]
    },
    {
      id: 'practice',
      eyebrow: 'Practice',
      h2: 'What do competition problems feel like? Three of ours, with answers',
      lede: 'We never reproduce an organiser\'s tasks. BWINF, the Olympiade and the Känguru publish their own past problems for free on their websites, and pupils should use them. These three are written by our mentors in the same spirit.',
      body: [
        { kind: 'two',
          leftH3: '1. Logic without code (Klasse 3 to 6)',
          left: [
            '<strong>Problem.</strong> Five logs lie in a row with the numbers 3, 1, 2, 5, 4. A beaver may only swap two logs that lie next to each other. What is the smallest number of swaps that puts the logs in the order 1, 2, 3, 4, 5?',
            '<strong>Answer.</strong> 3. Count the pairs that are the wrong way round: 3 before 1, 3 before 2, 5 before 4. Each swap of neighbours fixes exactly one such pair, so three swaps are needed, and three are enough.',
            '<strong>The idea underneath.</strong> Counting what is out of order tells you how much work a sort must do. That is the beginning of algorithm analysis, at eight years old.'
          ],
          rightH3: '2. Quick maths (Klasse 5 and 6)',
          right: [
            '<strong>Problem.</strong> Lena writes every whole number from 1 to 30. How many times does she write the digit 2? (A) 3 (B) 11 (C) 12 (D) 13 (E) 14',
            '<strong>Answer.</strong> (D) 13. In the ones place: 2, 12 and 22, three times. In the tens place: 20 to 29, ten times. The 22 has been counted once in each place, which is right, because it contains two digits 2.',
            '<strong>The trap.</strong> Pupils who count numbers that contain a 2 get 12. The question asks for digits.'
          ] },
        { kind: 'p', mt: true, html: '<strong>3. A first proof (Klasse 7 and 8).</strong> <em>Problem:</em> show that the sum of any five whole numbers in a row is divisible by 5, and decide whether 2026 and 2030 can be written as such a sum. <em>Solution:</em> call the middle number n. The five numbers are n &minus; 2, n &minus; 1, n, n + 1 and n + 2, and the twos and ones cancel, so the sum is 5n, always a multiple of 5. Since 2030 = 5 &middot; 406, it is 404 + 405 + 406 + 407 + 408. And 2026 leaves remainder 1 when divided by 5, so it can never be written this way. <em>What earns the marks:</em> an Olympiade answer of "2030 yes, 2026 no" with no reason scores little. The sentence about 5n is the solution.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Taught in English', p: 'Every class is live and in English. The German competition words, Aufgabe, Lösung, Begründung, are taught alongside.' },
          { h3: 'At your pace', p: 'The mentor matches the pupil\'s speed and accent, and slows down for the step that did not land.' },
          { h3: 'Reasons, not answers', p: 'Pupils explain each solution aloud before writing it. Copying an answer, from a book or from an AI tool, teaches nothing for the contest day.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'A season plan',
    h2: 'How we plan a competition year with a pupil',
    lede: 'Our own plan for 2026/27, adjusted to each pupil\'s Klasse and to the contests their school takes part in.',
    table: { caption: 'A competition season, September 2026 to June 2027 (ours)', head: ['Months', 'Focus', 'Contests in view'], rows: [
      ['September and October', 'Start the long tasks early; practise short logic sets', 'Bundeswettbewerb round 1; Biber practice'],
      ['November', 'Timed sittings, one contest at a time', 'Biber, Olympiade Regionalrunde, closing dates'],
      ['December and January', 'Written proofs; register for spring contests', 'Känguru and Pangea registration'],
      ['February and March', 'Mixed papers under time limits', 'Olympiade Landesrunde, Pangea preliminary'],
      ['April to June', 'Speed for the Känguru; depth for later rounds', 'Känguru on 8 April 2027, Pangea rounds']
    ] },
    left: { h3: 'For parents', ps: [
      'We send a short note after each month: which problem types your child now solves without help, and which ones still stall.',
      'We never promise a prize. Our measure is whether your child can explain a solution they could not have found in September.'
    ] },
    right: { h3: 'For pupils', ps: [
      'Before you sort anything, ask what you are sorting: numbers, words or dates.',
      'Write the reason under every answer, even in a multiple-choice contest. It is the habit that the later rounds reward.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for young competitors in Germany',
    lede: 'All nine are taught live in English by a regular mentor, to a group or to a single pupil.',
    bands: [
      { num: 'I', h3: 'First contests', sub: 'Ages 6 to 11', courses: [
        { code: 'MCC / FIRST / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking for kids', blurb: 'Patterns, rules and logic, the stuff of Biber tasks.' },
        { code: 'MCC / FIRST / 02', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Block programs that turn puzzles into games.' },
        { code: 'MCC / FIRST / 03', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Number sense for a 75-minute paper without a calculator.' }
      ] },
      { num: 'II', h3: 'Maths contests', sub: 'Ages 10 to 18', courses: [
        { code: 'MCC / MATHS / 01', slug: 'middle-school-math-competitions-course', title: 'Middle school contest maths', blurb: 'Kangaroo-style problems and early proofs.' },
        { code: 'MCC / MATHS / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad maths', blurb: 'Number theory, combinatorics, geometry, algebra.' },
        { code: 'MCC / MATHS / 03', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school maths', blurb: 'Secure foundations before the harder rounds.' }
      ] },
      { num: 'III', h3: 'Code and AI', sub: 'Ages 12 to 19', courses: [
        { code: 'MCC / CODE / 01', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'The language of the olympiad selection.' },
        { code: 'MCC / CODE / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms for teens', blurb: 'Data structures for the longer informatics tasks.' },
        { code: 'MCC / CODE / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Python models of the kind a BWKI project needs.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live competition preparation works',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. In a group, pupils of a similar Klasse work on the same problem set; one to one, the plan follows the contests the pupil has chosen.',
    slots: [
      { time: 'After school', l: 'Late afternoons in German time, once homework is done.' },
      { time: 'Weekend', l: 'Saturday or Sunday mornings for longer timed papers.' },
      { time: 'Before a contest', l: 'Extra one-to-one sessions in the last weeks.' }
    ],
    cells: [
      { h3: 'Original problems', p: 'Written by our mentors, never copied from an organiser.' },
      { h3: 'Timed and untimed', p: 'Speed for the Känguru, patience for the Bundeswettbewerb.' },
      { h3: 'Solutions explained', p: 'Every answer comes with its reason, in English.' },
      { h3: 'Grouped by Klasse', p: 'Pupils work with others at a similar stage.' },
      { h3: 'Same mentor', p: 'One person all season, who knows the pupil\'s habits.' },
      { h3: 'Monthly notes', p: 'What is solid, what still slips, what comes next.' }
    ]
  },

  projectsH2: 'What our students build between contests',
  projectsLede: 'Competition practice and real projects grow the same skills. Some student work is below; more is on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews from families, copied word for word.',

  fees: {
    h2: 'Fees for competition preparation in Germany',
    lede: 'A monthly fee covers eight live classes. The amounts appear in euro, worked out from the European Central Bank reference rate, while the payment itself is made in US dollars; your bank does the conversion, so the figure on your statement may be a little different.',
    free: ['A free first class with a few of our own problems', 'A conversation about which contests suit your child', 'No card needed'],
    group: ['Fifteen to twenty pupils of a similar Klasse', 'One regular mentor all season', 'Two live classes a week', 'Monthly, stop in any month'],
    one: ['Your child and one mentor', 'A plan built around chosen contests', 'Extra sessions before contest days']
  },

  faq: {
    eyebrow: 'Families ask',
    h2: 'Maths and coding competitions in Germany: common questions',
    items: [
      { q: 'Which coding competitions can pupils in Germany enter?', a: 'The Informatik-Biber for Klassen 3 to 13 (9 to 20 November 2026), the Jugendwettbewerb Informatik with its Bronze, Silber and Gold levels, and the Bundeswettbewerb Informatik for young people up to 21, whose round 1 runs from 1 September to 23 November 2026. Its top entrants go on to the selection for the IOI.' },
      { q: 'Which maths competitions are there in Germany?', a: 'The Mathematik-Olympiade (Regionalrunde 11 November 2026, Bundesrunde 30 May to 2 June 2027), the Känguru der Mathematik on 8 April 2027, the Pangea competition with its final on 12 June 2027, and the Bundeswettbewerb Mathematik for pupils on the way to the Hochschulreife.' },
      { q: 'Do these competitions cost money?', a: 'The Informatik-Biber is free, according to its organiser BWINF, whose competitions are supported by the Kultusministerkonferenz. Other organisers set their own terms, so check each organiser\'s page for its own rules. Our preparation classes are a separate, paid service, with a free first class.' },
      { q: 'Can my child enter without the school?', a: 'For some, yes. The Jugendwettbewerb Informatik, the Bundeswettbewerb Informatik and the Bundeswettbewerb Mathematik accept pupils who register themselves, and Jugend forscht and the BWKI take individual or team entries. The Biber, the Olympiade, the Känguru and Pangea are organised through schools.' },
      { q: 'Are the classes in German?', a: 'No. Every class is live and taught in English only, by a mentor who matches your child\'s pace and accent. We teach the German words that appear in the tasks, so a pupil knows what Aufgabe, Lösung or Begründung asks of them.' },
      { q: 'When is the Känguru der Mathematik in 2027?', a: 'On Thursday 8 April 2027. It is normally held on the third Thursday in March, but in 2027 that Thursday comes directly before the Osterferien in nearly all Länder, so the organiser moved it. Schools register online from 1 December 2026 to 31 January 2027.' },
      { q: 'Where is the IOI 2027?', a: 'At the Hasso-Plattner-Institut in Potsdam, from 12 to 19 September 2027. It is the 39th International Olympiad in Informatics, and Germany last hosted the event in 1992. BWINF organises it with the HPI and runs the German team selection.' },
      { q: 'Is AI allowed in these competitions?', a: 'It depends on the competition. The Bundeswettbewerb Mathematik excludes using artificial intelligence to solve the problems or to check a solution, while the BWKI is itself an AI competition that requires machine-learning methods. Read the rules of each round. In our classes, pupils solve problems themselves.' },
      { q: 'When are classes held in Germany?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Most pupils come in the late afternoon in German time or on a weekend morning.' },
      { q: 'Do you use the official competition tasks?', a: 'No. Our mentors write original problems in the same style. Past tasks are published for free by the organisers themselves, and we point pupils to those archives so they practise on the real thing at home.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More reading for competitors and their families in Germany.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Our main page for families in Germany.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Informatik help in English, explained in German.' },
      { href: '/ioi-olympiad-informatics-training', label: 'IOI training', p: 'Our page on olympiad informatics.' },
      { href: '/bebras-challenge-practice', label: 'Bebras practice', p: 'The international family the Biber belongs to.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI classes in Germany', p: 'For pupils thinking about a BWKI project.' },
      { href: '/courses/german-informatics-competitions-course-biber-bwinf-bwki', label: 'Competitions course', p: 'The full syllabus, Biber to BWKI.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'In the first class the mentor gives your child two or three of our own problems at their Klasse, watches how they approach them, and then suggests which contests to aim for this year and whether a group or one-to-one plan fits.',
    readFirst: 'If you would like to look first, the <a class="ag-inline-link" href="/courses/mathematik-olympiade-and-kaenguru-training-course">Olympiade and Känguru syllabus</a> and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explain what happens in class.',
    note: 'Live online classes in English, with mentors based in India. WhatsApp reaches us fastest.',
    formNote: 'The first class is free, with no card and no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Competitions', links: [
        { href: '/courses/german-informatics-competitions-course-biber-bwinf-bwki', label: 'Informatics competitions course' },
        { href: '/courses/mathematik-olympiade-and-kaenguru-training-course', label: 'Olympiade and Känguru course' },
        { href: '/ioi-olympiad-informatics-training', label: 'IOI training' },
        { href: '/bebras-challenge-practice', label: 'Bebras practice' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths in English' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids in Berlin' }
      ] }
    ],
    bottomRight: 'Sort dates as dates'
  },

  personalityCss: `
.ag-root.ag-mcc .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-mcc .ag-capsule { border-left-width: 5px; }
.ag-root.ag-mcc .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-mcc .ag-table caption { text-align: left; font-variant-numeric: tabular-nums; }
.ag-root.ag-mcc .ag-steps li { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'Bundesweite Informatikwettbewerbe (Biber, Jugendwettbewerb, Bundeswettbewerb, IOI selection); Bildung & Begabung (Mathematik-Olympiade, Bundeswettbewerb Mathematik, IMO selection); Mathematik-Olympiaden e.V.; Mathematikwettbewerb Känguru e.V.; Pangea-Mathematikwettbewerb; Stiftung Jugend forscht; Tübingen AI Center (BWKI); HANDS on TECHNOLOGY and FIRST (FIRST LEGO League). All read 2 November 2026. Practice problems and the Python project our own.',
    localProject: 'Sort dates as dates: an original Python project that sorts twelve 2026/27 competition dates written as German text (DD.MM.YYYY) and puts 01.12.2026 and 08.04.2027 ahead of 09.11.2026, then fixes it with strptime and finds the longest quiet stretch, 92 days from 12 June to 12 September 2027; plus three original practice problems (3 adjacent swaps, 13 digits, 2030 as five consecutive numbers). Lesson family: sort dates as dates, never as text.',
    requiredMentions: ['Longest gap: 92 days, from 2027-06-12 to 2027-09-12', '01.12.2026 Känguru, registration opens', 'Why does a computer sort German dates in the wrong order?', '404 + 405 + 406 + 407 + 408', 'Sort dates as dates', 'Jugendwettbewerb Gold: 6 tasks in 60 minutes', 'pre-selection began on 5 September 2026 with 72 pupils', 'Who registers whom, according to each organiser'],
    sources: [
      { claim: 'Biber 2026 dates, task counts per Klasse, coordinator registration.', url: 'https://bwinf.de/biber/' },
      { claim: 'Jugendwettbewerb levels, self-registration, round 3 deadline.', url: 'https://bwinf.de/jugendwettbewerb/2026/' },
      { claim: 'Bundeswettbewerb Informatik rounds, eligibility, Studienstiftung, besondere Lernleistung.', url: 'https://bwinf.de/bundeswettbewerb/' },
      { claim: 'IOI 2027 Potsdam, pre-selection, C++, BOI 2027.', url: 'https://bwinf.de/olympiade/2027/' },
      { claim: 'Mathematik-Olympiade rounds, Bundesrunde in Kaiserslautern, entry through the maths teacher.', url: 'https://www.mathe-wettbewerbe.de/mo' },
      { claim: 'Bundeswettbewerb Mathematik rules, groups, AI ban.', url: 'https://www.mathe-wettbewerbe.de/bwm' },
      { claim: 'Känguru 2027 date and registration.', url: 'https://www.mathe-kaenguru.de/' },
      { claim: 'Pangea 2027 dates.', url: 'https://www.pangea-wettbewerb.de/termine/' },
      { claim: 'Jugend forscht age groups and cycle.', url: 'https://www.jugend-forscht.de/teilnahme/ablauf/ablauf-auf-einen-blick.html' },
      { claim: 'BWKI rules and 2026 timeline.', url: 'https://www.bw-ki.de/teilnahmebedingungen' }
    ],
    rejectedClaims: [
      'Jugendwettbewerb Informatik 2027 round dates: not yet published; the 2026 dates are given as such.',
      'Any claim that our students won or placed in these competitions: none made.',
      'Reproducing organisers\' tasks or solutions: refused; the three problems are ours.',
      'Any affiliation with BWINF, Bildung & Begabung, Känguru e.V., Pangea, Jugend forscht, the Tübingen AI Center or FIRST: none.',
      'Competition entry fees: not stated beyond the Biber being free, which BWINF says itself.'
    ]
  }
};
