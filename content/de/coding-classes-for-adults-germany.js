'use strict';
// Coding classes for adults in Germany (ag- English door, Germany cluster P2 row DE016), written 2026-11-03.
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Angle: adults of any age in Germany, from their twenties to retirement. How many adults in Germany actually write code
// (Eurostat, by age, against the EU), what an adult can realistically learn in a few evenings a week, the courses by
// goal, and one original project that reads the Eurostat answer itself from its JSON file.
// Sources (read raw, fetched 3 Nov 2026, copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/
// coding-classes-for-adults-germany/):
//  - Eurostat, dataset isoc_sk_cskl_i21 "Individuals' level of computer skills (2021 onwards)", indicator I_CPRG2
//    "Individuals who have written code in a programming language (3 months)", unit PC_IND "Percentage of individuals",
//    "updated":"2026-04-17T11:00:00+0200", DOI 10.2908/ISOC_SK_CSKL_I21. API URL in url.txt; file eurostat_cprg2.json,
//    3,919 bytes, sha256 9680fc2943fe2d78... Values (DE / EU27_2020): all individuals 2021 4.63 / 5.82, 2023 5.52 /
//    6.51, 2025 6.06 / 7.15; 16 to 24 in 2025 9.59 / 14.62; 25 to 34 10.59 / 11.99; 35 to 44 8.43 / 8.89; 45 to 54
//    4.58 / 5.59; 55 to 64 2.71 / 2.91; 65 to 74 1.69 / 1.17; 25 to 54 7.9 / 8.61; 55 to 74 2.28 / 2.13.
//    Germany 16 to 24: 10.06 (2021), 9.45 (2023), 9.59 (2025). No figures are summed.
//  - AI tool ages: content/ai-tool-age-audit.json (Claude 18+), so the AI coding agents course is for adults.
//  - Time: EinhZeitG; summer time ended 25 October 2026, begins 28 March 2027; India UTC+5:30.
// Our own code (scratchpad de/w/G4/ada/v1.py, v2.py, both.py, python3 -I): Version 1 reads the "value" object in the
// order it appears and prints "EU27_2020 IND_TOTAL [4.63, 5.52, 6.06]" (those are Germany's numbers; the file lists
// key "3" first). Version 2 computes each value's position from "id" and "size" and prints "EU27_2020 IND_TOTAL
// [5.82, 6.51, 7.15]" and "DE IND_TOTAL [4.63, 5.52, 6.06]", "DE Y55_74 [1.47, 1.95, 2.28]" and so on.
// Lesson family: a flattened multi-dimensional index (JSON-stat): the order keys appear in is not the order of the data.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import json',
  '',
  'with open("eurostat_cprg2.json", encoding="utf-8") as f:',
  '    data = json.load(f)',
  '',
  'ages = list(data["dimension"]["ind_type"]["category"]["index"])',
  'places = list(data["dimension"]["geo"]["category"]["index"])',
  'years = list(data["dimension"]["time"]["category"]["index"])',
  'print("Places:", places, " Years:", years)',
  '',
  '# first try: read the values in the order they appear',
  'values = list(data["value"].values())',
  'print(places[0], ages[0], values[0:3])'
].join('\n');

