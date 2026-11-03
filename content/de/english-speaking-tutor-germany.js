'use strict';
// English-speaking tutor in Germany (ag- English door, Germany cluster P2 row DE019): maths and coding taught in English.
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Angle: the family that types "english speaking tutor germany". Who they are (pupils at international schools, in
// Berlin's bilingual and SESB streams, English-speaking pupils at ordinary German schools), where English is already a
// teaching language in Germany (official figures only), what German school asks of a pupil in words (the KMK process
// competences), how little Informatik some Länder give, then our path in maths and coding. Lesson family: explain each
// line aloud (rubber-duck debugging), shown on a small program that converts German class times to India time.
// Sources (raw):
//  - FACTS.md section 5: AGIS homepage "unserer 23 Mitgliedsschulen" (245); "Kinder aus bis zu 65 verschiedenen Nationen
//    zusammen und nutzen Englisch als gemeinsame Sprache im Unterricht" (250); all members authorised IB schools (247);
//    KMK Eurydice dossier "die fünf Europäischen Schulen bieten ein europäisches Unterrichtsmodell an" (255).
//  - FACTS.md section 3: ESA/MSA maths standards, six process competences incl. "Mathematisch kommunizieren" (123); Abitur
//    standards "Mathematisch argumentieren (K1)" (127); standards binding in all Länder (121).
//  - FACTS.md section 2 (GI Informatik-Monitor 2026/27): six Länder with no Informatik compulsory for all: Berlin,
//    Brandenburg, Bremen, Hessen, Rheinland-Pfalz, Sachsen-Anhalt (92); about 15% of Oberstufe pupils take Informatik (97);
//    Bremen compulsory from 2027/28 (94); Rheinland-Pfalz from 2028/29 (95).
//  - New raw fetches 3 Nov 2026, src-pages/english-speaking-tutor-germany/ (berlin.de, Senatsverwaltung für Bildung):
//    staatliche-europaschule.html: "1992 hat die Staatliche Europa-Schule Berlin mit 160 Schülerinnen und Schülern in sechs
//    Grundschulen mit drei verschiedenen Sprachkombinationen begonnen: Deutsch-Englisch, Deutsch-Französisch und
//    Deutsch-Russisch. Heute besuchen mehr als 6000 Schülerinnen und Schüler die 18 Grundschulen und 15 weiterführenden
//    Schulstandorte mit insgesamt neun Sprachkombinationen."; "Zweisprachiger Unterricht ab der 1. Klasse".
//    bilinguale-bildung.html: "in einer Fremdsprache (Englisch, Französisch oder Spanisch)"; "Das bilingual unterrichtete
//    Sachfach ersetzt das in deutscher Sprache unterrichtete Sachfach. Die inhaltlichen Rahmenplanvorgaben sind dabei
//    identisch."; "Die rund 50 weiterführenden Schulen mit bilingualen Unterrichtskonzepten in Berlin werden seit dem
//    Schuljahr 2022/23 ... den drei verschiedenen Grundmodellen A, B und C zugeordnet"; certificate "nach Beendigung der
//    10. Klasse oder nach Beendigung der Oberstufe".
//    schulwechsel.html: "Am Gymnasium müssen die Schüler mindestens zwei Fremdsprachen lernen."
//  - Time: Einheitenzeitgesetz; summer time ended 25 October 2026, begins 28 March 2027; India UTC+5:30.
// Our own code, run with python3 -I (scratchpad de/w/G5/py/est1.py and est2.py):
//    est1 prints "2026-11-03 16:15 Berlin -> 20:45 India" and "2027-04-15 16:15 Berlin -> 20:45 India"
//    est2 prints "2026-11-03 16:15 Berlin -> 20:45 India" and "2027-04-15 16:15 Berlin -> 19:45 India"
// Lesson family: explain each line aloud, in plain English, until the bug explains itself.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'from datetime import datetime, timedelta',
  '',
  'def india_time(berlin):',
  '    return berlin + timedelta(hours=4, minutes=30)',
  '',
  'for day in ["2026-11-03 16:15", "2027-04-15 16:15"]:',
  '    berlin = datetime.fromisoformat(day)',
  '    print(day, "Berlin ->", india_time(berlin).strftime("%H:%M"), "India")'
].join('\n');

