'use strict';
// Online coding course for career changers in Germany (ag- English door, Germany cluster P2 row DE037), written 2026-11-03.
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Angle: adults in Germany who want to move into software. Honest first: no job, salary or placement promises, no
// German accreditation, no funding scheme, no visa or legal advice. What the official German route asks for (the
// Fachinformatiker Ausbildung and its project exam), what a self-built portfolio should therefore show, and an original
// project in writing tests that break your own code.
// Sources (read raw, fetched 3 Nov 2026, copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/
// online-coding-course-for-career-changers-germany/):
//  - Verordnung über die Berufsausbildung zum Fachinformatiker und zur Fachinformatikerin, gesetze-im-internet.de/fiausbv
//    (fiausbv.html/.txt): Vollzitat "Fachinformatikerausbildungsverordnung vom 28. Februar 2020 (BGBl. I S. 250)";
//    "(+++ Textnachweis ab: 1.8.2020 +++)"; § 1 "wird nach § 4 Absatz 1 des Berufsbildungsgesetzes staatlich
//    anerkannt"; § 2 "Die Berufsausbildung dauert drei Jahre."; § 4 Fachrichtungen "a) Anwendungsentwicklung, b)
//    Systemintegration, c) Daten- und Prozessanalyse und d) Digitale Vernetzung"; § 5(1) Einsatzgebiete of
//    Anwendungsentwicklung "kaufmännische Systeme, 2. technische Systeme, 3. Expertensysteme, 4.
//    mathematisch-wissenschaftliche Systeme und 5. Multimedia-Systeme"; § 12(2) six abilities ("kundenspezifische
//    Anforderungen zu analysieren" ... "anforderungsgerecht zu dokumentieren"), "Projektbeschreibung zur Genehmigung",
//    "höchstens 80 Stunden"; § 12(3) "die Arbeitsergebnisse adressatengerecht zu präsentieren", Fachgespräch; § 14(1)
//    "einen Programmcode zu interpretieren", "Testszenarien auszuwählen und Testdaten zu generieren", "Abfragen zur
//    Gewinnung und Manipulation von Daten zu erstellen"; § 14(3) "Die Prüfungszeit beträgt 90 Minuten."
//  - Berufsbildungsgesetz § 45, gesetze-im-internet.de/bbig_2005/__45.html (bbig45.html/.txt): (2) "wer nachweist, dass
//    er mindestens das Eineinhalbfache der Zeit, die als Ausbildungsdauer vorgeschrieben ist, in dem Beruf tätig gewesen
//    ist"; may be waived "durch Vorlage von Zeugnissen oder auf andere Weise glaubhaft gemacht".
//  - Destatis Gemeindeverzeichnis GV-ISys (Länder and cities of 100,000+, 31.12.2024), via facts-geo/places.tsv:
//    Amtlicher Regionalschlüssel of each Land (01 Schleswig-Holstein ... 16 Thüringen) and city (Kiel 010020000000,
//    Köln 053150000000, München 091620000000, Leipzig 147130000000, Erfurt 160510000000, Saarbrücken 100410100100).
//    Extract saved as gemeinden.csv (16 Länder, 80 cities).
//  - Time: EinhZeitG; summer time ended 25 October 2026, begins 28 March 2027; India UTC+5:30.
// Our own calculations (scratchpad de/w/G4/cch/v1.py, v2.py, both.py, python3 -I): Version 1 (codes read as int)
// prints "PASS Leipzig -> Sachsen", "FAIL Kiel -> Saarland", "FAIL Köln -> no Land with code 53", "PASS Erfurt ->
// Thüringen", "FAIL München -> no Land with code 91", "PASS Saarbrücken -> Saarland". Version 2 (codes kept as text)
// prints "Tests failed: 0 of 6" and "Cities whose code starts with 0: 69 of 80". One and a half times three years is
// four and a half years (our arithmetic on § 2 FIAusbV and § 45(2) BBiG; not advice).
// Lesson family: choosing test data that breaks your code: identifiers with a leading zero are text, not numbers.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'lands, cities = {}, {}',
  'with open("gemeinden.csv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f):',
  '        if row["type"] == "land":',
  '            lands[int(row["ars"])] = row["name"]',
  '        else:',
  '            cities[row["name"]] = int(row["ars"])',
  '',
  'def land_of(city):',
  '    code = str(cities[city])[:2]      # the first two digits name the Land',
  '    return lands[int(code)]',
  '',
  '# tests written before trusting the function',
  'tests = [("Leipzig", "Sachsen"), ("Kiel", "Schleswig-Holstein"),',
  '         ("Köln", "Nordrhein-Westfalen"), ("Erfurt", "Thüringen"),',
  '         ("München", "Bayern"), ("Saarbrücken", "Saarland")]',
  'for city, expected in tests:',
  '    try:',
  '        got = land_of(city)',
  '    except KeyError as missing:',
  '        got = "no Land with code " + str(missing)',
  '    print("PASS" if got == expected else "FAIL", city, "->", got)'
].join('\n');