const V2 = [
  '# second try: every value has a position number; work out what it stands for',
  'sizes = data["size"]                 # one length per dimension, in data["id"] order',
  'def position(**chosen):',
  '    pos = 0',
  '    for name, size in zip(data["id"], sizes):',
  '        index = data["dimension"][name]["category"]["index"]',
  '        pos = pos * size + (index[chosen[name]] if name in chosen else 0)',
  '    return str(pos)',
  '',
  'for place in ("EU27_2020", "DE"):',
  '    for age in ("IND_TOTAL", "Y16_24", "Y25_54", "Y55_74"):',
  '        row = [data["value"].get(position(geo=place, ind_type=age, time=y)) for y in years]',
  '        print(place, age, row)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'door', label: 'Coding classes for adults' },
  slug: 'coding-classes-for-adults-germany',
  code: 'ada',
  accent: '#1A6462',
  accentRationale: 'Adults in Germany: a calm deep sea green #1A6462, quieter than the teen olive and set apart from the hub fir green and the AI plum; contrast on the paper #FBF8F2 above 6:1 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Coding classes for adults in Germany',
  title: 'Online Coding Classes for Adults in Germany, in English',
  description: 'Live online coding classes in English for adults of any age in Germany: Python, automation, web and data, with Eurostat figures on who codes and a real JSON project.',
  ogDescription: 'Coding for grown-ups in Germany, taught live in English: what Eurostat says about how many adults here write code, at which ages, and a first project that reads those figures straight from the source file.',
  twitterDescription: 'Live coding classes in English for adults in Germany, from a first script to automation, websites and data work.',
  pageName: 'Coding Classes for Adults in Germany',
  webPageDescription: 'A guide for adults in Germany who want to learn to program: Eurostat figures on how many people in Germany wrote code in 2021, 2023 and 2025 by age group compared with the EU, courses by goal, realistic evening and weekend times, and an original Python project that parses the Eurostat JSON-stat file.',
  courseDescription: 'Live online coding classes in English for adults in Germany of any age: Python and automation, web development, data analysis and AI tools, in a group of fifteen to twenty adults or one to one, with one regular mentor.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Coding for adults',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#numbers', label: 'Who' },
    { href: '#project', label: 'Project' },
    { href: '#goals', label: 'Courses' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Germany &middot; Adults &middot; Any age from 18',
  h1: 'Coding classes for adults in Germany',
  lede: 'Writing code is still unusual among adults in Germany. In Eurostat\'s 2025 survey about six in every hundred people here had written any code in the previous three months, and the share falls with every age band after 34. This page is for the adults who want to be among them: what the figures say, what you can learn in two evenings a week, which course fits which goal, and a first project that reads the Eurostat figures straight out of the file Eurostat publishes.',
  secondaryCta: { href: '#numbers', label: 'See the Eurostat figures' },
  wa: 'Hello Modern Age Coders, I am an adult living in Germany and would like a free first coding class, taught in English.',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students worldwide &middot; adults from their twenties to retirement',
  spec: [
    ['Who', 'Adults of any age, no upper limit'],
    ['Starts with', 'Python, from the very first line'],
    ['Then', 'Automation, web, data or AI tools'],
    ['German times', 'Early mornings, evenings, weekends'],
    ['Mentors', 'Based in India, teaching in English'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders runs live online coding classes in English for adults in Germany, whatever their age: Python from the first line, then automation of everyday work, websites, data analysis or AI tools. A regular mentor adjusts to each adult\'s pace and accent. Classes fit around work, early in the morning, in the evening or at weekends, with fifteen to twenty adults or one to one.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three first courses for adults in Germany',
    lede: 'One for adults who want their computer to do repetitive work for them, one for adults who want to learn programming thoroughly, and one for adults who work with spreadsheets and reports.',
    items: [
      { course: 'python-ai-automation-masterclass-college', code: 'ADA / 01', title: 'Python Automation and Applied AI', note: 'Scripts that rename files, merge spreadsheets, read web pages and send the weekly report, so an afternoon of clicking becomes a minute.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'ADA / 02', title: 'Python from Zero to Advanced', note: 'The whole language, properly: data types, functions, files, classes, testing and a project of your own at the end.' },
      { course: 'data-analysis-mastery-course-college', code: 'ADA / 03', title: 'Data Analysis: Excel, SQL and Python', note: 'From the spreadsheet you already use to SQL queries and Python, with real public data from the start.' }
    ]
  },

  sections: [
    {
      id: 'numbers',
      eyebrow: 'The figures',
      h2: 'How many adults in Germany write code?',
      lede: 'Eurostat asks the same question in every EU country: have you written code in a programming language in the last three months? The answers for Germany in 2025 show how small the group still is, and that age matters less than many people think.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'People who wrote code in a programming language in the last three months, 2025, percent of each age group', head: ['Age group', 'Germany', 'EU 27'], rows: [
          ['All people surveyed', '6.06', '7.15'],
          ['16 to 24', '9.59', '14.62'],
          ['25 to 34', '10.59', '11.99'],
          ['35 to 44', '8.43', '8.89'],
          ['45 to 54', '4.58', '5.59'],
          ['55 to 64', '2.71', '2.91'],
          ['65 to 74', '1.69', '1.17']
        ] },
        { kind: 'source', html: 'Source: Eurostat, dataset isoc_sk_cskl_i21, Individuals\' level of computer skills (2021 onwards), indicator "Individuals who have written code in a programming language (3 months)", percentage of individuals; dataset updated 17 April 2026, downloaded 3 November 2026. Figures as published; we have not added or combined any.' },
        { kind: 'two', mt: true,
          leftH3: 'What stands out',
          left: [
            'Germany sits below the EU figure in every age group up to 64. The gap is widest among the youngest: 9.59 percent of 16 to 24 year olds in Germany against 14.62 percent across the EU.',
            'From 65 to 74 the order turns round. In 2025 1.69 percent of that age group in Germany had written code, against 1.17 percent across the EU. Small numbers, but proof that people start or carry on programming well past working age.'
          ],
          rightH3: 'How it has moved',
          right: [
            'For everyone surveyed in Germany the share rose from 4.63 percent in 2021 to 5.52 in 2023 and 6.06 in 2025. Among 55 to 74 year olds it went from 1.47 to 1.95 to 2.28 over the same three surveys.',
            'Among 16 to 24 year olds it barely moved: 10.06, 9.45 and 9.59. In these three surveys, the growth in Germany came from adults rather than from the young.'
          ] }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A first adult project',
      h2: 'Can an adult beginner read official statistics with Python?',
      lede: 'Yes, and it is a good first real task, because the figures above come from Eurostat as a JSON file and the obvious way to read it gives the wrong answer. Our adult learners meet this problem in their second or third month.',
      body: [
        { kind: 'two',
          leftH3: 'The file',
          left: [
            'Eurostat publishes its tables through a free web interface. Asking it for the "wrote code" indicator for Germany and the EU, nine age groups and the years 2021, 2023 and 2025 returns a file of 3,919 bytes, which we saved as eurostat_cprg2.json on 3 November 2026.',
            'Inside, the numbers sit in one flat list called "value", each with a position number. Separate lists say what the dimensions are, in which order, and how many entries each has.'
          ],
          rightH3: 'Why this matters at work',
          right: [
            'Statistics offices, central banks and many company systems hand out data in this shape. An adult who can read it with ten lines of Python no longer needs to copy figures from a web page into a spreadsheet by hand.',
            'It is also the moment most learners discover that a program can run without any error message and still print the wrong numbers.'
          ] },
        { kind: 'code', label: 'Version 1: read the values in the order they appear', lang: 'Python', code: V1, note: 'It prints <code>Places: [\'EU27_2020\', \'DE\']  Years: [\'2021\', \'2023\', \'2025\']</code> and then <code>EU27_2020 IND_TOTAL [4.63, 5.52, 6.06]</code>.' },
        { kind: 'p', mt: true, html: 'Those three numbers are not the EU at all. They are Germany\'s. The file happens to list position "3" first, and Version 1 trusted the order in which the numbers appear rather than the position number each one carries. No error, no warning, and a table that would have gone into a report with every EU figure wrong.' },
        { kind: 'code', label: 'Version 2: work out each value\'s position', lang: 'Python', code: V2, note: 'Run after Version 1 in the same file. The first lines it prints are <code>EU27_2020 IND_TOTAL [5.82, 6.51, 7.15]</code>, and further down <code>DE IND_TOTAL [4.63, 5.52, 6.06]</code> and <code>DE Y55_74 [1.47, 1.95, 2.28]</code>.' },
        { kind: 'p', mt: true, html: 'The file says its dimensions are, in order, frequency, age group, indicator, unit, place and year, with sizes 1, 9, 1, 1, 2 and 3. A value\'s position is worked out the way an odometer counts: the last dimension turns fastest. The function <code>position</code> does exactly that, and with it every figure lands under the right heading. Checking one figure by hand against the Eurostat website is the last step, and the one most beginners skip.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Run Version 1</strong> and write down what you think the three numbers are before reading on.',
          '<strong>Prove the bug.</strong> Print the keys of <code>data["value"]</code> in the order they come. Which key comes first?',
          '<strong>Extend Version 2.</strong> Add the age groups 25 to 34 and 65 to 74 and check them against the table on this page.',
          '<strong>Going further.</strong> Write the result to a CSV file that opens cleanly in a German spreadsheet, with a semicolon between columns and a comma as the decimal mark.'
        ] },
        { kind: 'source', html: 'Data: Eurostat, isoc_sk_cskl_i21, indicator I_CPRG2, Germany and EU 27, downloaded 3 November 2026. The code, the explanation and the exercises are our own.' }
      ]
    },
    {
      id: 'goals',
      eyebrow: 'Choosing a course',
      h2: 'Which coding course should an adult in Germany choose?',
      lede: 'Start from what you want to be able to do in six months, not from a language. The table is our own guide, and the free first class is where a mentor checks it against your plans.',
      body: [
        { kind: 'table', numCols: [], caption: 'From a goal to a first course (our guide)', head: ['You want to', 'Start with', 'Then'], rows: [
          ['Stop doing the same spreadsheet work every week', 'Python automation', 'Data analysis with SQL'],
          ['Understand programming properly, for its own sake', 'Python from zero to advanced', 'Data structures and algorithms'],
          ['Build a website or a small web app', 'HTML and CSS for beginners', 'Full-stack web development'],
          ['Make sense of data at work', 'Data analysis: Excel, SQL and Python', 'Statistics and machine learning'],
          ['Use AI tools to write code, and check what they write', 'Python first, always', 'AI coding agents, 18 and over'],
          ['Keep the mind active after retiring', 'Python from zero, one to one', 'A project you choose yourself']
        ] },
        { kind: 'source', html: 'Our own guide, based on what adult learners have asked us for since 2020. Every course on it is taught live and in English.' },
        { kind: 'p', mt: true, html: 'We do not offer a qualification that German employers or authorities recognise, and we make no promises about jobs. What an adult takes away is the ability itself: programs they wrote, understand and can change. Adults thinking of a new career in software should read our <a class="ag-inline-link" href="/coding-classes-in-germany">Germany overview</a> first and talk it through with the mentor in the free class.' }
      ]
    },
    {
      id: 'pace',
      tint: 'tint',
      eyebrow: 'Learning as an adult',
      h2: 'Is it harder to learn coding as an adult?',
      lede: 'Different rather than harder. Adults bring things a fifteen year old does not have, and they have less time. Our classes are built around both.',
      body: [
        { kind: 'three', cells: [
          { h3: 'What adults bring', p: 'Real problems from work or home to solve, patience with a hard idea, and the habit of reading carefully. A first program that saves an adult an hour a week is worth more to them than any exercise.' },
          { h3: 'What gets in the way', p: 'Time and confidence. A missed week is normal. The mentor keeps a short written summary of each class, so picking up again after a business trip or a busy month takes minutes, not a fresh start.' },
          { h3: 'How English fits in', p: 'Programming keywords, error messages and almost all documentation are in English. Our mentors teach only in English and adapt to each adult: plain words, a slower pace when needed, and patience with any accent.' }
        ] },
        { kind: 'p', mt: true, html: 'Adults over sixty are welcome and often among the steadiest learners. Many choose one-to-one classes so they can set the speed entirely themselves. The Eurostat figures above show that in Germany people aged 65 to 74 were writing code in 2025, a little more often than across the EU as a whole.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When can an adult in Germany take a live coding class?',
      lede: 'Before work, at lunchtime, in the early evening or at the weekend. The mentor is in India, which is ahead of Germany all year.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample class times for adults in Germany, and the time in India', head: ['Class starts in Germany', 'Mentor\'s clock now', 'Mentor\'s clock after 28 March 2027'], rows: [
          ['07:30', '12:00', '11:00'],
          ['12:15', '16:45', '15:45'],
          ['18:00', '22:30', '21:30'],
          ['Saturday 08:30', '13:00', '12:00']
        ] },
        { kind: 'source', html: 'German legal time, set by the Einheitenzeitgesetz, is MEZ (UTC+1) through the winter and MESZ (UTC+2) through the summer; this winter began on 25 October 2026 and ends on 28 March 2027. India never changes its clocks and stays at UTC+5:30, so the mentor is four and a half hours ahead now and three and a half hours ahead in summer.' },
        { kind: 'p', mt: true, html: 'An early-morning class in Germany falls at midday in India, which makes it one of the easiest times to arrange. These rows are examples, not fixed groups: when you book, you choose the time of your free class in German time.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What an adult can do after each stage',
    lede: 'The milestones we use with adult learners. They are our own markers of progress, not a German qualification.',
    table: { caption: 'Milestones for adult learners (ours)', head: ['Stage', 'Typical start', 'You can'], rows: [
      ['1. First scripts', 'Month 1', 'Write a short program that asks, calculates and answers'],
      ['2. Files and data', 'Months 2 to 3', 'Read a CSV or JSON file and pull out what you need, like the Eurostat project'],
      ['3. Automation', 'Months 4 to 5', 'Make a weekly task run by itself'],
      ['4. A larger program', 'Months 6 to 8', 'Organise code into functions and modules, with tests'],
      ['5. Your own project', 'Months 9 and up', 'Plan, build and explain something you use yourself']
    ] },
    left: { h3: 'For beginners', ps: [
      'A program that runs is not yet a program that is right. Check one result by hand.',
      'Twenty minutes of typing on a free evening beats two hours of watching once a month.'
    ] },
    right: { h3: 'For returners', ps: [
      'If you last coded years ago, the ideas come back faster than the syntax. Start one stage lower than you think.',
      'Bring a real file from work, with anything private removed, and learn on that.'
    ] }
  },

  catalogue: {
    eyebrow: 'More for adults',
    h2: 'Nine more courses for adults in Germany',
    lede: 'Taught live in English, at a pace set for adults, with the same mentor in a group or one to one.',
    bands: [
      { num: 'I', h3: 'The web', sub: 'Adults', courses: [
        { code: 'ADA / WEB / 01', slug: 'html-css-course-for-beginners-build-real-websites', title: 'HTML and CSS for beginners', blurb: 'A real website, built by hand.' },
        { code: 'ADA / WEB / 02', slug: 'full-stack-web-development-masterclass-college', title: 'Full-stack web development', blurb: 'React, Node.js and a server of your own.' },
        { code: 'ADA / WEB / 03', slug: 'complete-java-programming-masterclass-college', title: 'Java', blurb: 'From core Java to Spring Boot.' }
      ] },
      { num: 'II', h3: 'Data', sub: 'Adults', courses: [
        { code: 'ADA / DATA / 01', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Data and AI without programming', blurb: 'Excel, Sheets and Power BI, for a gentler start.' },
        { code: 'ADA / DATA / 02', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL and databases', blurb: 'SQL queries and database design.' },
        { code: 'ADA / DATA / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'The maths behind every chart at work.' }
      ] },
      { num: 'III', h3: 'Tools and AI', sub: 'Ages 18 and up', courses: [
        { code: 'ADA / TOOLS / 01', slug: 'git-github-version-control-course-for-college-students', title: 'Git and GitHub', blurb: 'Keeping track of every change you make.' },
        { code: 'ADA / TOOLS / 02', slug: 'ai-ml-masterclass-complete-college', title: 'AI and machine learning', blurb: 'Python, models and generative AI.' },
        { code: 'ADA / TOOLS / 03', slug: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', title: 'AI coding agents', blurb: 'Codex and Claude Code, for adults only.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live coding classes work for adults in Germany',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Before work', l: 'From about 07:00 German time, midday for the mentor.' },
      { time: 'After work', l: 'Early evening, up to about 18:00 German time.' },
      { time: 'One to one', l: 'Any agreed time, weekends included, moved when work changes.' }
    ],
    cells: [
      { h3: 'Your own problems', p: 'Exercises built on tasks from your work or life.' },
      { h3: 'Short summaries', p: 'A written note after class to pick up from.' },
      { h3: 'Plain English', p: 'Explained again, more slowly, whenever needed.' },
      { h3: 'One mentor', p: 'The same teacher, who remembers where you left off.' },
      { h3: 'No age limit', p: 'Learners in their twenties and in their seventies.' },
      { h3: 'Class or private', p: 'Fifteen to twenty adults, or just you.' }
    ]
  },

  projectsH2: 'Projects built by our students',
  projectsLede: 'A selection of work by our students in several countries; see the <a class="ag-inline-link" href="/student-labs">student labs</a> for the rest.',
  reviewsLede: 'Google reviews from our students and the families of our younger learners, exactly as they were posted.',

  fees: {
    h2: 'Fees for adult coding classes in Germany',
    lede: 'You pay once a month for eight live classes. The figure is given here in euro, converted at the European Central Bank\'s reference rate, while the charge is made in US dollars; your bank handles the exchange, so your statement may differ slightly from the figure shown.',
    free: ['A free first class', 'A short task matched to your experience', 'No card details asked for'],
    group: ['Fifteen to twenty adults at a similar level', 'One regular mentor', 'Two classes a week', 'Month to month, cancel any time'],
    one: ['Just you and a mentor', 'Your own goals and speed', 'Times that fit your week']
  },

  faq: {
    eyebrow: 'Adults in Germany ask',
    h2: 'Coding classes for adults in Germany: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. All classes are live and in English only. The mentor adapts to your pace and your accent, explains again in simpler words when needed, and never expects perfect English.' },
      { q: 'Am I too old to learn to code?', a: 'No. We teach adults of every age, and Eurostat\'s 2025 survey found that 1.69 percent of people aged 65 to 74 in Germany had written code in the previous three months, slightly above the EU figure of 1.17 percent.' },
      { q: 'I have never programmed. Where do I start?', a: 'With Python, from the first line. Our adult courses assume no experience, and the free first class finds the right starting point.' },
      { q: 'How much time do I need each week?', a: 'Two live classes a week, plus about an hour of practice in between if you can manage it. Weeks with less practice are normal for working adults.' },
      { q: 'Will I get a German qualification?', a: 'No. We do not award a qualification recognised by German employers or authorities. You learn to program, and you keep the programs you built.' },
      { q: 'Can you help me change career into software?', a: 'We teach the skills honestly and help you build projects you can show, but we make no promises about jobs or pay. Talk your plans through with the mentor in the free class first.' },
      { q: 'Do you teach AI tools like ChatGPT and Claude?', a: 'Yes, for adults. Our AI coding agents course uses Codex and Claude Code, and Anthropic\'s terms make Claude available only to people of 18 and over. We teach Python first, so you can check what an AI tool writes.' },
      { q: 'When are classes in German time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Early mornings in Germany are midday for the mentor in India, so they are easy to arrange.' },
      { q: 'How do I pay from Germany?', a: 'Fees appear on this page in euro at the European Central Bank reference rate, and the payment is made in US dollars, which your bank converts. The first class costs nothing.' },
      { q: 'Group or one to one?', a: 'Either. A group has fifteen to twenty adults at a similar level; one-to-one classes follow only your plan and your timetable.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for adult learners in Germany.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'The overview for every age and Land.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning in Germany', p: 'Models you build and test yourself.' },
      { href: '/coding-roadmap', label: 'Coding roadmap', p: 'What to learn after what, in order.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Who may use which AI tool, from the terms.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our live classes, explained.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projects our students have built.' }
    ]
  },

  start: {
    h2: 'Book a free first coding class',
    lede: 'The mentor asks what you would like to be able to do, sets a small task to see where you are, and suggests a course and a time that fit your week, in English and at your pace.',
    readFirst: 'To look around first, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or browse <a class="ag-inline-link" href="/courses">the full course list</a>.',
    note: 'Classes are live online in English, taught by mentors based in India. For a quick question, message us on WhatsApp in English.',
    formNote: 'The first class is free. We do not ask for card details.'
  },

  footer: {
    cols: [
      { h4: 'Adults', links: [
        { href: '/courses/python-ai-automation-masterclass-college', label: 'Python automation' },
        { href: '/courses/data-analysis-mastery-course-college', label: 'Data analysis' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths in English' }
      ] }
    ],
    bottomRight: 'Trust the position, not the order'
  },

  personalityCss: `
.ag-root.ag-ada .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-ada .ag-capsule { border-left-width: 3px; }
.ag-root.ag-ada .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-ada .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-ada .ag-code-head b { letter-spacing: 0.03em; }
`,

  dossier: {
    curriculumAuthority: 'Eurostat, isoc_sk_cskl_i21 Individuals\' level of computer skills (2021 onwards), indicator I_CPRG2, updated 17 April 2026, downloaded 3 November 2026; providers\' terms via our AI tools age guide; Einheitenzeitgesetz.',
    localProject: 'Trust the position, not the order: an original Python project that reads Eurostat\'s JSON-stat file for "written code in a programming language (3 months)", Germany and EU 27, 2021 to 2025. Reading the value object in file order labels Germany\'s 4.63, 5.52, 6.06 as the EU; computing positions from id and size gives EU 5.82, 6.51, 7.15 and Germany 4.63, 5.52, 6.06. Lesson family: a flattened multi-dimensional index (JSON-stat): key order is not data order.',
    requiredMentions: ['eurostat_cprg2.json', 'EU27_2020 IND_TOTAL [4.63, 5.52, 6.06]', 'EU27_2020 IND_TOTAL [5.82, 6.51, 7.15]', 'DE Y55_74 [1.47, 1.95, 2.28]', '9.59 percent of 16 to 24 year olds in Germany against 14.62 percent', '1.69 percent of that age group in Germany had written code', 'Trust the position, not the order', 'the way an odometer counts'],
    sources: [
      { claim: 'Share of people who wrote code in the last three months, Germany and EU, by age, 2021 to 2025.', url: 'https://ec.europa.eu/eurostat/databrowser/view/isoc_sk_cskl_i21/default/table' },
      { claim: 'Same figures, raw JSON from the Eurostat dissemination API.', url: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/isoc_sk_cskl_i21?format=JSON&lang=EN&geo=DE&geo=EU27_2020&indic_is=I_CPRG2&unit=PC_IND' },
      { claim: 'AI tool minimum ages (Claude 18 and over).', url: 'https://learn.modernagecoders.com/ai-tools-age-guide' },
      { claim: 'German legal time, MEZ and MESZ.', url: 'https://www.gesetze-im-internet.de/einhzeitg/' }
    ],
    rejectedClaims: [
      'Any sum or average of the Eurostat age groups: not computed; figures shown as published.',
      'Job, salary or career promises: none made.',
      'A German qualification or accreditation: none held, and the page says so.',
      'Any reason why German 16 to 24 year olds code less than the EU figure: not in the data, none given.',
      'German-language teaching: we teach in English only, and the page says so.'
    ]
  }
};
