'use strict';
// IB Computer Science tutor in Germany (ag- English door, Germany cluster P2 row DE021).
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Angle: an IB Diploma pupil at a school in Germany who takes Computer Science needs to know how the German side reads
// the diploma. The KMK recognition agreement lists Computer Science only among the subjects for the sixth slot, never
// as the natural science, so the subject plan matters. We teach the subject; the school and the IB award the diploma.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/ib-computer-science-tutor-germany/):
//  - KMK, Vereinbarung über die Anerkennung des "International Baccalaureate Diploma/Diplôme du Baccalauréat
//    International" (Beschluss der Kultusministerkonferenz vom 10.03.1986 i. d. F. vom 15.06.2023), Anlage 1 Stand
//    26.03.2026 (kmk-ib/5c09f317.pdf, fetched 2 Nov 2026 for FACTS.md 252). Quotes grepped from 5c09f317.txt:
//    "nach einem Besuch von mindestens zwölf aufsteigenden Jahrgangsstufen"; "Unter den sechs Prüfungsfächern";
//    "zwei Sprachen auf dem Niveau A oder B"; "ein naturwissenschaftliches Fach (Biology, Chemistry, Physics)";
//    "ein gesellschaftswissenschaftliches Fach (History, Geography, Economics, Psychology, Philosophy, Social
//    Anthropology, Business and Management, Global Politics)"; sixth-subject list includes "Computer Science, Design
//    Technology, World Religions, Sports Exercise and Health Science, Digital Society"; HL rule "muss entweder eine
//    Sprache, Mathematik oder ein naturwissenschaftliches Fach" ("Gilt ab Prüfung 2025"); "durchgängig, d. h.
//    zweijährig aufsteigend"; "mindestens mit der IB-Note 4"; one 3 offset by "mindestens die IB-Note 5 und insgesamt
//    mindestens 24 Punkte"; average formula with "42 Punkten als maximaler Punktzahl (Pmax)" and "24 Punkten als
//    minimaler Punktzahl (Pmin)", 42 to 45 points = 1,0; maths SL footnote 3 (subject-restricted access outside the
//    mathematisch-naturwissenschaftlich-technischen Bereich unless the school is in Anlage 1 or 2); Anlage 1 lists
//    59 schools under DEUTSCHLAND (numbered 1 to 59, the document's own numbering).
//  - AGIS homepage and Wer wir sind (FACTS.md 247, 248, 250): all member schools authorised IB schools; IB Diploma
//    (with prescribed combinations) gleichwertig with the Abitur; children from up to 65 nations, English as the common
//    teaching language.
//  - Time: Einheitenzeitgesetz; summer time ended 25 October 2026, begins 28 March 2027.
//  - ibo.org: Cloudflare challenge (BLOCKED.md); no IB syllabus or exam figures used on this page.
// Our own code (scratchpad de/w/G6/ico_v1.py, ico_v2.py, python3 -I): Pupil A meets the subject rules; Pupil B
// "needs Biology, Chemistry or Physics; no HL in a language, maths or a science"; Pupil C "Robotics is not on our copy
// of the lists". Averages: 45 and 42 -> 1.0, 38 -> 1.67, 33 -> 2.5, 29 -> 3.17, 24 -> 4.0.
// Lesson family: turn a rulebook into code, then test it with cases that should fail.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'SCIENCE = {"Biology", "Chemistry", "Physics"}',
  'MATHS = {"Maths AA", "Maths AI"}',
  'SOCIAL = {"History", "Geography", "Economics", "Psychology", "Philosophy",',
  '          "Social and Cultural Anthropology", "Business and Management", "Global Politics"}',
  'SIXTH = {"Computer Science", "Visual Arts", "Music", "Theatre", "Latin",',
  '         "Design Technology", "Digital Society", "Sports Exercise and Health Science"}',
  '',
  'def check(plan):',
  '    problems = []',
  '    langs = [s for s in plan if s[0].startswith("Lang")]',
  '    if len(langs) < 2:',
  '        problems.append("needs two languages")',
  '    if not any(s[0] in SCIENCE for s in plan):',
  '        problems.append("needs Biology, Chemistry or Physics")',
  '    if not any(s[0] in MATHS for s in plan):',
  '        problems.append("needs a maths course")',
  '    if not any(s[0] in SOCIAL for s in plan):',
  '        problems.append("needs a social science")',
  '    known = SCIENCE | MATHS | SOCIAL | SIXTH',
  '    for s in plan:',
  '        if not s[0].startswith("Lang") and s[0] not in known:',
  '            problems.append(s[0] + " is not on our copy of the lists")',
  '    core = [s for s in plan if s[0] in SCIENCE | MATHS or s[0].startswith("Lang")]',
  '    if not any(s[1] == "HL" for s in core):',
  '        problems.append("no HL in a language, maths or a science")',
  '    return problems or ["meets the subject rules"]',
  '',
  'pupil_a = [("Lang A English", "HL"), ("Lang B German", "SL"), ("Maths AA", "HL"),',
  '           ("Physics", "SL"), ("Economics", "SL"), ("Computer Science", "HL")]',
  'pupil_b = [("Lang A English", "SL"), ("Lang B German", "SL"), ("Maths AI", "SL"),',
  '           ("Computer Science", "HL"), ("Economics", "HL"), ("Visual Arts", "HL")]',
  'pupil_c = [("Lang A English", "HL"), ("Lang B German", "SL"), ("Maths AA", "SL"),',
  '           ("Chemistry", "HL"), ("Geography", "SL"), ("Robotics", "HL")]',
  'for name, plan in [("A", pupil_a), ("B", pupil_b), ("C", pupil_c)]:',
  '    print("Pupil", name + ":", "; ".join(check(plan)))'
].join('\n');