const V2 = [
  '# Version 2: a Regionalschlüssel is a label, not a number. Keep it as text.',
  'lands, cities = {}, {}',
  'with open("gemeinden.csv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f):',
  '        if row["type"] == "land":',
  '            lands[row["ars"]] = row["name"]',
  '        else:',
  '            cities[row["name"]] = row["ars"]',
  '',
  'def land_of(city):',
  '    return lands[cities[city][:2]]',
  '',
  'failures = [city for city, expected in tests if land_of(city) != expected]',
  'print("Tests failed:", len(failures), "of", len(tests))',
  'wrong_before = sum(1 for ars in cities.values() if ars[0] == "0")',
  'print("Cities whose code starts with 0:", wrong_before, "of", len(cities))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'door', label: 'Coding for career changers' },
  slug: 'online-coding-course-for-career-changers-germany',
  code: 'cch',
  accent: '#0B5B61',
  accentRationale: 'Career changers in Germany: a dark petrol #0B5B61, sober and workmanlike, kept apart from the adult sea green, the hub fir green and the Informatik teal; contrast on the paper #FBF8F2 above 7:1 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Online coding course for career changers in Germany',
  title: 'Online Coding Course for Career Changers in Germany',
  description: 'A live online coding course in English for adults in Germany changing career: web development, Python and tested projects, with no job promises and no accreditation.',
  ogDescription: 'For adults in Germany thinking of a move into software: what the official Fachinformatiker route asks of a project, what an honest portfolio should show, and a first lesson in writing tests that break your own code.',
  twitterDescription: 'An honest, live online coding course in English for career changers in Germany. Skills and projects, no job promises.',
  pageName: 'Online Coding Course for Career Changers in Germany',
  webPageDescription: 'A guide for adults in Germany who are considering a move into software development: the state-recognised Fachinformatiker training and its project and algorithm exams, the Berufsbildungsgesetz rule on admission after work experience, what a portfolio should show, what we do and do not offer, and an original Python testing project on Destatis regional codes.',
  courseDescription: 'A live online coding course in English for adults in Germany changing career: Python, full-stack web development, databases, Git and testing, built around projects the learner plans, tests, documents and presents, in a group of fifteen to twenty adults or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Career changers',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#honest', label: 'Offer' },
    { href: '#routes', label: 'Routes' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#project', label: 'Project' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Germany &middot; Career change &middot; Adults',
  h1: 'Online coding course for career changers in Germany',
  lede: 'If you are thinking of leaving another job for software, you deserve plain answers before you spend a cent. We teach the skills and help you build projects you can show. We do not find you a job, we hold no German accreditation, our course is not part of any funding scheme, and we give no advice on visas or employment law. This page sets out what the official German training route asks of a developer, what a portfolio therefore needs to show, and the kind of work our career-change learners do from the first month.',
  secondaryCta: { href: '#portfolio', label: 'What a portfolio needs' },
  wa: 'Hello Modern Age Coders, I live in Germany, I am thinking about a career change into software and would like a free first class, taught in English.',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students worldwide &middot; skills and projects, never job guarantees',
  spec: [
    ['For', 'Adults changing career, any age'],
    ['Core', 'Python, web, databases, Git, tests'],
    ['Outcome', 'Projects you planned, built and can explain'],
    ['German times', 'Before and after work, weekends'],
    ['Mentors', 'Based in India, teaching in English'],
    ['Not included', 'Job placement, German certificates']
  ],
  capsuleQ: 'In short',
  capsule: 'Our online coding course for career changers in Germany is taught live in English by mentors who match each adult\'s pace and accent: Python, then full-stack web development, databases, Git and testing, around projects you plan, test, document and present. Learn with fifteen to twenty adults or one to one. We promise skills and honest feedback, not a job, and hold no German accreditation.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for a move into software',
    lede: 'The web route most career changers take, a thorough Python foundation for those who want depth first, and the algorithms that technical interviews and exams still test.',
    items: [
      { course: 'full-stack-web-development-masterclass-college', code: 'CCH / 01', title: 'Full-Stack Web Development', note: 'React, Node.js, a database and deployment, built project by project, each one tested and written up.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'CCH / 02', title: 'Python from Zero to Advanced', note: 'For a complete beginner: the language in depth, files, classes and tests, before any framework.' },
      { course: 'data-structures-algorithms-masterclass-college', code: 'CCH / 03', title: 'Data Structures and Algorithms', note: 'Lists, trees, graphs and the reasoning behind them, for the written and spoken technical questions ahead.' }
    ]
  },

  sections: [
    {
      id: 'honest',
      eyebrow: 'Before anything else',
      h2: 'What can an online coding course honestly promise a career changer?',
      lede: 'Less than many advertisements suggest, and more than nothing. Here is our side of it, in full.',
      body: [
        { kind: 'three', cells: [
          { h3: 'What we do', p: 'Teach programming properly, live and in English, with one mentor who knows your work. Set projects that resemble real work, review your code line by line, and tell you honestly where it is weak. Help you write up and present what you built.' },
          { h3: 'What we do not do', p: 'Place you in a job, promise a salary, or speak to employers for you. Award any German qualification. Take part in any public funding or approval scheme. Advise on residence permits, visas, employment contracts or tax. For those, ask the competent German authority or a qualified adviser.' },
          { h3: 'What it takes from you', p: 'Time, steadily. Two live classes a week plus practice in between, for many months. The course is planned for adults who keep working while they learn.' }
        ] },
        { kind: 'p', mt: true, html: 'Why say all this so early? Because a career change is a large decision with your income attached, and a page that sells a dream is no help in making it. If after the free first class you decide that a full-time training route suits you better, that is a good outcome too.' }
      ]
    },
    {
      id: 'routes',
      tint: 'tint',
      eyebrow: 'The official route',
      h2: 'What is the state-recognised route into software work in Germany?',
      lede: 'For software developers it is the training occupation Fachinformatiker or Fachinformatikerin. Its rules are federal law, published in full and free to read, and they are the clearest statement of what a German examiner expects a developer to be able to do.',
      body: [
        { kind: 'table', numCols: [], caption: 'The Fachinformatiker training and the work-experience route to its final exam, as the law states them', head: ['Rule', 'What the official text says', 'Where it is written'], rows: [
          ['Status', 'A training occupation recognised by the state under the Berufsbildungsgesetz', 'FIAusbV, section 1'],
          ['Length', 'The training lasts three years', 'FIAusbV, section 2'],
          ['Specialisms', 'Anwendungsentwicklung, Systemintegration, Daten- und Prozessanalyse, Digitale Vernetzung', 'FIAusbV, section 4'],
          ['Project exam', 'A project in a real company, approved in advance, at most 80 hours including documentation, then a presentation and a technical interview', 'FIAusbV, section 12'],
          ['Algorithms exam', 'Read code, write a solution, choose test cases and generate test data, write database queries; 90 minutes, on paper', 'FIAusbV, section 14'],
          ['Without the training', 'Admission to the final exam for someone who has worked in the occupation for at least one and a half times the training period, or who shows the ability by certificates or otherwise', 'BBiG, section 45(2)']
        ] },
        { kind: 'source', html: 'Sources: Verordnung über die Berufsausbildung zum Fachinformatiker und zur Fachinformatikerin of 28 February 2020 (BGBl. I p. 250), text in force from 1 August 2020; Berufsbildungsgesetz, section 45; both on gesetze-im-internet.de, read on 3 November 2026. The English summaries are ours and not a legal translation.' },
        { kind: 'two', mt: true,
          leftH3: 'How to read the table',
          left: [
            'One and a half times three years is four and a half years of work in the occupation; that is our arithmetic on the two texts, not advice on any individual case. Whether someone is admitted is decided by the competent body (the zuständige Stelle) for that occupation. Ask them, not us.',
            'A university degree is a separate path again. We are neither of these, and we do not pretend to be.'
          ],
          rightH3: 'Why we quote it at all',
          right: [
            'Because the exam rules read like a job description. Section 12 lists six things a candidate must show in a software project: analyse what a customer needs, plan the project, consider its cost, build or adapt the software, test it and prepare its rollout, and document it all.',
            'That list is as good a standard for a self-built portfolio as any we know. We teach towards it, without claiming that our course is that training.'
          ] }
      ]
    },
    {
      id: 'portfolio',
      eyebrow: 'Portfolio',
      h2: 'What should a career changer\'s coding portfolio show?',
      lede: 'Three finished projects that a stranger can run, read and question are worth more than twenty tutorials followed to the end. Here is how the six abilities of the German project exam translate into evidence you can put in a portfolio.',
      body: [
        { kind: 'table', numCols: [], caption: 'From the six abilities in FIAusbV section 12 to portfolio evidence (our mapping)', head: ['The exam asks you to', 'In a portfolio project, show', 'Where we practise it'], rows: [
          ['Analyse what the customer needs', 'A short written brief: who it is for and what problem it solves', 'Month 2 onwards, for every project'],
          ['Plan the project', 'A plan with steps and a rough time estimate, and what changed', 'From the first web project'],
          ['Consider the economics', 'A sentence on what it would cost to run and why the choice was made', 'Hosting and database choices'],
          ['Build or adapt the software', 'Clean code in a public repository, with a commit history', 'Every class'],
          ['Test it and prepare its rollout', 'Automated tests that pass, and a live version or clear install steps', 'From the testing project below'],
          ['Document it', 'A README a stranger can follow without asking you', 'Reviewed by the mentor before you publish']
        ] },
        { kind: 'source', html: 'Left column: our English summary of FIAusbV section 12(2). The other two columns are our own teaching plan. Section 12(3) adds a presentation and a technical interview about the project, which is why our learners present each finished project to their mentor.' },
        { kind: 'p', mt: true, html: 'What a portfolio cannot do is replace judgement. A recruiter or an examiner will ask why you built it that way, what you would change, and what happens if the input is wrong. You can only answer those questions about code you wrote and understood yourself, which is why our mentors let AI tools into a career-change course only after the learner can do the work without them, and only as something to check rather than to trust.' }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'Testing, from the first month',
      h2: 'How do you write a test that catches your own mistake?',
      lede: 'Section 14 of the training rules asks a candidate to choose test scenarios and generate test data. It sounds dry. In practice it is the difference between code that works on your examples and code that works. Our career-change learners start with this small project on official German data.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The Federal Statistical Office gives every Land and every municipality an Amtlicher Regionalschlüssel, a code whose first two digits name the Land: 01 is Schleswig-Holstein, 09 is Bayern, 16 is Thüringen. Kiel has the code 010020000000 and Köln 053150000000.',
            'We saved the codes of the 16 Länder and of the 80 cities of 100,000 or more people from the Destatis Gemeindeverzeichnis (reference date 31 December 2024) as gemeinden.csv.'
          ],
          rightH3: 'The task',
          right: [
            'Write a function that takes a city and returns its Land. Then, before trusting it, write six tests with the right answers looked up by hand, and choose them on purpose: cities from Länder whose code starts with 0, and some whose code does not.',
            'A good test set is one that is designed to break the code, not to confirm it.'
          ] },
        { kind: 'code', label: 'Version 1: the codes read as numbers', lang: 'Python', code: V1, note: 'It prints <code>PASS Leipzig -&gt; Sachsen</code>, <code>FAIL Kiel -&gt; Saarland</code>, <code>FAIL Köln -&gt; no Land with code 53</code>, <code>PASS Erfurt -&gt; Thüringen</code>, <code>FAIL München -&gt; no Land with code 91</code> and <code>PASS Saarbrücken -&gt; Saarland</code>.' },
        { kind: 'p', mt: true, html: 'Turning 010020000000 into a number throws away the leading zero, so Kiel\'s code becomes 10020000000. Its first two digits are now 10, which is Saarland: a wrong answer with no error at all. For Köln the first two digits become 53, which is no Land, so the program would have crashed without the <code>try</code>. Had we tested only Leipzig, Erfurt and Saarbrücken, every test would have passed and the bug would have shipped.' },
        { kind: 'code', label: 'Version 2: the codes kept as text', lang: 'Python', code: V2, note: 'Run after Version 1 in the same file. It prints <code>Tests failed: 0 of 6</code> and <code>Cities whose code starts with 0: 69 of 80</code>.' },
        { kind: 'p', mt: true, html: 'A Regionalschlüssel, a postcode, a phone number or a tax number looks like a number but is a label: nobody adds two of them together. Keep labels as text. The last line counts how many of the 80 cities would have been affected: 69, every city in Länder 01 to 09. This one habit, choosing test data at the edges, comes up again in every web form, every database import and every interview question about input handling.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Run Version 1</strong> with only the three passing tests. Notice that it looks finished.',
          '<strong>Add the other three</strong> and explain each failure in one sentence.',
          '<strong>Write a test for bad input.</strong> What should <code>land_of("Atlantis")</code> do? Decide, write the test, then make it pass.',
          '<strong>Going further.</strong> Put the function and tests in a public repository with a README that a stranger could follow. That is your first portfolio piece.'
        ] },
        { kind: 'source', html: 'Data: Statistisches Bundesamt, Gemeindeverzeichnis GV-ISys, Länder and cities of 100,000 or more, reference date 31 December 2024. Rules: FIAusbV section 14(1). The code, the test choice, the counts and the exercises are our own.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Fitting it around work',
      h2: 'Can I learn to code while I keep my job in Germany?',
      lede: 'Yes, and the course is built for that. Because the mentor is in India, early mornings and lunch breaks in Germany are normal teaching hours for them.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example class times for working adults in Germany and the same moment in India', head: ['German time', 'Indian time this winter', 'Indian time from 28 March 2027'], rows: [
          ['06:45', '11:15', '10:15'],
          ['13:00', '17:30', '16:30'],
          ['17:45', '22:15', '21:15'],
          ['Sunday 09:00', '13:30', '12:30']
        ] },
        { kind: 'source', html: 'Under the Einheitenzeitgesetz Germany uses MEZ, UTC+1, in winter and MESZ, UTC+2, in summer. This winter time began on 25 October 2026 and lasts until 28 March 2027. India keeps UTC+5:30 throughout, a gap of four hours thirty in winter and three hours thirty in summer.' },
        { kind: 'p', mt: true, html: 'These are sample times rather than fixed classes. You pick the time of your free first class in German time, and one-to-one learners can shift a class when a deadline at work gets in the way.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'From first line to a portfolio you can defend',
    lede: 'The stages we use with career changers. They are our markers, not a German qualification and not a promise of employment.',
    table: { caption: 'Career-change milestones (ours)', head: ['Stage', 'Typical start', 'You can'], rows: [
      ['1. Python foundations', 'Month 1', 'Write and test small functions, like the Regionalschlüssel project'],
      ['2. The web', 'Months 2 to 4', 'Build pages with HTML, CSS and JavaScript, then React'],
      ['3. Back end and data', 'Months 5 to 7', 'Write an API with Node.js and store data in a database'],
      ['4. Team habits', 'Months 8 to 9', 'Work in Git with branches, reviews and automated tests'],
      ['5. Portfolio', 'Months 10 and up', 'Show three projects, documented and presented, and answer questions on them']
    ] },
    left: { h3: 'While you learn', ps: [
      'Write the test before you believe the code.',
      'Keep a short log of what you built each week. It becomes your portfolio\'s story.'
    ] },
    right: { h3: 'Before you apply', ps: [
      'Ask someone who did not watch you build it to run your project from the README alone.',
      'Be ready to explain every line. If you cannot, rewrite it until you can.'
    ] }
  },

  catalogue: {
    eyebrow: 'More for career changers',
    h2: 'Nine more courses on the way into software',
    lede: 'All taught live in English. Your mentor will suggest an order once they know your starting point.',
    bands: [
      { num: 'I', h3: 'Front end and back end', sub: 'Adults', courses: [
        { code: 'CCH / WEB / 01', slug: 'react-js-complete-masterclass-college', title: 'React', blurb: 'Modern interfaces, component by component.' },
        { code: 'CCH / WEB / 02', slug: 'complete-typescript-programming-masterclass-college', title: 'TypeScript', blurb: 'JavaScript with types, for larger code.' },
        { code: 'CCH / WEB / 03', slug: 'mern-stack-development-masterclass-college', title: 'MERN stack', blurb: 'MongoDB, Express, React and Node together.' }
      ] },
      { num: 'II', h3: 'Data and Java', sub: 'Adults', courses: [
        { code: 'CCH / DATA / 01', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL', blurb: 'Queries, joins and database design.' },
        { code: 'CCH / DATA / 02', slug: 'data-science-complete-masterclass-college', title: 'Data science', blurb: 'Python, statistics and machine learning.' },
        { code: 'CCH / DATA / 03', slug: 'complete-java-programming-masterclass-college', title: 'Java and Spring Boot', blurb: 'The language of many German enterprise teams.' }
      ] },
      { num: 'III', h3: 'Working like a team', sub: 'Ages 18 and up', courses: [
        { code: 'CCH / TEAM / 01', slug: 'git-github-advanced-version-control-masterclass-for-professionals', title: 'Advanced Git and GitHub', blurb: 'Branches, reviews and clean history.' },
        { code: 'CCH / TEAM / 02', slug: 'vibe-coding-for-college-fullstack-ai-dsa-career-course', title: 'Full stack with AI help', blurb: 'Projects built faster, and checked by you.' },
        { code: 'CCH / TEAM / 03', slug: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', title: 'AI coding agents', blurb: 'Codex and Claude Code, reviewed line by line.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How the live career-change course works from Germany',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Early start', l: 'From about 06:30 German time, before the working day.' },
      { time: 'Lunch or evening', l: 'Around midday, or up to about 18:00 German time.' },
      { time: 'One to one', l: 'Arranged with your mentor and moved when work demands it.' }
    ],
    cells: [
      { h3: 'Projects, not slides', p: 'Every unit ends in something that runs.' },
      { h3: 'Code review', p: 'Your mentor reads your code and says what is weak.' },
      { h3: 'Clear English', p: 'Spoken at your speed, rephrased whenever asked.' },
      { h3: 'One mentor', p: 'Someone who has followed your work from the start.' },
      { h3: 'Honest feedback', p: 'Told plainly when something is not ready to show.' },
      { h3: 'Two formats', p: 'Fifteen to twenty adults, or you alone.' }
    ]
  },

  projectsH2: 'Projects our students have built',
  projectsLede: 'Below is some of the work our students elsewhere have published; the <a class="ag-inline-link" href="/student-labs">student labs</a> page holds a larger collection.',
  reviewsLede: 'Reviews written on Google by our learners and families, left exactly as posted.',

  fees: {
    h2: 'Fees for the career-change course in Germany',
    lede: 'A monthly fee pays for eight live classes and nothing is locked in. Fees are listed here in euro using the European Central Bank\'s reference rate; the actual payment is collected in US dollars and converted by your bank, so the euro amount on your statement can be a little different.',
    free: ['A free first class', 'An honest talk about your plans', 'No card required'],
    group: ['Fifteen to twenty adults at a similar stage', 'One regular mentor', 'Two classes a week', 'Monthly, no long contract'],
    one: ['You and one mentor', 'A plan around your job', 'Times you choose together']
  },

  faq: {
    eyebrow: 'Career changers ask',
    h2: 'Career change into coding from Germany: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. The course is live and in English only. Your mentor matches your pace and accent, and English is also the language of most programming documentation and many development teams.' },
      { q: 'Will this course get me a job?', a: 'We cannot promise that, and we do not. We teach the skills, review your work honestly and help you build projects you can show and explain. Hiring decisions are made by employers.' },
      { q: 'Do I get a German qualification?', a: 'No. We award no German qualification and hold no German accreditation. The state-recognised training for developers is the three-year Fachinformatiker Ausbildung under the FIAusbV of 2020.' },
      { q: 'Can public funding pay for this course?', a: 'No. Our course is not part of any German public funding or approval scheme, so please do not plan on that.' },
      { q: 'Can you advise me on visas or work permits?', a: 'No. We give no advice on residence, visas, employment law or tax. Please ask the competent German authority or a qualified adviser.' },
      { q: 'I have no experience at all. Can I start?', a: 'Yes. The course begins with Python from the first line, then moves to web development. The free first class shows where to begin.' },
      { q: 'How long does a career change take?', a: 'It depends on your time and your starting point. Our own milestones put a first portfolio of three projects around month ten or later for someone with two classes a week and regular practice.' },
      { q: 'Will I use AI tools like Claude?', a: 'Later, and only as something to check. Our AI coding agents course is for adults of 18 and over, in line with Anthropic\'s terms for Claude. First you learn to write and test code yourself.' },
      { q: 'When are classes in German time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Early mornings and lunch breaks in Germany are ordinary hours for our mentors in India.' },
      { q: 'How do I pay from Germany?', a: 'We list fees in euro at the European Central Bank reference rate and take the payment in US dollars; your bank converts it. The first class is free.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Further reading for adults in Germany.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Our overview for every learner in Germany.' },
      { href: '/real-coding-classes', label: 'Real coding classes', p: 'What separates real coding from copying.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning in Germany', p: 'Models built and tested by hand.' },
      { href: '/coding-roadmap', label: 'Coding roadmap', p: 'What to learn, in which order.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Inside a live class.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projects built by our students.' }
    ]
  },

  start: {
    h2: 'Book a free first class and talk it through',
    lede: 'Tell the mentor what you do now and what you hope to do. They will set a short task, tell you honestly how far you are from a first portfolio project, and suggest a plan, in English and at your pace.',
    readFirst: 'To read more first, see <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or browse <a class="ag-inline-link" href="/courses">every course we run</a>.',
    note: 'Classes are live online in English, with mentors in India. WhatsApp, in English, is the quickest way to ask us anything.',
    formNote: 'No card is needed for the free first class.'
  },

  footer: {
    cols: [
      { h4: 'Career change', links: [
        { href: '/courses/full-stack-web-development-masterclass-college', label: 'Full-stack web development' },
        { href: '/courses/data-structures-algorithms-masterclass-college', label: 'Data structures and algorithms' },
        { href: '/coding-roadmap', label: 'Coding roadmap' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths in English' }
      ] }
    ],
    bottomRight: 'Test data should try to break you'
  },

  personalityCss: `
.ag-root.ag-cch .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-cch .ag-capsule { border-left-width: 6px; }
.ag-root.ag-cch .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-cch .ag-table td:nth-child(3) { font-style: italic; }
.ag-root.ag-cch .ag-code-head b { letter-spacing: 0.01em; }
`,

  dossier: {
    curriculumAuthority: 'Verordnung über die Berufsausbildung zum Fachinformatiker und zur Fachinformatikerin (FIAusbV) of 28 February 2020, BGBl. I p. 250; Berufsbildungsgesetz section 45; both gesetze-im-internet.de, read 3 November 2026. Statistisches Bundesamt, Gemeindeverzeichnis GV-ISys, 31 December 2024. Einheitenzeitgesetz.',
    localProject: 'Test data should try to break you: an original Python project that maps 80 German cities of 100,000+ to their Land by the first two digits of the Destatis Amtlicher Regionalschlüssel. Reading codes as numbers drops the leading zero: Kiel 010020000000 comes out as Saarland, Köln and München crash (codes 53 and 91); kept as text, 0 of 6 tests fail, and 69 of 80 cities start with 0. Lesson family: choosing test data that breaks your code; identifiers with a leading zero are text.',
    requiredMentions: ['gemeinden.csv', 'FAIL Kiel -&gt; Saarland', 'FAIL Köln -&gt; no Land with code 53', 'Tests failed: 0 of 6', 'Cities whose code starts with 0: 69 of 80', 'at most 80 hours including documentation', 'Test data should try to break you', 'One and a half times three years is four and a half years'],
    sources: [
      { claim: 'Fachinformatiker training: state recognition, three years, four specialisms, project and algorithm exams.', url: 'https://www.gesetze-im-internet.de/fiausbv/BJNR025000020.html' },
      { claim: 'Admission to the final exam after one and a half times the training period in the occupation.', url: 'https://www.gesetze-im-internet.de/bbig_2005/__45.html' },
      { claim: 'Amtlicher Regionalschlüssel of the Länder and cities of 100,000+.', url: 'https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/_inhalt.html' },
      { claim: 'German legal time.', url: 'https://www.gesetze-im-internet.de/einhzeitg/' }
    ],
    rejectedClaims: [
      'Job, placement, salary or hiring-rate claims: none made.',
      'Public funding, approval or accreditation of the course: none held, and no scheme is named.',
      'Visa, residence, employment-law or tax advice: none given; readers are sent to the competent authority.',
      'That our course is equivalent to the Fachinformatiker training or prepares for its exam: not claimed.',
      'German-language teaching: we teach in English only, and the page says so.'
    ]
  }
};
