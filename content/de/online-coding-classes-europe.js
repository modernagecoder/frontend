'use strict';
// Online coding classes in Europe (ag- English door in the Germany cluster, P2 row DE040), written 2026-11-03.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD. Audience: learners anywhere in Europe, all ages; English-only teaching said plainly.
// Spine: three European time zones, one Indian clock. Europe changes its clocks at the same instant everywhere, India
// never does, so the gap to India moves twice a year; convert through UTC rather than by hand.
// Sources (read raw 3 Nov 2026; copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/online-coding-classes-europe/):
//  - Directive 2000/84/EC, via the EU Publications Office CELEX resolver (32000L0084.html; eur-lex.europa.eu is on the
//    blocked list): "Article 2 From 2002 onwards, the summer-time period shall begin, in every Member State, at 1.00 a.m.,
//    Greenwich Mean Time, on the last Sunday in March. Article 3 From 2002 onwards, the summer-time period shall end, in
//    every Member State, at 1.00 a.m., Greenwich Mean Time, on the last Sunday in October."
//  - European Commission, COM(2018) 639 final, "Brussels, 12.9.2018" (52018PC0639.xhtml): "Territories of the Member States
//    on the European continent today stretch over three time zones: Western European Time or Greenwich Mean Time (GMT),
//    Central European time (GMT+1), and Eastern European Time (GMT+2). Eight Member States in the Union (Bulgaria, Cyprus,
//    Estonia, Finland, Greece, Latvia, Lithuania and Romania) apply GMT+2 as their standard time. 17 Member States
//    (Austria, Belgium, Croatia, Czech Republic, Denmark, France, Germany, Hungary, Italy, Luxembourg, Malta, the
//    Netherlands, Poland, Slovak Republic, Slovenia, Spain and Sweden) apply GMT+1 and three Member States (Ireland,
//    Portugal and United Kingdom) apply GMT. Specific arrangements apply , in particular, to the Azores and to the Canary
//    Islands."; "The decision on the standard time is taken individually by each Member State"; the proposal "to
//    discontinue the bi-annual time changes". Outcome of that proposal not verified, so not stated.
//  - Germany: EinhZeitG para 4 (MEZ UTC+1, MESZ UTC+2); summer time ended 25 October 2026, begins 28 March 2027.
//  - Blocked, not retried: legislation.gov.uk (HTTP 202, empty body). India UTC+5:30 from tzdata only (no Indian primary
//    source), as on every Germany page.
// Our own calculations (scratchpad de/w/G7/ceu/v1.py, v2.py, python3 -I, zoneinfo): v1 prints "2027-03-26 Berlin 17:00 ->
// India 21:30 | winter rule by hand: 21:30" and "2027-03-29 Berlin 17:00 -> India 20:30 | winter rule by hand: 21:30"
// (and the same one-hour slip for Lisbon, London and Helsinki); v2 prints "Asked for: 28 Mar 02:30 | what the clock
// shows: 28 Mar 03:30 CEST", "fold 0 02:30 CEST = UTC 00:30", "fold 1 02:30 CET = UTC 01:30".
// Lesson family: convert through UTC; a local time can be missing or happen twice.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'from datetime import datetime, timedelta',
  'from zoneinfo import ZoneInfo',
  '',
  'INDIA = ZoneInfo("Asia/Kolkata")',
  'cities = ["Europe/Lisbon", "Europe/London", "Europe/Berlin", "Europe/Helsinki"]',
  '',
  '# a class at 17:00 local time, the Friday before and the Monday after the clocks change (our example)',
  'for day in ["2027-03-26", "2027-03-29"]:',
  '    for city in cities:',
  '        local = datetime.fromisoformat(day + " 17:00").replace(tzinfo=ZoneInfo(city))',
  '        hand = local.replace(tzinfo=None) + timedelta(hours={"Europe/Lisbon": 5.5, "Europe/London": 5.5, "Europe/Berlin": 4.5, "Europe/Helsinki": 3.5}[city])',
  '        real = local.astimezone(INDIA)',
  '        print(day, city.split("/")[1], "17:00 -> India", real.strftime("%H:%M"), "| winter rule by hand:", hand.strftime("%H:%M"))'
].join('\n');