const V2 = [
  'P_MAX, P_MIN = 42, 24',
  '',
  'def german_average(points):',
  '    if points >= P_MAX:',
  '        return 1.0',
  '    return 1 + 3 * (P_MAX - points) / (P_MAX - P_MIN)',
  '',
  'for points in (45, 42, 38, 33, 29, 24):',
  '    print(points, "IB points ->", round(german_average(points), 2))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'door', label: 'IB Computer Science tutor' },
  slug: 'ib-computer-science-tutor-germany',
  code: 'ico',
  accent: '#604073',
  accentRationale: 'IB Computer Science in Germany: a muted violet #604073, the colour of a diploma ribbon, kept apart from the AI plum, the Abitur slate and the hub green; contrast on the paper #FBF8F2 about 6.9:1 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'IB Computer Science tutor in Germany',
  title: 'IB Computer Science Tutor in Germany, Live Online in English',
  description: 'IB Computer Science tutoring in English for Diploma pupils at schools in Germany: SL and HL, the internal assessment, and how the KMK reads a diploma with CS.',
  ogDescription: 'Live IB Computer Science tutoring in English for pupils in Germany, plus what the KMK recognition rules mean for a subject plan that includes Computer Science, checked with a short Python program.',
  twitterDescription: 'IB Computer Science help in English for Diploma pupils in Germany, and the KMK subject rules explained.',
  pageName: 'IB Computer Science Tutor in Germany',
  webPageDescription: 'A guide for IB Diploma pupils in Germany who take Computer Science: how the German recognition agreement treats the subject, how IB points become a German average, where IB schools sit in Germany, and live tutoring in English.',
  courseDescription: 'Live online IB Diploma Computer Science tutoring in English for pupils at schools in Germany, SL and HL: programming, algorithms, the internal assessment and exam practice, in a group of fifteen to twenty or one to one, with one regular mentor.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'IB Computer Science tutor',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#recognition', label: 'Rules' },
    { href: '#checker', label: 'Checker' },
    { href: '#points', label: 'Grades' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Germany &middot; IB Diploma Computer Science &middot; Ages 16 to 19',
  h1: 'IB Computer Science tutor in Germany',
  lede: 'An IB pupil in Hamburg, Munich or Frankfurt studies the same Computer Science course as one in Singapore, but the diploma will later be read by German universities through a rulebook of the Kultusministerkonferenz. That rulebook has a quiet surprise for anyone who loves computing: Computer Science never counts as the science. This page explains the rule, turns the whole subject checklist into a short Python program, shows how IB points become a German average, and describes how our tutoring fits beside school.',
  secondaryCta: { href: '#recognition', label: 'Read the KMK rules' },
  wa: 'Hello Modern Age Coders, I take IB Computer Science at a school in Germany and would like tutoring in English. Could I book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students worldwide &middot; SL and HL, internal assessment included',
  spec: [
    ['For', 'IB Diploma pupils, SL and HL'],
    ['Covers', 'Programming, algorithms, theory'],
    ['Also', 'Internal assessment coaching'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['German times', 'After school and Saturdays'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'IB Computer Science tutoring for pupils in Germany at Modern Age Coders is live online teaching in English for IB Diploma students at Standard and Higher Level: programming, algorithms, computer systems theory, the internal assessment and timed exam practice, in our IB Diploma Computer Science course. One regular mentor matches your pace and accent, in a group of fifteen to twenty or one to one.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for IB pupils in Germany',
    lede: 'The Computer Science course itself, the maths course every IB plan needs, and an extended essay mentor for pupils who want to write theirs in computing.',
    items: [
      { course: 'ib-diploma-computer-science-course', code: 'ICO / 01', title: 'IB Diploma Computer Science', note: 'SL and HL. Programming taught by writing and testing real code, the theory topics, and coaching for the internal assessment.' },
      { course: 'ib-mathematics-aa-ai-masterclass', code: 'ICO / 02', title: 'IB Maths AA and AI', note: 'The maths a computing pupil leans on: logic, sequences, functions and probability, at SL or HL.' },
      { course: 'data-structures-algorithms-masterclass-college', code: 'ICO / 03', title: 'Data Structures and Algorithms', note: 'For HL pupils who finish the syllabus early and want the algorithm depth a first university year expects.' }
    ]
  },

  sections: [
    {
      id: 'recognition',
      eyebrow: 'The German side of the diploma',
      h2: 'Does IB Computer Science count as a science for German universities?',
      lede: 'No. In the KMK agreement on recognising the IB Diploma, the natural science has to be Biology, Chemistry or Physics. Computer Science appears in a different list: the subjects allowed for the sixth slot.',
      body: [
        { kind: 'two',
          leftH3: 'What the agreement asks for',
          left: [
            'The Kultusministerkonferenz first agreed how Germany recognises the IB Diploma on 10 March 1986; the version in force is dated 15 June 2023. It recognises the diploma as a university entrance qualification after at least twelve ascending school years of full-time schooling, if the six examined subjects follow a set pattern.',
            'Among the six there must be two languages at level A or B, one natural science from Biology, Chemistry and Physics, a maths course (Analysis and Approaches or Applications and Interpretation) and one social science such as History, Geography, Economics, Psychology, Philosophy, Business and Management or Global Politics.'
          ],
          rightH3: 'Where Computer Science fits',
          right: [
            'The sixth subject may be another of those, or one from a further list that names Computer Science, Design Technology, Digital Society, Sports Exercise and Health Science and others. So a pupil can take Computer Science, even at Higher Level, as long as a Biology, Chemistry or Physics course is also in the plan.',
            'From the 2025 exams, the agreement adds that among the three Higher Level subjects at least one must be a language, maths or one of the three natural sciences. Every subject must be taken continuously over the two years of the Diploma Programme.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'The six-subject pattern in the KMK agreement, and where Computer Science sits', head: ['Slot', 'What the KMK accepts', 'Computer Science here?'], rows: [
          ['Languages', 'Two languages at level A or B, at least one a continued foreign language', 'No'],
          ['Natural science', 'Biology, Chemistry or Physics', 'No'],
          ['Mathematics', 'Analysis and Approaches or Applications and Interpretation', 'No'],
          ['Social science', 'History, Geography, Economics, Psychology, Philosophy and others listed', 'No'],
          ['Sixth subject', 'Any of the above, or one of a further list', 'Yes, it is on that list'],
          ['Higher Level rule', 'At least one HL subject is a language, maths or a listed science (from 2025)', 'CS at HL does not meet this alone']
        ] },
        { kind: 'source', html: 'Source: Kultusministerkonferenz, Vereinbarung über die Anerkennung des International Baccalaureate Diploma (Beschluss vom 10.03.1986 in der Fassung vom 15.06.2023), section 1 a) to d), read 2 November 2026. The table is our summary; the agreement itself is the text that counts, and each Land applies it.' },
        { kind: 'p', mt: true, html: 'We are not connected with the KMK, the IB or any school, and nothing here is admission advice. We describe what the published agreement says so that a family can ask the right question early: a plan with Computer Science HL and no Biology, Chemistry or Physics may look ideal for a future computing degree and still fall outside the pattern. The school\'s IB coordinator and the university admissions office are the people who give the binding answer.' }
      ]
    },
    {
      id: 'checker',
      tint: 'tint',
      eyebrow: 'Our worked example',
      h2: 'Can a short Python program check an IB subject plan against the KMK pattern?',
      lede: 'Yes, and writing it is good Computer Science practice. A rulebook is a specification; a program that applies it is only trustworthy once it has been tested with plans that ought to fail.',
      body: [
        { kind: 'two',
          leftH3: 'From sentences to sets',
          left: [
            'Each list in the agreement becomes a Python set. A subject plan is a list of pairs: the subject and its level, SL or HL. The function check walks through the rules one by one and collects every problem it finds, instead of stopping at the first.',
            'Collecting all the problems is a design choice. A pupil fixing a plan wants the full list in one go, not one complaint at a time.'
          ],
          rightH3: 'Three test pupils',
          right: [
            'Pupil A has English, German, Maths AA, Physics, Economics and Computer Science. Pupil B has dropped Physics for Computer Science HL and put Higher Level on Economics and Visual Arts. Pupil C has typed a subject the lists do not contain.',
            'All three pupils are invented by us. Our copy of the lists is shortened for the example and is not the full KMK text.'
          ] },
        { kind: 'code', label: 'Our plan checker for the KMK subject pattern', lang: 'Python', code: V1, note: 'It prints <code>Pupil A: meets the subject rules</code>, then <code>Pupil B: needs Biology, Chemistry or Physics; no HL in a language, maths or a science</code> and <code>Pupil C: Robotics is not on our copy of the lists</code>.' },
        { kind: 'p', mt: true, html: 'Pupil B is the case this page exists for. Three Higher Level subjects, one of them Computer Science, and still two problems: no listed natural science, and none of the HL subjects is a language, maths or a science. Pupil C shows why the third rule matters. Without it, a misspelt or unlisted subject would pass in silence, and a checker that never says no is not a checker at all.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Run it.</strong> Copy the program, run it and confirm the three lines above before changing anything.',
          '<strong>Break it on purpose.</strong> Give Pupil A a third language instead of Economics. Predict the output first, then run it.',
          '<strong>Add a rule.</strong> The agreement wants every subject graded at least 4, with one 3 allowed if another subject at the same level or higher has at least a 5 and the total is at least 24. Add grades to each pair and write that rule.',
          '<strong>Test the edges.</strong> Write one plan that passes by exactly one point and one that fails by exactly one point. Edge cases are where real rule engines go wrong.'
        ] }
      ]
    },
    {
      id: 'points',
      eyebrow: 'Points and grades',
      h2: 'How do IB points turn into a German average grade?',
      lede: 'The agreement gives a formula. It takes 42 points as the maximum and 24 as the minimum, and every total from 42 to 45 counts as the best German average, 1.0.',
      body: [
        { kind: 'code', label: 'The KMK conversion formula, in Python', lang: 'Python', code: V2, note: 'It prints <code>45 IB points -&gt; 1.0</code>, <code>42 IB points -&gt; 1.0</code>, <code>38 IB points -&gt; 1.67</code>, <code>33 IB points -&gt; 2.5</code>, <code>29 IB points -&gt; 3.17</code> and <code>24 IB points -&gt; 4.0</code>.' },
        { kind: 'table', mt: true, numCols: [0, 1], caption: 'IB total points and the German average the formula gives (our calculation, two decimals)', head: ['IB points', 'German average'], rows: [
          ['42 to 45', '1.0'],
          ['38', '1.67'],
          ['33', '2.5'],
          ['29', '3.17'],
          ['24', '4.0']
        ] },
        { kind: 'source', html: 'Formula: KMK IB recognition agreement, section on the Durchschnittsnote: N = 1 + 3 (Pmax minus P) divided by (Pmax minus Pmin), with Pmax 42 and Pmin 24, bonus points included. The agreement says the average is worked out in the Land that assesses the certificate, under a separate 1991 KMK agreement on overall grades, which also governs how decimals are handled. We print two decimals; the official figure may be stated differently.' },
        { kind: 'p', mt: true, html: 'Two things are worth noticing as a programmer. The formula is a straight line between two fixed points, so every IB point is worth exactly one sixth of a German grade step: three grade steps spread over eighteen points. And the special case at the top, where 42 to 45 all become 1.0, has to be written as its own branch before the formula, otherwise 45 points would produce an average better than 1.0, which does not exist. Spotting that kind of boundary is exactly the habit the IB Computer Science exams reward.' }
      ]
    },
    {
      id: 'schools',
      eyebrow: 'IB schools in Germany',
      h2: 'Where do pupils in Germany take the IB Diploma?',
      lede: 'At international schools, and at a number of German state and private schools that run an IB stream alongside the Abitur.',
      body: [
        { kind: 'two',
          leftH3: 'What the association says',
          left: [
            'AGIS, the association of international schools in Germany, says all its member schools are authorised IB schools offering at least one of the four IB programmes. It describes them as bringing together children from up to 65 nations, with English as the common language of teaching.',
            'AGIS also says the IB Diploma offered at its schools is, with the prescribed subject combinations, equivalent to the German Abitur. Those prescribed combinations are the pattern in the table above.'
          ],
          rightH3: 'A list worth knowing about',
          right: [
            'The KMK agreement has an annex of schools whose graduates can gain general university access even with maths at Standard Level, because of a separate arrangement with the IB. In the annex dated 26 March 2026, the section for Germany numbers 59 schools.',
            'For a pupil elsewhere, the agreement says maths at Standard Level, from the 2021 exams on, opens only subject-restricted access to degrees outside mathematics, the sciences and engineering. That matters for anyone planning to study computing.'
          ] },
        { kind: 'source', html: 'Sources: AGIS, agis-schools.org, homepage and Wer wir sind, read 2 November 2026; KMK IB recognition agreement, footnote 3 and Anlage 1 (Stand 26.03.2026). We name no school as a source of our students and we are not connected with AGIS or any school.' },
        { kind: 'p', mt: true, html: 'Computer Science is taught at many but not all of these schools, and some offer it only at one level. Pupils sometimes come to us because their school cannot fit the subject into their timetable, sometimes because it is taught but the class moves faster than they can follow in their second or third language, and sometimes because they want the internal assessment project to be genuinely their own. Our classes are an addition to school, never a replacement: the school enters the pupil, marks the internal assessment and sends it for moderation.' }
      ]
    },
    {
      id: 'tutoring',
      eyebrow: 'What tutoring looks like',
      h2: 'What does an IB Computer Science tutor actually do each week?',
      lede: 'Mostly three things: code written live by the pupil, exam-style explanation in full sentences, and steady progress on the internal assessment.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Write, run, explain', p: 'Every class has the pupil at the keyboard. The mentor asks why a loop stops where it does before moving on.' },
          { h3: 'Exam language', p: 'IB answers are marked on precise words. We practise turning a working idea into a short, exact written answer.' },
          { h3: 'The project', p: 'For the internal assessment we coach the plan, the testing and the write-up. The code and the choices stay the pupil\'s own.' }
        ] },
        { kind: 'p', mt: true, html: 'We do not write any part of an internal assessment, and we tell pupils plainly why: the IB requires the work to be their own, and a project a pupil cannot explain is worth less to them than a modest one they can defend line by line. The same goes for AI tools. Our under-18 pupils never use tools whose providers set 18 as the minimum age; the <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a> lists each provider\'s own rule.' },
        { kind: 'table', mt: true, numCols: [], caption: 'A typical year of IB Computer Science tutoring (our plan, adjusted per pupil)', head: ['Months', 'Main focus', 'What the pupil produces'], rows: [
          ['First term of year 1', 'Programming fundamentals and tracing code by hand', 'Small tested programs and trace tables'],
          ['Rest of year 1', 'Data structures, algorithms and systems theory', 'Timed short answers, a topic summary in their own words'],
          ['Start of year 2', 'Internal assessment: problem, client, plan', 'A clear proposal and test plan'],
          ['Middle of year 2', 'Building and testing the project', 'Working product, evidence of testing'],
          ['Final months', 'Past-paper style practice under time', 'Full mock papers with feedback']
        ] },
        { kind: 'source', html: 'Our own teaching plan. The school\'s calendar and the IB deadlines it sets take priority over this plan.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When are IB Computer Science classes in German time?',
      lede: 'Pupils usually come after school or on Saturday. The mentor works from India, which is ahead of Germany by four and a half hours in winter and three and a half in summer.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example German class times and the time for the mentor in India', head: ['Germany', 'India, winter (until 28 March 2027)', 'India, summer (from 28 March 2027)'], rows: [
          ['15:45', '20:15', '19:15'],
          ['17:45', '22:15', '21:15'],
          ['Saturday 11:30', '16:00', '15:00']
        ] },
        { kind: 'source', html: 'Germany is on UTC+1 (MEZ) in winter and UTC+2 (MESZ) in summer under the Einheitenzeitgesetz; summer time ended on 25 October 2026 and starts again on 28 March 2027. India keeps UTC+5:30 all year. These rows are examples, not fixed batches.' },
        { kind: 'p', mt: true, html: 'You pick the time of the free first class in your own clock when you book. Before mock exams and the internal assessment deadline, one-to-one pupils often add a second weekly class for a few weeks and then drop back.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'From first program to a defended project',
    lede: 'Our own milestones for IB Computer Science pupils, used to place a new pupil and to report progress to families.',
    table: { caption: 'IB Computer Science milestones (ours)', head: ['Stage', 'Typical timing', 'The pupil can'], rows: [
      ['1. Reading code', 'Weeks 1 to 4', 'Trace a loop by hand and predict its output exactly'],
      ['2. Writing code', 'Months 2 to 4', 'Write and test a function from a written specification'],
      ['3. Algorithms', 'Months 4 to 9', 'Compare two solutions and say which grows faster, and why'],
      ['4. The project', 'Year 2, first half', 'Plan, build and test a product for a real client'],
      ['5. Exam ready', 'Final months', 'Answer theory and code questions in exact, short sentences']
    ] },
    left: { h3: 'For pupils', ps: [
      'Check your subject plan against the KMK pattern before the Diploma starts, not after.',
      'If a program has never failed a test, you have not tested it yet.'
    ] },
    right: { h3: 'For parents', ps: [
      'Ask the school\'s IB coordinator how the plan reads for German universities.',
      'A tutor should make your child explain their code, not hand them better code.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for IB and international pupils in Germany',
    lede: 'Each is taught live in English by a mentor who stays with the pupil, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Before the Diploma', sub: 'Ages 13 to 16', courses: [
        { code: 'ICO / PRE / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'A first language learnt properly before IB pressure starts.' },
        { code: 'ICO / PRE / 02', slug: 'igcse-computer-science-0478-course', title: 'IGCSE Computer Science', blurb: 'For pupils on a Cambridge route before the Diploma.' },
        { code: 'ICO / PRE / 03', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Classes and objects in a typed language.' }
      ] },
      { num: 'II', h3: 'Alongside the Diploma', sub: 'Ages 16 to 19', courses: [
        { code: 'ICO / DP / 01', slug: 'mysql-mastery-for-teens', title: 'SQL and databases', blurb: 'Tables, queries and design for projects with real data.' },
        { code: 'ICO / DP / 02', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub', blurb: 'Version history that shows how a project grew.' },
        { code: 'ICO / DP / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Models built and tested in Python, from 13.' }
      ] },
      { num: 'III', h3: 'Other routes in Germany', sub: 'Ages 15 to 19', courses: [
        { code: 'ICO / DE / 01', slug: 'informatik-abitur-course-java-python', title: 'Informatik for the Abitur', blurb: 'For pupils in the German Oberstufe instead.' },
        { code: 'ICO / DE / 02', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP Computer Science A', blurb: 'For pupils at American schools in Germany.' },
        { code: 'ICO / DE / 03', slug: 'cambridge-a-level-computer-science-9618-course', title: 'A Level Computer Science', blurb: 'For pupils at British schools on Cambridge 9618.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live IB Computer Science classes work from Germany',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school', l: 'Classes from mid-afternoon German time on weekdays.' },
      { time: 'Saturday', l: 'Late-morning classes for pupils with busy weeks.' },
      { time: 'One to one', l: 'A time set with the mentor that can shift around mocks.' }
    ],
    cells: [
      { h3: 'Pupil at the keyboard', p: 'Every line in class is typed by the pupil.' },
      { h3: 'IB wording', p: 'Answers practised in the short, exact style examiners mark.' },
      { h3: 'English, unhurried', p: 'Ideas explained again in other words when needed.' },
      { h3: 'One mentor', p: 'The same person from the first class to the exam.' },
      { h3: 'Honest projects', p: 'Coaching on the internal assessment, never writing it.' },
      { h3: 'Group or alone', p: 'Fifteen to twenty pupils, or one to one.' }
    ]
  },

  projectsH2: 'Work by our students',
  projectsLede: 'Programs our learners elsewhere have designed and shipped; a longer gallery lives on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'What students and parents wrote about us on Google, left as written.',

  fees: {
    h2: 'Fees for IB Computer Science tutoring in Germany',
    lede: 'One monthly fee covers eight live classes. The euro figure is calculated from the European Central Bank reference rate, while the actual charge runs in US dollars, so your bank does the conversion and your statement may show a slightly different euro amount.',
    free: ['A free first class', 'A short code-reading task to find your level', 'No card needed'],
    group: ['Fifteen to twenty IB and pre-IB pupils', 'One regular mentor', 'Two classes a week', 'Monthly, cancel when you like'],
    one: ['One pupil, one mentor', 'Paced to your school\'s calendar', 'Extra support before deadlines']
  },

  faq: {
    eyebrow: 'IB families in Germany ask',
    h2: 'IB Computer Science tutoring in Germany: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Every class is live and in English only. AGIS says English is the common teaching language at its member schools, so the classes match the language of school. The mentor adjusts to how fast the pupil works and to their accent, and explains again in other words whenever needed.' },
      { q: 'Does Computer Science count as the science subject for German recognition?', a: 'No. The KMK agreement on the IB Diploma asks for Biology, Chemistry or Physics as the natural science. Computer Science is allowed as the sixth subject. Ask your IB coordinator how your own plan reads.' },
      { q: 'Can I take Computer Science at Higher Level?', a: 'The agreement does not forbid it. From the 2025 exams, at least one of the three Higher Level subjects has to be a language, maths or Biology, Chemistry or Physics, so Computer Science HL works next to such a subject.' },
      { q: 'How are IB points converted into a German grade?', a: 'The KMK agreement uses a formula with 42 points as the maximum and 24 as the minimum, and treats 42 to 45 points as 1.0. With it, 33 points give 2.5. The Land that assesses the certificate makes the official calculation.' },
      { q: 'Do you help with the internal assessment?', a: 'We coach it: choosing a problem, planning, testing and writing up. We never write code or text for it. The work has to be the pupil\'s own, and the school marks it.' },
      { q: 'Are you connected with the IB or my school?', a: 'No. We are an independent online school. We do not enter pupils for exams or award grades; the school and the IB do that.' },
      { q: 'Which programming language do you teach?', a: 'The language your school uses for the course. Many IB schools teach Python or Java, and we teach both. Ask the school which one its Computer Science teachers use.' },
      { q: 'When are classes in German time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Most IB pupils come after school or on Saturday mornings.' },
      { q: 'How do I pay?', a: 'You see euro on this page, worked out from the ECB reference rate; the card payment itself is made in US dollars and converted by your bank, so a small difference on the statement is normal. No card is needed for the free first class.' },
      { q: 'Can my child start before the Diploma begins?', a: 'Yes, and it helps. A pupil who arrives in the Diploma already able to write and test small programs has more time for the theory and the project.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Further reading for IB and international pupils in Germany.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Our hub for learners across Germany.' },
      { href: '/ib-computer-science-online-tuition', label: 'IB Computer Science online tuition', p: 'The course in more detail, for any country.' },
      { href: '/ib-extended-essay-maths-computer-science-mentoring', label: 'Extended essay mentoring', p: 'For an essay in maths or computing.' },
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'For pupils on the German route.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Which tools a pupil under 18 may use.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What a live class looks like.' }
    ]
  },

  start: {
    h2: 'Book a free first IB Computer Science class',
    lede: 'In the first class the mentor looks at where the pupil is in the Diploma, sets a short task on reading and writing code, and suggests a plan up to the exam, in English and at the pupil\'s pace.',
    readFirst: 'Before booking you can read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or look through <a class="ag-inline-link" href="/courses">all our courses</a>.',
    note: 'Lessons happen live on a video call, in English, with a mentor who works from India. A WhatsApp message gets the quickest reply.',
    formNote: 'The first class costs nothing and no card is needed.'
  },

  footer: {
    cols: [
      { h4: 'IB and computing', links: [
        { href: '/ib-computer-science-online-tuition', label: 'IB Computer Science tuition' },
        { href: '/ib-extended-essay-maths-computer-science-mentoring', label: 'Extended essay mentoring' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths in English' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI classes in Germany' }
      ] }
    ],
    bottomRight: 'Test the plan that should fail'
  },

  personalityCss: `
.ag-root.ag-ico .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-ico .ag-capsule { border-left-width: 5px; }
.ag-root.ag-ico .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-ico .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-ico .ag-code-note code { white-space: normal; }
`,

  dossier: {
    curriculumAuthority: 'KMK, Vereinbarung über die Anerkennung des International Baccalaureate Diploma (10.03.1986 i. d. F. 15.06.2023, Anlage 1 Stand 26.03.2026); AGIS homepage and Wer wir sind; Einheitenzeitgesetz. Read 2 November 2026. ibo.org was not reachable (bot challenge) and is not used.',
    localProject: 'Turn a rulebook into code: an original Python checker for the KMK six-subject pattern tested on three invented pupils (one passes, one fails for having Computer Science instead of a listed science, one fails on an unlisted subject), and the KMK points-to-grade formula (38 points 1.67, 33 points 2.5). Lesson family: turn a rulebook into code, then test it with cases that should fail.',
    requiredMentions: ['Pupil B: needs Biology, Chemistry or Physics; no HL in a language, maths or a science', 'Robotics is not on our copy of the lists', '33 IB points -&gt; 2.5', 'the section for Germany numbers 59 schools', 'Computer Science never counts as the science', 'every IB point is worth exactly one sixth of a German grade step', 'Test the plan that should fail', 'at least twelve ascending school years'],
    sources: [
      { claim: 'KMK IB recognition: six-subject pattern, CS in the sixth-subject list, HL rule from 2025, grade 4 minimum, points formula, Anlage 1.', url: 'https://www.kmk.org/fileadmin/veroeffentlichungen_beschluesse/1986/1986_03_10-Vereinbarung-Baccalaureate-Dipl_2023_06_15.pdf' },
      { claim: 'All AGIS members are authorised IB schools; IB Diploma equivalent to the Abitur with prescribed combinations.', url: 'https://www.agis-schools.org/wer-wir-sind' },
      { claim: 'AGIS schools: children from up to 65 nations, English as the common teaching language.', url: 'https://www.agis-schools.org/' },
      { claim: 'German legal time and the 2026/27 switch dates.', url: 'https://www.gesetze-im-internet.de/me_einhg/BJNR007090969.html' }
    ],
    rejectedClaims: [
      'IB syllabus details, exam weightings and dates: ibo.org returned a bot challenge, so none are stated.',
      'Any count of IB pupils in Germany: no official source found.',
      'Any admission outcome for a given subject plan: the page describes the agreement only and sends families to the coordinator and the university.',
      'Rounding of the German average: governed by a separate 1991 KMK agreement we did not read; two decimals are labelled ours.',
      'Any affiliation with the IB, the KMK, AGIS or a school: none.'
    ]
  }
};
