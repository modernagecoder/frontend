'use strict';
// Coding and AI classes in Gütersloh (ag- city page, Germany cluster P6 row DE203, tier-2 shape
// coding-and-ai-classes-in-<city>-germany: all ages). Owner 2026-11-02: classes are live, in English only, with mentors
// who match the learner's pace and accent; pages show euro, checkout charges USD.
// Spine: one first project per age; a data project on who runs Gütersloh's public charging points, where one operator
// holds over a third and 16 of 39 hold four fifths, taught as sort, then add up shares; why the long tail matters for
// AI; NRW school facts; a national maths contest that forbids AI help; class times.
// Sources (facts read raw, quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md, fetched
// 2 November 2026, unless stated):
//  - GI Informatik-Monitor 2026/27, NRW page: compulsory Informatik grades 5 and 6 (fact 80); Wahlpflicht 9 and 10 at
//    G9 Gymnasien (62); Q-phase GK 3, LK 5 hours (81); written Abitur set centrally without a computer (82).
//  - NRW ministry: ZP10 (64); Abitur 2027 written exams 13 April to 5 May 2027 (42).
//  - KMK FER2026_27.pdf, NRW row (fact 275).
//  - Bundeswettbewerb Mathematik (mathe-wettbewerbe.de/bwm): open to pupils on a track to the Hochschulreife, three
//    rounds (170); four problems per home round (171); at least three correct for a round-1 prize (172); "künstliche
//    Intelligenz zur Lösung der Aufgaben oder zur Überprüfung eigener Lösungswege zu nutzen" listed as not allowed (173);
//    groups of up to three in round 1 (174).
//  - Destatis GV-ISys: Gütersloh, Stadt 100,479 on 31.12.2024 (facts-geo/places.tsv).
//  - AI tool ages: content/ai-tool-age-audit.json (OpenAI 13 with a parent's permission under 18; Anthropic 18+).
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Bundesnetzagentur, Ladesäulenregister, Ladesaeulenregister_BNetzA_2026-09-01.csv ("Letzte Aktualisierung
//    vom: 01.09.2026"), CC BY 4.0 per the download page, attribution "Bundesnetzagentur.de"; downloaded 3 November
//    2026. Rows with Ort exactly "Gütersloh": 134 stations, all "In Betrieb", Kreis Gütersloh, 262 charging points,
//    39 operators. Saved as guetersloh_charging.csv. Raw copies in src-pages/<slug>/.
//  - Tried first: Kreis Gütersloh geoportal open data (wind turbines, DL-DE BY 2.0): download 404, directory 403 on
//    3 November 2026; stopped for that host. No Stadt Gütersloh dataset with an open licence on GovData or Open.NRW.
// Our own calculations (scratchpad de/w/T7/run/gt/v1.py + v2.py, python3 -I): operators 39, points 262; rank 1 94 points
// 35.9%; rank 2 16, 42.0% running; rank 3 14, 47.3%; rank 16 reaches 80.2%; 5 operators with a single point; 4
// operators needed for half. Largest operator by points: Stadtwerke Gütersloh GmbH (94).
// Lesson family: sort largest first, then add up the shares; a running share shows how few hold most (Pareto check).

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'points = {}',
  'with open("guetersloh_charging.csv", encoding="utf-8") as fh:',
  '    for row in csv.DictReader(fh):',
  '        points[row["operator"]] = points.get(row["operator"], 0) + int(row["points"])',
  '',
  'total = sum(points.values())',
  'print("Operators:", len(points), " charging points:", total)',
  '',
  'running = 0',
  'for rank, (name, n) in enumerate(sorted(points.items(), key=lambda p: p[1], reverse=True), start=1):',
  '    running += n',
  '    if rank <= 3 or running / total >= 0.8:',
  '        print(rank, n, f"{100 * running / total:.1f}%")',
  '    if running / total >= 0.8:',
  '        break'
].join('\n');