const V2 = [
  'from datetime import datetime',
  'from zoneinfo import ZoneInfo',
  '',
  'BERLIN = ZoneInfo("Europe/Berlin")',
  'KOLKATA = ZoneInfo("Asia/Kolkata")',
  '',
  'def india_time(berlin):',
  '    return berlin.replace(tzinfo=BERLIN).astimezone(KOLKATA)',
  '',
  'for day in ["2026-11-03 16:15", "2027-04-15 16:15"]:',
  '    berlin = datetime.fromisoformat(day)',
  '    print(day, "Berlin ->", india_time(berlin).strftime("%H:%M"), "India")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'door', label: 'English-speaking tutor' },
  slug: 'english-speaking-tutor-germany',
  code: 'est',
  accent: '#1E5577',
  accentRationale: 'English-speaking tutor: a harbour blue #1E5577, the colour of a dictionary spine, distinct from the plum of the maths tutor page and the slate of the Abitur page; it clears 4.5:1 on the paper and all three tints (the build checks it)',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'English-speaking tutor in Germany',
  title: 'English-Speaking Tutor in Germany: Maths and Coding, Live',
  description: 'An English-speaking tutor in Germany for maths and coding: live online classes in English for pupils at international, bilingual and German schools, from age 6.',
  ogDescription: 'Maths and coding taught live in English for children and teenagers in Germany: where English is already a school language, what German schools ask, and how our mentors teach.',
  twitterDescription: 'An English-speaking maths and coding tutor for families in Germany, live online, group or one to one.',
  pageName: 'English-Speaking Tutor in Germany',
  webPageDescription: 'A page for families in Germany who want a tutor who speaks English: where English is a teaching language in German schools today (AGIS international schools, the Staatliche Europa-Schule Berlin, Berlin bilingual streams), what the KMK maths standards ask of pupils in words, how much Informatik each Land gives, and an original coding lesson on explaining code aloud.',
  courseDescription: 'Live online maths and coding tutoring in English for learners in Germany aged 6 and over: school maths from Grundschule to Oberstufe, Scratch and Python, Informatik support and international curricula, with one regular mentor, in a group or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'English-speaking tutor',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#who', label: 'Who' },
    { href: '#schools', label: 'School' },
    { href: '#words', label: 'Maths' },
    { href: '#coding', label: 'Coding' },
    { href: '#aloud', label: 'Lesson' }
  ],
  eyebrow: 'Germany &middot; Maths and coding in English &middot; Ages 6 and up',
  h1: 'English-speaking tutor in Germany',
  lede: 'Some children in Germany learn every subject in English at an international school. Others learn half their day in English in a bilingual stream, and many more speak English at home and German at school. All of them sometimes need a tutor who explains things in the language they think in. That is what we do: maths and coding, taught live in English, by mentors who listen closely and adjust to how each learner speaks.',
  secondaryCta: { href: '#who', label: 'Who it is for' },
  wa: 'Hello Modern Age Coders, we live in Germany and are looking for an English-speaking tutor for maths or coding. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students worldwide &middot; maths and coding, same mentor every week',
  spec: [
    ['For', 'Children, teenagers and adults in Germany'],
    ['Subjects', 'Maths, coding, Informatik'],
    ['Schools', 'International, bilingual or German'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Times', 'Weekday afternoons and weekend mornings, German time'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders is an English-speaking tutor for families in Germany: live online maths and coding classes in English for learners aged 6 and up, at international schools, bilingual streams or ordinary German schools. Mentors based in India match each learner\'s pace and accent, follow the school curriculum, and teach in a group of fifteen to twenty or one to one.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses taught in English for learners in Germany',
    lede: 'One for younger children who are new to coding, one for teenagers who want a real programming language, and one for school maths from Klasse 9 upward.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'EST / 01', title: 'Coding for kids', note: 'Ages 6 to 12. Scratch and block coding to games, animations and first apps, all explained in spoken English.' },
      { course: 'python-complete-masterclass-teens', code: 'EST / 02', title: 'Python for teens', note: 'Ages 13 to 18. Variables to classes and files, with small projects that run on the learner\'s own computer.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'EST / 03', title: 'High school maths', note: 'From algebra to calculus, for Klasse 9 to the Oberstufe or the international equivalents.' }
    ]
  },

  sections: [
    {
      id: 'who',
      eyebrow: 'Who it is for',
      h2: 'Who looks for an English-speaking tutor in Germany?',
      lede: 'Families who search for this usually fall into one of four groups. They want the same thing, a tutor who explains in English, for different reasons.',
      body: [
        { kind: 'three', cells: [
          { h3: 'International school pupils', p: 'Taught in English all day, often in the IB, IGCSE, A level or American programmes. They want help in the language of their own lessons.' },
          { h3: 'Bilingual and SESB pupils', p: 'Learning some subjects in English at a German state school, and wanting more English practice in maths and computing.' },
          { h3: 'English at home, German at school', p: 'Following the German curriculum in German, but understanding a new idea faster when it is explained in English first.' }
        ] },
        { kind: 'p', mt: true, html: 'The fourth group is adults: parents, students and professionals in Germany who want to learn programming and prefer to do it in English, the language most programming documentation is written in. Our adult courses are a separate track; this page is mostly about children and teenagers.' },
        { kind: 'p', html: 'What all four groups share is a need that ordinary tutoring in Germany is not set up to meet. A tutor who works in German can explain a Bruch or a Schleife perfectly, but the explanation itself is a second hurdle for a child who thinks in English. Our mentors remove that hurdle: they explain in English, slowly when needed, and then give the German term so the child can find it again in a school book.' },
        { kind: 'two', mt: true,
          leftH3: 'What we teach',
          left: [
            'Maths at every level from Grundschule to the Oberstufe, and the international equivalents, IB, IGCSE and A level.',
            'Coding from Scratch to Python, Java and web development, and support for school Informatik in the Länder where it is taught.'
          ],
          rightH3: 'What we do not teach',
          right: [
            'We do not teach German, English as a foreign language, or other school subjects such as history or chemistry.',
            'We do not teach in German. Every class is in English, and German words appear only where a pupil needs them for school.'
          ] }
      ]
    },
    {
      id: 'schools',
      eyebrow: 'English at school',
      h2: 'Where is English already a teaching language in German schools?',
      lede: 'There is no national count of pupils taught in English, but official and association sources give a clear picture of the main settings. These are the figures each one publishes about itself.',
      body: [
        { kind: 'table', numCols: [], caption: 'Settings in Germany where pupils learn subjects in English, as described by their own sources', head: ['Setting', 'What it is', 'Size, as published', 'Source'], rows: [
          ['AGIS international schools', 'Independent, non-profit schools; all members are authorised IB schools', '23 member schools (homepage); children from up to 65 nations; English the common teaching language', 'AGIS, agis-schools.org'],
          ['Staatliche Europa-Schule Berlin (SESB)', 'Two-language state schooling from Klasse 1, in nine language pairs including German and English', 'More than 6,000 pupils at 18 primary and 15 secondary sites; started in 1992 with 160 pupils', 'Berlin Senate education department'],
          ['Bilingual streams in Berlin', 'Single subjects taught in English, French or Spanish to the same Rahmenplan', 'About 50 secondary schools, sorted into models A, B and C since 2022/23', 'Berlin Senate education department'],
          ['European Schools', 'A European teaching model', 'Five in Germany', 'KMK, Eurydice dossier']
        ] },
        { kind: 'source', html: 'Sources: AGIS homepage and "Wer wir sind" page, read 2 November 2026 (the school finder on the second page shows 20 schools, so the count depends on the page); berlin.de, Staatliche Europa-Schule and Bilinguale Bildung pages, read 3 November 2026; the KMK\'s Eurydice dossier on German education. Other Länder run bilingual streams too; we quote Berlin because its figures are published in one place.' },
        { kind: 'p', mt: true, html: 'One sentence on the Berlin page matters for tutoring. In a bilingual stream the subject taught in English replaces the same subject taught in German, and the curriculum content is identical. A pupil in such a stream is not learning less, only learning it in another language, and the same is true of our classes: we teach the Land\'s or the school\'s own syllabus, in English.' },
        { kind: 'p', html: 'The SESB says its model, two equal teaching languages from Klasse 1, is unique in Germany. Children in it often have one strong language and one growing one. A tutor in the strong language can secure the maths or the logic first, so that school can add the second language on top of an idea that is already understood.' },
        { kind: 'p', html: 'International schools are named here only as context. We are not connected with AGIS, the SESB, the European Schools or any school, and none of them refers pupils to us.' }
      ]
    },
    {
      id: 'words',
      eyebrow: 'Maths in words',
      h2: 'Why does a maths tutor need to speak the child\'s language?',
      lede: 'Because German school maths is graded on words as well as numbers. The national standards say so in their own lists.',
      body: [
        { kind: 'p', html: 'The KMK maths standards for the Klasse 9 and Klasse 10 certificates, in the version of 23 June 2022, name six process competences, and they are binding in every Land. The first is <em>Mathematisch kommunizieren</em>, communicating mathematically; the others are solving problems, modelling, representing, working with mathematical objects, and working with media. At Abitur level the first general competence is <em>Mathematisch argumentieren</em> (K1), arguing mathematically. A pupil can know every formula and still lose marks on a task that says "begründen Sie" if she cannot put the reason into a sentence.' },
        { kind: 'p', html: 'Reasoning is easiest to learn in the language you think in. So we practise it in English: the pupil says the reason aloud, the mentor asks "why?" once more, and only then is the sentence written down. Here is a short example of the kind we use, our own.' },
        { kind: 'two', mt: true,
          leftH3: 'Claim, then reason',
          left: [
            '<strong>Claim.</strong> The sum of two odd numbers is always even.',
            '<strong>A first answer.</strong> "3 + 5 = 8 and 7 + 9 = 16, so it is true." That is two examples, not a reason; a teacher would give little credit.',
            '<strong>A reason, said aloud.</strong> "An odd number is one more than an even number. Two odd numbers are two even numbers plus 1 plus 1, and 1 + 1 = 2, so the total is even plus even plus 2, which is even."'
          ],
          rightH3: 'And in symbols',
          right: [
            'Write the two odd numbers as 2m + 1 and 2n + 1. Their sum is 2m + 2n + 2 = 2(m + n + 1), a multiple of 2.',
            'The spoken reason and the algebra are the same argument. The spoken one comes first because a child can test it by saying it, and a sentence that sounds wrong usually is wrong.',
            'In German the task would read "Begründen Sie, dass ...", and the pupil now has the argument ready to write in either language.'
          ] }
      ]
    },
    {
      id: 'coding',
      eyebrow: 'Coding',
      h2: 'Do German schools teach coding, and is English help useful there too?',
      lede: 'Informatik is spreading Land by Land, but unevenly. The Gesellschaft für Informatik tracks it each year in its Informatik-Monitor.',
      body: [
        { kind: 'p', html: 'For the school year 2026/27 the Informatik-Monitor counts six Länder where no Informatik lesson is required of every pupil. They are Berlin and Brandenburg, Bremen and Hessen, Rheinland-Pfalz and Sachsen-Anhalt. Two of the six have dates for a change: Bremen intends compulsory Informatik in all its schools from the school year 2027/28, Rheinland-Pfalz a year later, in 2028/29. In the Oberstufe, the monitor reports that about 15 % of pupils across Germany take Informatik in the Qualifikationsphase.' },
        { kind: 'p', html: 'So a child in Berlin or Hessen may reach Klasse 10 with very little programming at school, while a child in a Land with compulsory Informatik meets it as a graded subject, taught in German. Both are reasons families come to us. For the first, we are the place where coding happens at all. For the second, we explain in English what the Informatik lesson covered, and then let the pupil build something with it.' },
        { kind: 'p', html: 'There is also a plain practical reason. The keywords of Python and Java are English words, error messages are in English, and so is almost every guide a young programmer will search for. A learner who is taught to read <code>for</code>, <code>while</code> and <code>return</code> as ordinary English sentences reads code faster.' }
      ]
    },
    {
      id: 'aloud',
      tint: 'tint',
      eyebrow: 'A lesson',
      h2: 'What does explaining code aloud look like in a real class?',
      lede: 'Programmers call it rubber-duck debugging: you explain your program, line by line, to someone (or something) that knows nothing, and the bug often shows itself while you talk. This is one of our own lessons for teenagers, built on a question every family in Germany working with India asks: what time is the class for the mentor?',
      body: [
        { kind: 'code', label: 'Version 1: add four and a half hours', lang: 'Python', code: V1, note: 'It prints <code>2026-11-03 16:15 Berlin -&gt; 20:45 India</code> and <code>2027-04-15 16:15 Berlin -&gt; 20:45 India</code>.' },
        { kind: 'p', mt: true, html: 'The program runs and gives two answers that look reasonable. The mentor asks the pupil to explain the function in English, one line at a time. "It takes the Berlin time and adds four hours and thirty minutes, because India is four and a half hours ahead." The mentor asks: always? And the pupil, saying the word "always" aloud, stops. In summer Germany moves its clocks forward and India does not. The second date, 15 April 2027, is in German summer time, when the gap is only three and a half hours.' },
        { kind: 'code', label: 'Version 2: let the time-zone database decide', lang: 'Python', code: V2, note: 'It prints <code>2026-11-03 16:15 Berlin -&gt; 20:45 India</code> and <code>2027-04-15 16:15 Berlin -&gt; 19:45 India</code>.' },
        { kind: 'p', mt: true, html: 'The fix is to stop doing the arithmetic by hand. Python\'s <code>zoneinfo</code> module knows the rules for Europe/Berlin and Asia/Kolkata, including the dates when Germany changes its clocks, so the second answer moves to 19:45. The bug was never in the syntax. It was in an assumption, "always four and a half hours", and assumptions hide most easily in code nobody has explained out loud.' },
        { kind: 'table', mt: true, numCols: [], caption: 'The same three lessons on the learner\'s clock and the mentor\'s clock, worked out with version 2', head: ['Learner in Germany', 'Mentor in India, until 27 March 2027', 'Mentor in India, from 28 March 2027'], rows: [
          ['Weekday 15:15', '19:45', '18:45'],
          ['Weekday 17:15', '21:45', '20:45'],
          ['Sunday 10:15', '14:45', '13:45']
        ] },
        { kind: 'source', html: 'German clocks follow the Einheitenzeitgesetz: MEZ, one hour ahead of UTC, from 25 October 2026, and MESZ, two hours ahead, from 28 March 2027. Indian Standard Time is fixed at five and a half hours ahead of UTC with no summer change. We show the rows only to explain the conversion; they are not set batch times.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Read the line aloud as a sentence.</strong> "Return the Berlin time plus four hours thirty."',
          '<strong>Ask whether the sentence is always true.</strong> Words like always, never and every are where hidden assumptions live.',
          '<strong>Test the case that would break it.</strong> Here, one date in winter and one in summer.',
          '<strong>Fix the assumption, not the symptom.</strong> Do not add a special case for April; use the rule that already exists.'
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How a learner grows with an English-speaking tutor',
    lede: 'Our own stages, for maths and coding side by side. Most learners move through one stage in two to four months of two classes a week.',
    table: { caption: 'Stages in maths and coding with a mentor (ours)', head: ['Stage', 'In maths, the learner can', 'In coding, the learner can'], rows: [
      ['1. Follow', 'Follow a worked example and repeat it', 'Change a program and predict what happens'],
      ['2. Explain', 'Say in English why each step is allowed', 'Explain a program line by line'],
      ['3. Argue', 'Give a reason that would convince a teacher', 'Find a bug by testing a case that should break it'],
      ['4. Transfer', 'Write the same reason in German for school', 'Read error messages and documentation alone']
    ] },
    left: { h3: 'For parents', ps: [
      'You do not need to speak German or know Python to follow progress. The mentor tells you in English which stage your child has reached and what comes next.',
      'If your child also has German-language tutoring for another subject, that is no problem: our classes cover maths and coding only.'
    ] },
    right: { h3: 'For learners', ps: [
      'When you are stuck, say what you have tried, in full sentences. Half the time the answer arrives while you are talking.',
      'Keep the German school words in a list, but do your thinking in whichever language is faster.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses taught in English',
    lede: 'All live, all in English, each with one regular mentor; choose a group or one to one.',
    bands: [
      { num: 'I', h3: 'School maths', sub: 'Ages 6 to 16', courses: [
        { code: 'EST / MATH / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'Number, shape and measure for the first school years.' },
        { code: 'EST / MATH / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school maths', blurb: 'Fractions to functions, the Klasse 5 to 10 ground.' },
        { code: 'EST / MATH / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Data and chance with real reasoning.' }
      ] },
      { num: 'II', h3: 'Coding', sub: 'Ages 7 to 16', courses: [
        { code: 'EST / CODE / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Games and stories built from blocks.' },
        { code: 'EST / CODE / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Turtle art, games and first smart projects.' },
        { code: 'EST / CODE / 03', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik Companion', blurb: 'School Informatik from Klasse 5 to 10, in English.' }
      ] },
      { num: 'III', h3: 'Exams and curricula', sub: 'Ages 14 to 19', courses: [
        { code: 'EST / EXAM / 01', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Maths AA and AI', blurb: 'SL and HL, with internal assessment coaching.' },
        { code: 'EST / EXAM / 02', slug: 'igcse-computer-science-0478-course', title: 'IGCSE Computer Science', blurb: 'The 0478 syllabus and its programming paper.' },
        { code: 'EST / EXAM / 03', slug: 'informatik-abitur-course-java-python', title: 'Informatik Abitur', blurb: 'Java and Python for the German Oberstufe.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live classes with an English-speaking tutor work',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Each class is a live video lesson of about an hour, two a week, with screen sharing and a shared whiteboard or code editor.',
    slots: [
      { time: 'Weekdays', l: 'German afternoons and early evenings, after school and homework.' },
      { time: 'Weekends', l: 'Saturday or Sunday mornings, when mentors in India are in their afternoon.' },
      { time: '1-on-1', l: 'A slot agreed with you, moved when school or holidays need it.' }
    ],
    cells: [
      { h3: 'Spoken English', p: 'Clear, unhurried, adjusted to the learner\'s accent.' },
      { h3: 'German terms', p: 'Given where school needs them, never instead of an explanation.' },
      { h3: 'Talk it through', p: 'Learners explain their reasoning aloud every class.' },
      { h3: 'Real tools', p: 'Python, Scratch and editors the learner keeps using.' },
      { h3: 'Parent notes', p: 'Short, in English, after each month.' },
      { h3: 'Group or solo', p: 'Fifteen to twenty learners, or one to one.' }
    ]
  },

  projectsH2: 'Projects our students have built',
  projectsLede: 'Everything here was made by our students in English-language classes. More are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews from parents and students, word for word.',

  fees: {
    h2: 'Fees for English-language tutoring in Germany',
    lede: 'You pay per month, for eight live classes. The figure on this page is in euro at the European Central Bank reference rate; the payment is processed in US dollars, which your bank converts at its own rate, so the final euro amount can vary a little.',
    free: ['A free first class in English', 'A short check of level in maths or coding', 'No card needed'],
    group: ['Fifteen to twenty learners at a similar level', 'One regular mentor', 'Two live classes a week', 'Pay month by month'],
    one: ['One learner, one mentor', 'Pace set entirely by the learner', 'Times that suit your family']
  },

  faq: {
    eyebrow: 'Families ask',
    h2: 'An English-speaking tutor in Germany: questions families ask',
    items: [
      { q: 'Is there an English-speaking maths and coding tutor in Germany?', a: 'Yes. Modern Age Coders teaches maths and coding live online in English to learners across Germany, from age 6. Classes follow your child\'s school, whether international, bilingual or German, and run in a group or one to one.' },
      { q: 'Are the classes in German?', a: 'No. Every class is live and in English only. Mentors speak clearly, match the learner\'s pace and accent, and add the German school word only where a pupil needs it for tests or homework.' },
      { q: 'Can you help a child at a German school who thinks in English?', a: 'Yes, that is one of the most common reasons families come to us. The mentor explains the idea in English, then shows the German term and the German way of writing it, so the pupil recognises it in class.' },
      { q: 'Do you help pupils at international schools?', a: 'Yes. We teach IB maths, IGCSE maths and computer science, A level maths and AP computer science, all in English. We are not connected with any school, and we name schools only as context.' },
      { q: 'Is Informatik compulsory in every German Land?', a: 'No. The Informatik-Monitor 2026/27 of the Gesellschaft für Informatik names six Länder where Informatik is not yet required for all pupils: Berlin and Brandenburg, Bremen and Hessen, Rheinland-Pfalz and Sachsen-Anhalt.' },
      { q: 'What is the Staatliche Europa-Schule Berlin?', a: 'A Berlin state school model with two teaching languages from Klasse 1. The Berlin education department says more than 6,000 pupils attend its 18 primary and 15 secondary sites, in nine language pairs including German and English.' },
      { q: 'What times are possible?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. In German winter our mentors\' clocks show four and a half hours later than yours; in German summer, three and a half.' },
      { q: 'Where are the tutors?', a: 'In India. They teach from there, live over video, and a learner is not passed between tutors: the mentor who starts with your child stays with them.' },
      { q: 'Can adults learn too?', a: 'Yes. We teach adults in Germany Python, web development, data and AI in English, in separate adult groups or one to one.' },
      { q: 'How much does it cost?', a: 'Look for the monthly figure in the fees section: it is a euro conversion at the ECB reference rate. The charge goes through in US dollars and your own bank turns it into euro. Nothing is charged for the first class, and we do not ask for a card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for English-speaking families in Germany.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'All our Germany pages in one place.' },
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'The German Abitur maths exam, explained in English.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'School computer science support, page in German.' },
      { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids in Berlin', p: 'For Berlin families with younger children.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live class from start to finish.' }
    ]
  },

  start: {
    h2: 'Book a free first class in English',
    lede: 'Tell us whether it is maths or coding, and the age and school of the learner. In the first class the mentor talks through a few short tasks, listens to how the learner explains them, and suggests a starting point.',
    readFirst: 'Prefer to read before booking? Our page on <a class="ag-inline-link" href="/how-we-teach">teaching methods</a> walks through one lesson, and the <a class="ag-inline-link" href="/courses/kids-coding-blocks-masterclass">coding for kids syllabus</a> shows a typical course.',
    note: 'All classes are live, online and in English only, with mentors in India. WhatsApp is the quickest way to reach us.',
    formNote: 'Free, with no card and no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Courses', links: [
        { href: '/courses/kids-coding-blocks-masterclass', label: 'Coding for kids' },
        { href: '/courses/python-complete-masterclass-teens', label: 'Python for teens' },
        { href: '/courses/complete-high-school-mathematics-mastery', label: 'High school maths' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths in English' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Say it aloud, then write it down'
  },

  personalityCss: `
.ag-root.ag-est .ag-hero h1 { letter-spacing: -0.008em; }
.ag-root.ag-est .ag-capsule { border-left-width: 4px; border-radius: 2px; }
.ag-root.ag-est .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-est .ag-grid-3 h3 { font-weight: 600; }
.ag-root.ag-est .ag-code-note { font-style: italic; }
`,

  dossier: {
    curriculumAuthority: 'AGIS homepage and Wer wir sind page; berlin.de Staatliche Europa-Schule, Bilinguale Bildung and Schulwechsel pages; KMK Eurydice dossier; KMK maths standards ESA/MSA 2022 and Abitur 2012; GI Informatik-Monitor 2026/27. Read 2 and 3 November 2026. Code and the reasoning example our own.',
    localProject: 'An original rubber-duck lesson: a Python function that converts German class times to India time by adding four and a half hours, explained aloud line by line until the summer-time assumption shows, then fixed with zoneinfo (16:15 Berlin on 15 April 2027 becomes 19:45 in India, not 20:45). Lesson family: explain each line aloud.',
    requiredMentions: ['18 primary and 15 secondary sites', 'started in 1992 with 160 pupils', 'About 50 secondary schools, sorted into models A, B and C', 'children from up to 65 nations', '2(m + n + 1)', '2027-04-15 16:15 Berlin -&gt; 19:45 India', 'rubber-duck debugging', 'Say it aloud, then write it down'],
    sources: [
      { claim: 'SESB history, pupils, sites, language pairs.', url: 'https://www.berlin.de/sen/bildung/schule/besondere-schulangebote/staatliche-europaschule/' },
      { claim: 'Berlin bilingual streams: languages, same curriculum, about 50 schools, models A to C.', url: 'https://www.berlin.de/sen/bildung/schule/besondere-schulangebote/bilinguale-bildung/' },
      { claim: 'AGIS: 23 members, up to 65 nations, English common language.', url: 'https://www.agis-schools.org/' },
      { claim: 'AGIS: all members authorised IB schools; finder shows 20.', url: 'https://www.agis-schools.org/wer-wir-sind' },
      { claim: 'Six Länder without compulsory Informatik; 15% in Oberstufe; Bremen and RLP plans.', url: 'https://informatik-monitor.de/' },
      { claim: 'Process competences in the ESA/MSA maths standards.', url: 'https://www.kmk.org/fileadmin/Dateien/veroeffentlichungen_beschluesse/2022/2022_06_23-Bista-ESA-MSA-Mathe.pdf' }
    ],
    rejectedClaims: [
      'A national number of pupils taught in English: none published; only each setting\'s own figures are given.',
      'International-school pupil counts: no official source (MARKET.md 1.5).',
      'That bilingual streams teach maths in English: the Berlin page does not say which subjects; not claimed.',
      'Any referral or connection with AGIS, the SESB, the European Schools or a school: none.',
      'German-language teaching: refused; classes are in English only.'
    ]
  }
};