const V2 = [
  'from datetime import datetime',
  'from zoneinfo import ZoneInfo',
  '',
  'berlin = ZoneInfo("Europe/Berlin")',
  '# 02:30 on 28 March 2027 never happens in Berlin: the clocks jump from 02:00 to 03:00',
  'ghost = datetime(2027, 3, 28, 2, 30, tzinfo=berlin)',
  'there_and_back = ghost.astimezone(ZoneInfo("UTC")).astimezone(berlin)',
  'print("Asked for:", ghost.strftime("%d %b %H:%M"), "| what the clock shows:", there_and_back.strftime("%d %b %H:%M %Z"))',
  '',
  '# 02:30 on 31 October 2027 happens twice: fold=0 is the first time, fold=1 the second',
  'for fold in (0, 1):',
  '    t = datetime(2027, 10, 31, 2, 30, tzinfo=berlin, fold=fold)',
  '    print("fold", fold, t.strftime("%H:%M %Z"), "= UTC", t.astimezone(ZoneInfo("UTC")).strftime("%H:%M"))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'door', label: 'Online coding classes in Europe' },
  slug: 'online-coding-classes-europe',
  code: 'ceu',
  accent: '#873A02',
  accentRationale: 'Online coding across Europe: a burnt amber-brown #873A02, warmer than the AI-for-pupils brown and clear of the hub fir green and the Abitur navy; contrast on the paper #FBF8F2 above 6:1 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Online coding classes in Europe',
  title: 'Online Coding Classes in Europe, Live and in English',
  description: 'Live online coding classes in English for children, teens and adults anywhere in Europe: Scratch, Python, AI and web, with times across three European time zones.',
  ogDescription: 'From Lisbon to Helsinki, Europe spans three time zones and changes its clocks at the same moment. Live coding classes in English, at times that work wherever you are.',
  twitterDescription: 'Live online coding classes in English for learners anywhere in Europe, at times that work across three time zones.',
  pageName: 'Online Coding Classes in Europe',
  webPageDescription: 'A guide for families and adults across Europe looking for live online coding classes taught in English: Europe\'s three time zones and the shared clock change from the EU\'s own texts, what that means for class times with mentors in India, and an original time-zone program.',
  courseDescription: 'Live online coding classes in English for learners anywhere in Europe, aged 6 and up: Scratch, Python, AI, web development and school computer science, in a group of fifteen to twenty or one to one, with one regular mentor.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Coding classes in Europe',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#english', label: 'English' },
    { href: '#zones', label: 'Zones' },
    { href: '#clocks', label: 'Project' },
    { href: '#who', label: 'Who' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Europe &middot; Live online &middot; Ages 6 and up',
  h1: 'Online coding classes in Europe, taught in English',
  lede: 'A family in Lisbon, a teenager in Warsaw and an engineer in Helsinki can share one thing in an online class: the language. What they do not share is the clock. Europe runs on three standard times, all of them change on the same night twice a year, and our mentors teach from India, where the clock never changes. This page sets out those facts from the EU\'s own texts and shows how to get class times right.',
  secondaryCta: { href: '#zones', label: 'See the time zones' },
  wa: 'Hello Modern Age Coders, I live in Europe and would like a free first coding class, taught in English. My country is: ',
  heroNote: 'Live online since 2020 &middot; 10,000+ students in 25+ countries &middot; one language for every class: English',
  spec: [
    ['Who', 'Children from 6, teens, adults'],
    ['Where', 'Anywhere in Europe'],
    ['Language', 'English only'],
    ['Mentors', 'Based in India'],
    ['Format', 'Group or one to one, live'],
    ['First class', 'Free']
  ],
  capsuleQ: 'The answer first',
  capsule: 'Modern Age Coders runs live online coding classes in English for learners anywhere in Europe: children from 6, teenagers and adults. Courses cover Scratch, Python, AI, web development and school computer science such as the IB and IGCSE. A regular mentor based in India matches the learner\'s pace and accent, in a group of fifteen to twenty or one to one, at times set in the learner\'s own European time zone.',

  picks: {
    eyebrow: 'Three starting points',
    h2: 'Which course should a learner in Europe start with?',
    lede: 'One course for younger children, one for teenagers and one for adults. The free first class places each learner at the right level.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'CEU / 01', title: 'Coding for Kids', note: 'Ages 6 to 12. Block coding from first games to small apps and AI, with very little reading or typing needed at the start.' },
      { course: 'python-complete-masterclass-teens', code: 'CEU / 02', title: 'Python for Teens', note: 'Ages 13 to 18. The language behind data, AI and most school computer science, from first script to real projects.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'CEU / 03', title: 'Python Masterclass for Adults', note: 'Adults of any age. From zero to confident Python, for work, study or a change of career.' }
    ]
  },

  sections: [
    {
      id: 'english',
      eyebrow: 'Language',
      h2: 'In which language are the classes taught?',
      lede: 'In English, and only in English, wherever in Europe the learner lives. We would rather say so at the top of the page than after a first lesson.',
      body: [
        { kind: 'three', cells: [
          { h3: 'One language, many accents', p: 'A class can include a learner who grew up with Portuguese, one with Polish and one with Finnish. Mentors speak clear, unhurried English, check that instructions have landed, and get used to each learner\'s own accent within a few lessons.' },
          { h3: 'Code is English already', p: 'Python, JavaScript and most other languages use English keywords: if, while, return, print. Error messages are in English. A learner who studies coding in English is learning the words they will meet on every screen anyway.' },
          { h3: 'What we do not offer', p: 'No lessons in German, French, Spanish or any other European language, and no translated materials. If a learner needs teaching in their first language, a local provider is the better choice, and we say that openly.' }
        ] },
        { kind: 'p', mt: true, html: 'For most families this turns out to be an advantage rather than a hurdle. A child at an international school already learns in English. A child at a local school practises English for an hour or two a week in a setting where it is useful at once. Adults usually choose English classes deliberately, because the jobs, documentation and online help they want are in English. Our mentors are based in India and teach live over video; how that fits European clocks is the subject of the next section.' }
      ]
    },
    {
      id: 'zones',
      tint: 'tint',
      eyebrow: 'Three European clocks',
      h2: 'How many time zones does Europe have, and when do the clocks change?',
      lede: 'Within the EU, three standard times. All of them change on the same two Sundays and at the same instant, set by an EU directive.',
      body: [
        { kind: 'table', numCols: [1, 2, 3, 4], caption: 'European standard times and the gap to India (UTC+5:30)', head: ['Standard time', 'Winter', 'Summer', 'India ahead, winter', 'India ahead, summer'], rows: [
          ['Western European Time: Ireland, Portugal, the United Kingdom', 'UTC+0', 'UTC+1', '5 h 30', '4 h 30'],
          ['Central European Time: 17 EU members, Germany among them', 'UTC+1', 'UTC+2', '4 h 30', '3 h 30'],
          ['Eastern European Time: Bulgaria, Cyprus, Estonia, Finland, Greece, Latvia, Lithuania, Romania', 'UTC+2', 'UTC+3', '3 h 30', '2 h 30']
        ] },
        { kind: 'source', html: 'Sources: European Commission, proposal COM(2018) 639 final of 12 September 2018, footnote on the three time zones; Directive 2000/84/EC on summer-time arrangements, Articles 2 and 3; both read on 3 November 2026 through the EU Publications Office. The gaps to India are our arithmetic, with India at UTC+5:30 all year.' },
        { kind: 'two', mt: true,
          leftH3: 'What the EU texts say',
          left: [
            'The European Commission wrote in 2018 that the Member States on the European continent stretch over three time zones: Western European Time, Central European Time one hour ahead, and Eastern European Time two hours ahead. It listed eight members on the eastern time, seventeen on the central one, and Ireland, Portugal and the United Kingdom, then still a member, on the western one, with special arrangements for the Azores and the Canary Islands.',
            'Each Member State chooses its own standard time; the EU fixes only when summer time starts and ends.'
          ],
          rightH3: 'One switch, everywhere at once',
          right: [
            'Directive 2000/84/EC says the summer-time period begins in every Member State at 1.00 a.m. Greenwich Mean Time on the last Sunday in March, and ends at 1.00 a.m. GMT on the last Sunday in October. Because the moment is fixed in GMT, Lisbon, Berlin and Helsinki all change in the same instant, at different local hours.',
            'In 2018 the Commission proposed ending the twice-yearly change. In Germany, at least, the clocks still went back on 25 October 2026, and they go forward on 28 March 2027.'
          ] },
        { kind: 'p', mt: true, html: 'So the gaps between European cities never change: Helsinki is always one hour ahead of Berlin and two ahead of Lisbon. The gap to India is what moves, by exactly one hour, twice a year. A class that starts at 17:00 in Berlin all winter is at 21:30 in India; after 28 March 2027 the same Berlin class is at 20:30 in India. Families notice nothing. The mentor notices everything, which is why time is always agreed in the learner\'s clock, not ours.' }
      ]
    },
    {
      id: 'clocks',
      eyebrow: 'Worked example, ours',
      h2: 'Why should you never add hours by hand across time zones?',
      lede: 'Programmers learn this the hard way, and it is a good first lesson in careful thinking. We use the March 2027 clock change to show it.',
      body: [
        { kind: 'code', label: 'Version 1: the same 17:00 class before and after the clock change', lang: 'Python', code: V1, note: 'It prints eight lines, among them <code>2027-03-26 Berlin 17:00 -> India 21:30 | winter rule by hand: 21:30</code> and <code>2027-03-29 Berlin 17:00 -> India 20:30 | winter rule by hand: 21:30</code>. Lisbon, London and Helsinki slip by the same hour.' },
        { kind: 'p', mt: true, html: 'On Friday 26 March 2027 the rule "add four and a half hours" works for Berlin. On Monday 29 March it is an hour wrong, and so is every other hand rule in the program, because the clocks in all four cities moved on the Sunday between. The program that converts properly asks the time-zone database instead, and the database knows the EU rule. That is the whole lesson in one sentence: store a moment once, in UTC or with its time zone attached, and convert it when you need to show it.' },
        { kind: 'code', label: 'Version 2: a time that never happens and a time that happens twice', lang: 'Python', code: V2, note: 'It prints <code>Asked for: 28 Mar 02:30 | what the clock shows: 28 Mar 03:30 CEST</code>, then <code>fold 0 02:30 CEST = UTC 00:30</code> and <code>fold 1 02:30 CET = UTC 01:30</code>.' },
        { kind: 'table', mt: true, numCols: [], caption: 'The two awkward nights in Berlin in 2027 (our calculation)', head: ['Night', 'What the clock does', 'The local time 02:30'], rows: [
          ['Sunday 28 March 2027', 'Jumps from 02:00 to 03:00', 'Does not exist; Python moves it to 03:30 summer time'],
          ['Sunday 31 October 2027', 'Falls back from 03:00 to 02:00', 'Happens twice, an hour apart in UTC']
        ] },
        { kind: 'source', html: 'Our own programs, run with Python 3 and its zoneinfo module on 3 November 2026. The 2027 switch dates follow the EU rule: the last Sunday in March and the last Sunday in October.' },
        { kind: 'p', mt: true, html: 'Calendar apps, train timetables and payment systems all have to deal with these two nights, and bugs in them are common. Python marks the second 02:30 in October with a flag called fold, so that the program can tell the two apart. We use exactly this example with teenagers and adults because it is real, short and impossible to get right by guessing.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Predict.</strong> Before running Version 1, write down what India time a 17:00 Helsinki class is at on 29 March 2027.',
          '<strong>Autumn.</strong> Change the dates to 29 October and 1 November 2027 and explain the result.',
          '<strong>Your city.</strong> Add your own European city and check it against your phone.',
          '<strong>Going further.</strong> Write a function that warns if a meeting is booked at a local time that does not exist.'
        ] }
      ]
    },
    {
      id: 'who',
      tint: 'tint',
      eyebrow: 'Learners across Europe',
      h2: 'Who takes online coding classes in English from Europe?',
      lede: 'Three groups, mostly, and each needs something a little different from a class.',
      body: [
        { kind: 'table', numCols: [], caption: 'Typical learners in Europe and where they start (our experience, not a survey)', head: ['Learner', 'What they usually want', 'Where they start'], rows: [
          ['Children at local schools, 6 to 12', 'A creative hobby with real depth, and English practice on the side', 'Block coding, Scratch, Minecraft or Roblox'],
          ['Pupils at international schools, 11 to 18', 'Support with IB or IGCSE computer science, or a stronger portfolio', 'Python, then the exam course'],
          ['Adults of any age', 'Skills for work, a change of career or a long-postponed interest', 'Python, data or web development']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'School computer science in English',
          left: [
            'Many international schools in Europe teach in English and follow the IB Diploma or Cambridge IGCSE. For their pupils, an English-language class uses the same words as the classroom and the exam.',
            'We teach alongside school; the school course and the exam board decide the grades.'
          ],
          rightH3: 'Adults',
          right: [
            'Adults often find that a live mentor is what was missing from free online tutorials: someone who notices where they are stuck and does not let them skip it.',
            'One to one is common here, because work and family make a fixed group time hard to keep.'
          ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When can a learner in Europe take a class?',
      lede: 'Afternoons, evenings and weekends in every European time zone, because India is two and a half to five and a half hours ahead.',
      body: [
        { kind: 'table', numCols: [], caption: 'One class seen in three European clocks and in India, winter 2026 to 2027', head: ['Western Europe', 'Central Europe', 'Eastern Europe', 'India'], rows: [
          ['13:15', '14:15', '15:15', '18:45'],
          ['15:45', '16:45', '17:45', '21:15'],
          ['Saturday 08:45', 'Saturday 09:45', 'Saturday 10:45', 'Saturday 14:15']
        ] },
        { kind: 'source', html: 'Standard (winter) time, from 25 October 2026 until the EU switch on Sunday 28 March 2027; after it, every European column stays the same and India is one hour earlier. Examples only, not fixed batch times.' },
        { kind: 'p', mt: true, html: 'The free first class is booked in the time zone of your own device, so a learner in Dublin and one in Athens each see their own local times. Groups are formed from learners whose times overlap, which is easy within Europe because the whole continent sits within two hours of itself.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How learners move forward, at any age',
    lede: 'Our own stages, used to place learners and report progress, whatever course they take.',
    table: { caption: 'Learning stages across our courses (ours)', head: ['Stage', 'Usually reached', 'The learner can'], rows: [
      ['1. First programs', 'First weeks', 'Write and run short programs with the mentor\'s help'],
      ['2. Independence', 'Months 1 to 2', 'Solve small tasks alone and read their own error messages'],
      ['3. Building', 'Months 3 to 5', 'Plan and build a small project with several parts'],
      ['4. Depth', 'Months 6 to 9', 'Use data structures and libraries, and test what they build'],
      ['5. Own work', 'Month 10 onwards', 'Take on a project of their own choosing and explain every part']
    ] },
    left: { h3: 'For learners', ps: [
      'When a time looks odd, convert it through UTC before you argue about it.',
      'Read the error message to the end. In any language, it is the most useful line on the screen.'
    ] },
    right: { h3: 'For parents', ps: [
      'Check the class time in your own clock the week after the clocks change. It should not have moved.',
      'Ask your child what they built this week, then ask what went wrong while building it.'
    ] }
  },

  catalogue: {
    eyebrow: 'Further courses',
    h2: 'Nine more courses for learners in Europe',
    lede: 'Live, in English, with the same mentor each week, as a group or one to one.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'CEU / KIDS / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Games and stories built from blocks.' },
        { code: 'CEU / KIDS / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Real Luau scripts in Roblox Studio.' },
        { code: 'CEU / KIDS / 03', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'First typed code, with games and AI.' }
      ] },
      { num: 'II', h3: 'International school pupils', sub: 'Ages 13 to 18', courses: [
        { code: 'CEU / SCHOOL / 01', slug: 'ib-diploma-computer-science-course', title: 'IB Computer Science', blurb: 'Support with the IB Diploma course.' },
        { code: 'CEU / SCHOOL / 02', slug: 'igcse-computer-science-0478-course', title: 'IGCSE Computer Science', blurb: 'Cambridge 0478, theory and programming.' },
        { code: 'CEU / SCHOOL / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Models built and tested from scratch.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Ages 18 and up', courses: [
        { code: 'CEU / ADULT / 01', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Excel, SQL, Python and BI.' },
        { code: 'CEU / ADULT / 02', slug: 'full-stack-web-development-masterclass-college', title: 'Full stack web development', blurb: 'React, Node.js and deployment.' },
        { code: 'CEU / ADULT / 03', slug: 'python-ai-automation-masterclass-college', title: 'Python automation', blurb: 'Scripts that save hours of work.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live online classes work for learners in Europe',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Afternoons', l: 'After school in every European time zone.' },
      { time: 'Evenings', l: 'Early evenings for adults after work.' },
      { time: 'One to one', l: 'A time agreed with the mentor, in your clock.' }
    ],
    cells: [
      { h3: 'English only', p: 'Clear and patient, for every accent.' },
      { h3: 'Your own clock', p: 'Times agreed in your European time zone.' },
      { h3: 'Live mentor', p: 'Someone who sees your screen as you work.' },
      { h3: 'Same person', p: 'One mentor who follows your progress.' },
      { h3: 'All ages', p: 'From six year olds to working adults.' },
      { h3: 'Your choice', p: 'Fifteen to twenty learners, or one alone.' }
    ]
  },

  projectsH2: 'Projects by our students',
  projectsLede: 'A small selection of what our students in many countries have built; the <a class="ag-inline-link" href="/student-labs">student labs</a> page shows more.',
  reviewsLede: 'Reviews written on Google by students and parents, left exactly as they are.',

  fees: {
    h2: 'Fees for online coding classes in Europe',
    lede: 'One monthly fee buys eight live classes. This page lists it in euro, using the European Central Bank reference rate, and the charge is made in US dollars, so your bank converts it and the amount you see on your statement may be a little higher or lower.',
    free: ['A free first class', 'A short task to find the right level', 'No card asked for'],
    group: ['Fifteen to twenty learners at a similar level', 'A regular mentor', 'Two live classes a week', 'Monthly, with no long contract'],
    one: ['One learner with one mentor', 'Goals and pace set by the learner', 'Times that fit your week']
  },

  faq: {
    eyebrow: 'Learners in Europe ask',
    h2: 'Online coding classes in Europe: common questions',
    items: [
      { q: 'Are the classes in German or another European language?', a: 'No. All classes are live and in English only, with mentors based in India who adapt to the learner\'s pace and accent. We do not offer lessons in German, French, Spanish or any other language.' },
      { q: 'Which countries in Europe can learners join from?', a: 'Anywhere with a stable internet connection. Classes are online and times are agreed in the learner\'s own time zone, whether that is Western, Central or Eastern European Time.' },
      { q: 'How many time zones does Europe have?', a: 'The European Commission described three standard times for the EU\'s continental territories in 2018: Western European Time (GMT), Central European Time (GMT+1) and Eastern European Time (GMT+2), with special arrangements for the Azores and the Canary Islands.' },
      { q: 'Do class times change when the clocks change?', a: 'Not in your clock. Under Directive 2000/84/EC all EU countries change at 1.00 a.m. GMT on the last Sunday in March and October. India does not change, so the gap to the mentor moves by an hour, and the mentor adjusts.' },
      { q: 'What ages do you teach?', a: 'Children from 6, teenagers and adults of any age, each in courses designed for their stage.' },
      { q: 'Can you help with IB or IGCSE computer science?', a: 'Yes. We teach alongside the school course for the IB Diploma and Cambridge IGCSE Computer Science, in English. The school and the exam board decide the grades.' },
      { q: 'When are the classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Across Europe that usually means afternoons, evenings or weekend mornings.' },
      { q: 'Which currency do I pay in?', a: 'Fees are shown in euro at the European Central Bank reference rate and charged in US dollars, which your bank converts, so your statement can differ slightly. The first class is free.' },
      { q: 'Are classes live or recorded?', a: 'Live, every time, with a mentor in a group of fifteen to twenty or one to one. There are no pre-recorded courses.' },
      { q: 'Is my English good enough?', a: 'Usually, yes. Much of every lesson is shared code on screen, and mentors speak slowly and rephrase whenever needed. The free first class is the easiest way to find out.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Country pages',
    h2: 'Related pages',
    lede: 'Pages written for particular European countries.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'All our pages for Germany.' },
      { href: '/coding-classes-in-netherlands', label: 'Coding classes in the Netherlands', p: 'For families and learners in the Netherlands.' },
      { href: '/coding-classes-in-ireland', label: 'Coding classes in Ireland', p: 'For learners in Ireland.' },
      { href: '/online-coding-classes-for-kids-uk', label: 'Online coding for kids in the UK', p: 'For families in the United Kingdom.' },
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'German upper-school maths, taught in English.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What a live class looks like.' }
    ]
  },

  start: {
    h2: 'Book a free first class from anywhere in Europe',
    lede: 'Pick a time in your own clock. The mentor finds out what you or your child want to learn, sets a short task and suggests the course that fits, in English, at your pace.',
    readFirst: 'If you would like to read more first, see <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or <a class="ag-inline-link" href="/courses">the full course list</a>.',
    note: 'Every class is live online and in English, with mentors based in India. WhatsApp, in English, is the quickest way to reach us.',
    formNote: 'The first class is free and no card is needed.'
  },

  footer: {
    cols: [
      { h4: 'Europe', links: [
        { href: '/coding-classes-in-netherlands', label: 'Netherlands' },
        { href: '/coding-classes-in-ireland', label: 'Ireland' },
        { href: '/online-coding-classes-for-kids-uk', label: 'United Kingdom' },
        { href: '/coding-classes-in-germany', label: 'Germany' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths in English' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning' }
      ] }
    ],
    bottomRight: 'Convert through UTC'
  },

  personalityCss: `
.ag-root.ag-ceu .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-ceu .ag-capsule { border-left-width: 5px; }
.ag-root.ag-ceu .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-ceu .ag-table td:nth-child(n+2) { white-space: nowrap; }
.ag-root.ag-ceu .ag-code-head b { letter-spacing: 0.03em; }
`,

  dossier: {
    curriculumAuthority: 'Directive 2000/84/EC on summer-time arrangements (Articles 2 and 3); European Commission COM(2018) 639 final of 12 September 2018 (three time zones and the members on each); Einheitenzeitgesetz for Germany. Read 3 November 2026 via the EU Publications Office.',
    localProject: 'Convert through UTC: an original Python program in which the hand rule "India is 4 h 30 ahead of Berlin" is right on 26 March 2027 and an hour wrong on 29 March 2027 for Lisbon, London, Berlin and Helsinki alike; plus the Berlin local time 02:30 that does not exist on 28 March 2027 and happens twice on 31 October 2027 (fold 0 = UTC 00:30, fold 1 = UTC 01:30). Lesson family: convert through UTC; a local time can be missing or happen twice.',
    requiredMentions: ['2027-03-29 Berlin 17:00 -> India 20:30 | winter rule by hand: 21:30', 'Asked for: 28 Mar 02:30 | what the clock shows: 28 Mar 03:30 CEST', 'fold 1 02:30 CET = UTC 01:30', 'COM(2018) 639', 'at 1.00 a.m. Greenwich Mean Time on the last Sunday in March', 'special arrangements for the Azores and the Canary Islands', 'Convert through UTC', 'Eastern European Time: Bulgaria, Cyprus, Estonia, Finland, Greece, Latvia, Lithuania, Romania'],
    sources: [
      { claim: 'Summer time begins and ends at 1.00 a.m. GMT on the last Sundays of March and October in every Member State.', url: 'http://publications.europa.eu/resource/celex/32000L0084' },
      { claim: 'Three time zones in the EU and the members on each; each Member State chooses its standard time.', url: 'http://publications.europa.eu/resource/celex/52018PC0639' },
      { claim: 'German legal time MEZ and MESZ.', url: 'https://www.gesetze-im-internet.de/me_einhg/BJNR007090969.html' }
    ],
    rejectedClaims: [
      'Whether the EU has since ended the clock changes: the 2018 proposal\'s outcome was not verified; the page says only that it was proposed and that Germany\'s clocks still changed in October 2026.',
      'Current UK time law from legislation.gov.uk: HTTP 202 with an empty body, not retried; the UK appears only as listed in the Commission\'s 2018 text.',
      'Any figure for learners per European country: none exists in our brand facts; not stated.',
      'Teaching in any European language other than English: none offered, and the page says so.'
    ]
  }
};