const V2 = [
  'singles = sum(1 for n in points.values() if n == 1)',
  'print("Operators with a single charging point:", singles)',
  'half = 0',
  'for rank, n in enumerate(sorted(points.values(), reverse=True), start=1):',
  '    half += n',
  '    if half * 2 >= total:',
  '        print("Operators needed for half of all points:", rank)',
  '        break'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Gütersloh: coding and AI' },
  slug: 'coding-and-ai-classes-in-guetersloh-germany',
  code: 'cgu',
  accent: '#593523',
  accentRationale: 'Coding and AI in Gütersloh: a deep walnut brown #593523 for the timber-framed old town, distinct from the Recklinghausen umber and the NRW teal; contrast 8.70 on the paper #FBF8F2 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-north-rhine-westphalia', name: 'North Rhine-Westphalia' }],
  routeLabel: 'Coding and AI classes in Gütersloh',
  title: 'Coding and AI Classes in Gütersloh: Live Online, in English',
  description: 'Coding and AI classes in Gütersloh for children, teens and adults: live online in English, a first project per age, NRW school facts and a charging data project.',
  ogDescription: 'Live coding and AI lessons in English for every age in Gütersloh, with an original project on who operates the town\'s 262 public charging points and how few operators hold most of them.',
  twitterDescription: 'Coding and AI for all ages in Gütersloh, live in English, with a project on local charging data.',
  pageName: 'Coding and AI Classes in Gütersloh',
  webPageDescription: 'A guide for Gütersloh learners of every age to coding and artificial intelligence: a first project for each age, an original Python project on the Bundesnetzagentur charging register for Gütersloh, NRW Informatik rules, a maths contest that bans AI help, and class times.',
  courseDescription: 'Live online coding and AI classes in English for learners in Gütersloh from age 6: Scratch and Python for children, Python, data and machine learning for teenagers, data and AI skills for adults, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Gütersloh',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#paths', label: 'Paths' },
    { href: '#data', label: 'Data' },
    { href: '#school', label: 'School' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Gütersloh &middot; Coding and AI &middot; Children, teens, adults',
  h1: 'Coding and AI classes in Gütersloh',
  lede: 'Ask who runs the public charging points in Gütersloh and most people guess "lots of companies". The register says something sharper: one operator holds more than a third of them, and fewer than half of all operators hold four fifths. Finding that out takes a short Python program and one idea, sorting and then adding up shares, that also explains a great deal about the data AI systems learn from. This page is for Gütersloh learners of every age: a first project for each, that charging project, what NRW schools teach, and the hours at which our English-language lessons can run.',
  secondaryCta: { href: '#data', label: 'See the charging project' },
  wa: 'Hello Modern Age Coders, I live in Gütersloh and would like a free first class in coding or AI, taught in English.',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students worldwide &middot; real data from the first months',
  spec: [
    ['Ages', '6 to 12, 13 to 18, adults'],
    ['Children', 'Scratch, then typed Python'],
    ['Teens and adults', 'Python, data, then AI'],
    ['Gütersloh times', 'Afternoons, evenings, weekends'],
    ['Teachers', 'Mentors based in India'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders gives Gütersloh learners live coding and AI lessons online, always in English. Six to twelve year olds start in Scratch and move to Python; teenagers learn data handling and machine learning; adults learn Python, analysis and how to use AI tools they can verify. Each learner has one mentor based in India who works at their pace and gets used to their accent. Classes of fifteen to twenty or one to one, at afternoon, evening or weekend times.',

  picks: {
    eyebrow: 'First courses',
    h2: 'Where Gütersloh learners begin',
    lede: 'A starting course for each age band; experience can change the choice, which is what the first lesson is for.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'CGU / 01', title: 'Python and AI for Kids', note: 'For children from about 9. Real typing from the first lesson, pictures and games, then little programs that sort examples into groups.' },
      { course: 'python-complete-masterclass-teens', code: 'CGU / 02', title: 'Python for Teens', note: 'For 13 to 18. Python properly, up to files and data projects, the base every AI course after it builds on.' },
      { course: 'data-analysis-mastery-course-college', code: 'CGU / 03', title: 'Data Analysis for Adults', note: 'For adults. Spreadsheets, SQL and Python for the kind of tables found at work, before any AI tool is trusted with them.' }
    ]
  },

  sections: [
    {
      id: 'paths',
      eyebrow: 'One project per age',
      h2: 'What can a Gütersloh learner build with coding and AI at 8, 15 or 45?',
      lede: 'Something real at every age. The examples below are typical first projects in our classes, each chosen to teach one lasting idea.',
      body: [
        { kind: 'table', numCols: [], caption: 'Typical first projects by age, and the idea each one teaches (our own examples)', head: ['Age', 'A first project', 'The idea it teaches', 'Course'], rows: [
          ['6 to 8', 'A Scratch story where characters take turns to speak', 'Steps happen in order', 'Coding for Kids'],
          ['9 to 12', 'A Python quiz that keeps score', 'Variables remember things', 'Python and AI for Kids'],
          ['13 to 15', 'A program that sorts a class list and finds the top three', 'Sorting comes before ranking', 'Python for Teens'],
          ['16 to 18', 'A model that guesses a label from examples and reports how often it is right', 'Test on data the model has not seen', 'AI and Machine Learning for Teens'],
          ['Adults', 'A script that totals a monthly export and flags odd rows', 'Let the computer do the dull checks', 'Data Analysis']
        ] },
        { kind: 'source', html: 'Our own course examples. The project below, on charging points, is usually done at around 13 by teenagers and in the first month by adults.' },
        { kind: 'two', mt: true,
          leftH3: 'AI, by the rules of each age',
          left: [
            'The companies behind AI tools set minimum ages in their terms. OpenAI allows ChatGPT from 13, with a parent\'s permission until 18; Anthropic allows Claude from 18. Our children\'s courses need no AI account, our teenage courses keep to OpenAI\'s rule, and Claude appears only in adult courses.',
            'Every limit is quoted and dated in our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a>.'
          ],
          rightH3: 'When AI is not allowed',
          right: [
            'Some contests forbid it outright. The Bundeswettbewerb Mathematik, open to pupils on a track to the Abitur, lists using artificial intelligence to solve its problems or to check one\'s own solutions among the things participants may not do. Its first round sets four problems and allows groups of up to three; at least three correct solutions are needed for a prize.',
            'That is a useful reminder: the goal is a learner who can think without the tool, and use it well when it is allowed.'
          ] }
      ]
    },
    {
      id: 'data',
      tint: 'tint',
      eyebrow: 'A Gütersloh data project',
      h2: 'How many operators run most of Gütersloh\'s public charging points?',
      lede: 'Germany\'s network regulator, the Bundesnetzagentur, lists public charging stations in a register that anyone may reuse under CC BY 4.0. With its 134 Gütersloh entries, learners use one of the most useful patterns in data work: sort from largest to smallest, then keep a running share.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'Our copy carries the date 1 September 2026 and was fetched on 3 November 2026. Only operators who have finished reporting to the regulator appear in it, so a few Gütersloh stations may be absent.',
            'We kept the 134 rows whose place is Gütersloh, all in operation, and saved them as guetersloh_charging.csv. Each row names the operator and the number of charging points. Between them: 262 points and 39 operators.'
          ],
          rightH3: 'The question',
          right: [
            'With 39 operators, a natural guess is that each runs a small share. The program adds up the points per operator, sorts the operators from largest to smallest, and keeps a running total as it goes down the list.',
            'It stops as soon as the running total passes 80 percent and reports how many operators that took.'
          ] },
        { kind: 'code', label: 'Version 1: sort, then add up the shares', lang: 'Python', code: V1, note: 'It prints <code>Operators: 39  charging points: 262</code>, then <code>1 94 35.9%</code>, <code>2 16 42.0%</code>, <code>3 14 47.3%</code> and <code>16 4 80.2%</code>.' },
        { kind: 'p', mt: true, html: 'The largest operator, the town\'s own utility company, Stadtwerke Gütersloh, runs 94 of the 262 points, 35.9 percent on its own. The next two add only 16 and 14. By the sixteenth operator the running share reaches 80.2 percent, so 16 of 39 operators, about two in five, hold four fifths of all public charging points in the register. The other 23 share the remaining fifth. Analysts call this kind of check a Pareto analysis, after the observation that a few often account for most.' },
        { kind: 'code', label: 'Version 2: the long tail', lang: 'Python', code: V2, note: 'It prints <code>Operators with a single charging point: 5</code> and <code>Operators needed for half of all points: 4</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'How quickly the share builds up when Gütersloh operators are taken largest first', head: ['Operators, largest first', 'Points they run', 'Running share'], rows: [
          ['Largest 1', '94', '35.9%'],
          ['Largest 3', '124', '47.3%'],
          ['Largest 4', '136', '51.9%'],
          ['Largest 16', '210', '80.2%'],
          ['All 39', '262', '100%']
        ] },
        { kind: 'source', html: 'Rows taken from the Bundesnetzagentur charging register (version dated 1 September 2026, fetched 3 November 2026) where the place is Gütersloh; reused under CC BY 4.0 with credit to Bundesnetzagentur.de. Ranking, totals and percentages are worked out by us.' },
        { kind: 'p', mt: true, html: 'Why does this belong on a page about AI? Because data for AI is usually lopsided in exactly this way. In a pile of text, a handful of words make up a large part of everything written; in a pile of photos, a few kinds of picture dominate. A model trained on such data sees the head of the list thousands of times and the tail hardly at all, so it tends to do well on common cases and poorly on rare ones. A learner who has sorted and added up shares by hand knows to ask, before training anything, how the examples are spread.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Children, 8 to 12.</strong> Count the colours of 30 sweets, sort the colours from most to fewest, and add them up in order. After how many colours have you reached 24 sweets?',
          '<strong>Teenagers.</strong> Run both versions, then change the stopping point to 50 percent and check that you get 4.',
          '<strong>Adults.</strong> Do the same for any list at work: customers, products or support tickets. How many items make up four fifths?',
          '<strong>Going further.</strong> Repeat the analysis counting stations instead of charging points. Does the largest operator\'s share go up or down, and why?'
        ] }
      ]
    },
    {
      id: 'school',
      eyebrow: 'NRW schools',
      h2: 'What Informatik do Gütersloh schools teach?',
      lede: 'Gütersloh follows North Rhine-Westphalia\'s rules. Three facts sum them up.',
      body: [
        { kind: 'ol', items: [
          '<strong>Everyone starts at ten or eleven.</strong> In NRW, two years of Informatik, grades 5 and 6, are part of every general school\'s timetable, as the Informatik-Monitor records.',
          '<strong>After that, it is chosen.</strong> Pupils at a nine-year Gymnasium can pick it again later in lower secondary, and in the final two years a school may run a three-hour or a five-hour course.',
          '<strong>The Abitur exam is on paper.</strong> Written Informatik tasks are set centrally and answered without a computer. In 2027 the written Abitur exams run from 13 April to 5 May.'
        ] },
        { kind: 'source', html: 'Checked on 2 November 2026 against the NRW entry of the Gesellschaft für Informatik\'s monitor and the NRW school ministry\'s pages on the 2027 Abitur and on the ZP10, the central end-of-grade-10 tests in German, maths and English.' },
        { kind: 'p', mt: true, html: 'Our classes work alongside school and never replace it; marks and the Abitur come from school alone. Gütersloh pupils with Informatik on their timetable may like our <a class="ag-inline-link" href="/courses/informatik-companion-course-klasse-5-10">Informatik companion for Klasse 5 to 10</a> or the <a class="ag-inline-link" href="/courses/informatik-abitur-course-java-python">Informatik Abitur course</a>, which practise reading code on paper. The <a class="ag-inline-link" href="/coding-classes-in-north-rhine-westphalia">North Rhine-Westphalia page</a> has the wider picture.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When are classes in Gütersloh time?',
      lede: 'Afternoons for pupils, early evenings for adults, and weekend slots for everyone. The mentor\'s day in India runs several hours ahead.',
      body: [
        { kind: 'table', numCols: [], caption: 'Four example Gütersloh slots on the mentor\'s clock', head: ['Gütersloh', 'India this winter', 'India from 28 March 2027'], rows: [
          ['15:50', '20:20', '19:20'],
          ['17:35', '22:05', '21:05'],
          ['Saturday 16:00', '20:30', '19:30'],
          ['Sunday 08:30', '13:00', '12:00']
        ] },
        { kind: 'source', html: 'Winter time (UTC+1) has applied in Gütersloh since 25 October 2026 and summer time (UTC+2) returns on 28 March 2027, as the Einheitenzeitgesetz provides, while India never leaves UTC+5:30. Illustrative rows only.' },
        { kind: 'p', mt: true, html: 'NRW school holidays in 2026/27, according to the Kultusministerkonferenz: 17 to 31 October 2026, 23 December 2026 to 6 January 2027, 22 March to 3 April 2027, the single day of 18 May 2027, and 19 July to 31 August 2027. Lessons run through the holidays unless you pause them. Learners join from all over Gütersloh and from nearby Rheda-Wiedenbrück, Harsewinkel, Verl, Herzebrock-Clarholz and Bielefeld.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How progress is tracked',
    lede: 'Our own stages, the same for every age, so that each learner knows what comes next.',
    table: { caption: 'Stages in coding and AI (ours)', head: ['Stage', 'Typical time', 'Evidence'], rows: [
      ['Instructions', 'First weeks', 'A program that does exactly what was planned'],
      ['Loops and choices', 'First months', 'A game or script that repeats and decides'],
      ['Sorting and shares', 'Months 3 to 5', 'A ranked list with a running total, explained'],
      ['A tested model', 'Months 5 to 9', 'A model checked on examples it never saw'],
      ['Own project', 'Later', 'A project another person can run and question']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage three is where the charging project sits; children who learn to sort before they rank carry the habit into every subject.',
      'Updates describe the projects themselves, not time online.'
    ] },
    right: { h3: 'For adult learners', ps: [
      'When a list is long, sort it and add up shares before drawing any conclusion.',
      'Before training a model, look at how the examples are spread.'
    ] }
  },

  catalogue: {
    eyebrow: 'Next courses',
    h2: 'Nine more courses for Gütersloh learners',
    lede: 'Live, in English, with one mentor, in a class or one to one.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'CGU / KIDS / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Scratch stories and games, then more.' },
        { code: 'CGU / KIDS / 02', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Hackathon for kids', blurb: 'A team project with a deadline, 8 to 12.' },
        { code: 'CGU / KIDS / 03', slug: 'ai-literacy-for-kids-course', title: 'AI literacy', blurb: 'How AI learns, for 8 to 14.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'CGU / TEEN / 01', slug: 'ai-ml-masterclass-teens', title: 'Machine learning for teens', blurb: 'Training and testing real models.' },
        { code: 'CGU / TEEN / 02', slug: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', title: 'Hackathon for teens', blurb: 'Building fast, in a team, 13 to 17.' },
        { code: 'CGU / TEEN / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad maths', blurb: 'Proof and problem solving for contests.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Ages 18 and up', courses: [
        { code: 'CGU / ADULT / 01', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Data and AI for non-programmers', blurb: 'Analysis without writing code first.' },
        { code: 'CGU / ADULT / 02', slug: 'python-ai-automation-masterclass-college', title: 'Python automation', blurb: 'Scripts for the repetitive parts of work.' },
        { code: 'CGU / ADULT / 03', slug: 'ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals', title: 'Copilot Studio agents', blurb: 'Agents for professionals, one to one.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How live classes run for Gütersloh learners',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Pupils', l: 'Afternoon lessons once school is over.' },
      { time: 'Working adults', l: 'Early evening lessons on weekdays.' },
      { time: 'One to one', l: 'A slot of your choice, including weekends.' }
    ],
    cells: [
      { h3: 'Learner types', p: 'The mentor guides; hands stay on the learner\'s keyboard.' },
      { h3: 'Real data early', p: 'Public datasets from the first months.' },
      { h3: 'Patient English', p: 'Explained again, more simply, if needed.' },
      { h3: 'One mentor', p: 'The same person from start to finish.' },
      { h3: 'Age-correct AI', p: 'Tools only where their terms allow.' },
      { h3: 'Class or private', p: 'Fifteen to twenty learners, or one.' }
    ]
  },

  projectsH2: 'What our students have made',
  projectsLede: 'Projects from learners in several countries; the <a class="ag-inline-link" href="/student-labs">student labs</a> page shows more.',
  reviewsLede: 'Google reviews by students and parents, quoted unchanged.',

  fees: {
    h2: 'Fees for learners in Gütersloh',
    lede: 'Each month\'s fee pays for eight live classes. The euro shown is our US dollar price converted at the ECB reference rate; since the card is charged in dollars, your bank\'s conversion decides the final euro figure.',
    free: ['A free first class', 'A starter task for the learner\'s age', 'No card required'],
    group: ['Fifteen to twenty learners of similar age', 'One mentor for the whole course', 'Two classes a week', 'Monthly, no fixed term'],
    one: ['One learner, one mentor', 'Goals you set', 'Times you agree']
  },

  faq: {
    eyebrow: 'Gütersloh learners ask',
    h2: 'Coding and AI classes in Gütersloh: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Lessons are live and in English only. The mentor adapts speed and accent to the learner and rephrases when something is unclear. Programming keywords are English words anyway.' },
      { q: 'Which age group should we book?', a: 'Children of 6 to 12 start with Scratch and then Python, teenagers with Python and data, adults with Python or data analysis. The free first class confirms the right group.' },
      { q: 'Does NRW teach Informatik at school?', a: 'It does, for two years: grades 5 and 6 are compulsory everywhere, says the Informatik-Monitor 2026/27. From grade 7 pupils choose, and in the Oberstufe it can become an Abitur subject.' },
      { q: 'Will my child use AI tools?', a: 'Below 13, no AI accounts at all; OpenAI\'s own minimum is 13, with parental consent until 18, and Anthropic\'s is 18. Under-13s instead make little programs that learn, which shows them what is inside the tools.' },
      { q: 'Can AI help with maths contests?', a: 'Not in every contest. The Bundeswettbewerb Mathematik lists using artificial intelligence to solve its problems or to check solutions among the things participants must not do.' },
      { q: 'When are classes in Gütersloh time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Pupils usually take afternoons and adults early evenings.' },
      { q: 'Where are the mentors?', a: 'India. They teach over live video; a 17:35 class in Gütersloh is 22:05 for them this winter and 21:05 once German summer time starts.' },
      { q: 'How do payments work?', a: 'A monthly payment in US dollars. Our euro display is a conversion at the ECB reference rate, so your bank\'s own exchange can land a little above or below it. The first class has no charge.' },
      { q: 'What is the charging point project?', a: 'Learners take the 262 Gütersloh charging points in the national register, run by 39 operators. Sorting operators by size and adding up shares shows that the largest holds 35.9 percent and 16 operators hold 80.2 percent.' },
      { q: 'Can adults start from nothing?', a: 'Yes. Adult courses begin with the first line of code, or with data analysis without code for those who prefer.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Gütersloh learners.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Every Germany page, sorted by place.' },
      { href: '/coding-classes-in-north-rhine-westphalia', label: 'Coding classes in North Rhine-Westphalia', p: 'The Land\'s rules and holidays.' },
      { href: '/ai-course-for-school-students-germany', label: 'AI course for school students', p: 'For pupils who want to build models.' },
      { href: '/math-olympiad-germany-preparation', label: 'Mathematik-Olympiade preparation', p: 'Contest maths, without AI shortcuts.' },
      { href: '/coding-classes-for-adults-germany', label: 'Coding for adults in Germany', p: 'Starting late, learning properly.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'One live class in detail.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Give us an age and an idea the learner would love to build. The mentor turns it into a ten-minute task, watches the approach and the English, and names the course and group to join.',
    readFirst: 'Read first: <a class="ag-inline-link" href="/how-we-teach">how we teach</a> and <a class="ag-inline-link" href="/courses">all courses</a>.',
    note: 'Mentors in India, lessons live over video, English as the only teaching language. A WhatsApp message gets the quickest reply.',
    formNote: 'The first class is free; no card needed.'
  },

  footer: {
    cols: [
      { h4: 'Coding and AI', links: [
        { href: '/ai-course-for-school-students-germany', label: 'AI for school students' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and ML in Germany' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-north-rhine-westphalia', label: 'North Rhine-Westphalia' },
        { href: '/math-olympiad-germany-preparation', label: 'Mathematik-Olympiade' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Sort first, then add up the shares'
  },

  personalityCss: `
.ag-root.ag-cgu .ag-hero h1 { letter-spacing: -0.013em; }
.ag-root.ag-cgu .ag-capsule { border-left-width: 6px; }
.ag-root.ag-cgu .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-cgu .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-cgu .ag-code-head b { letter-spacing: 0.012em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (NRW page); Ministerium für Schule und Bildung NRW (Abitur 2027, ZP10); KMK Ferienregelung 2026/27; Bundeswettbewerb Mathematik rules; providers\' terms via our AI tools age guide; Einheitenzeitgesetz; Destatis GV-ISys. Bundesnetzagentur, Ladesäulenregister of 1 September 2026, CC BY 4.0.',
    localProject: 'Who runs Gütersloh\'s charging points: an original Python project on the 134 Gütersloh stations (262 points, 39 operators) in the Bundesnetzagentur register of 1 September 2026, sorting operators by points and keeping a running share: the largest holds 35.9 percent, four reach half, 16 reach 80.2 percent, and five run a single point each. Lesson family: sort largest first, then add up shares (Pareto check).',
    requiredMentions: ['guetersloh_charging.csv', 'Operators: 39  charging points: 262', '1 94 35.9%', '16 4 80.2%', 'Operators needed for half of all points: 4', 'Pareto analysis', 'Rheda-Wiedenbrück, Harsewinkel, Verl, Herzebrock-Clarholz and Bielefeld', 'Sort first, then add up the shares'],
    sources: [
      { claim: 'NRW Informatik rules and the paper Abitur.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/nordrhein-westfalen' },
      { claim: 'NRW Abitur 2027 dates.', url: 'https://www.standardsicherung.schulministerium.nrw.de/zentralabitur-gost/termine/2027' },
      { claim: 'Bundeswettbewerb Mathematik rules, including the ban on AI help.', url: 'https://www.mathe-wettbewerbe.de/bwm' },
      { claim: 'NRW school holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Ladesäulenregister and its CC BY 4.0 licence.', url: 'https://www.bundesnetzagentur.de/DE/Fachthemen/ElektrizitaetundGas/E-Mobilitaet/Ladesaeulenkarte/start.html' }
    ],
    rejectedClaims: [
      'Kreis Gütersloh wind turbine data: the download returned 404 and the folder 403 on 3 November 2026, so it was not used.',
      'Any judgement on whether the operator shares are good or bad: none given; the page reports counts only.',
      'Any partnership with the Stadtwerke Gütersloh or any operator: none; the name is quoted from the register.',
      'Any affiliation with the Bundesnetzagentur or the Bundeswettbewerb Mathematik: none.',
      'German-language teaching: we teach in English only, and the page says so.'
    ]
  }
};
