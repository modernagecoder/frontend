'use strict';
// Coding and AI classes in Münster (ag- city page, Germany cluster P6 row DE146, tier-2 shape coding-and-ai = all ages).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; euro shown,
// USD charged.
// Spine: prediction, the everyday core of AI. Four kinds of Münster learner, then one forecasting question asked of the
// city's car park data, where the winning idea is not a clever model but choosing the right day to compare with.
// Sources (school facts read raw and quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md,
// fetched 2 Nov 2026; numbers are fact ids there):
//  - GI Informatik-Monitor 2026/27, NRW: compulsory Informatik grades 5 and 6 (80); Grundkurs three hours, Leistungskurs
//    five hours (81); written Informatik Abitur set centrally without a computer (82). National: about 15 percent take
//    Informatik in the Qualifikationsphase (97).
//  - Schulministerium NRW, Zentralabitur Termine 2027: "Schriftliche Abiturprüfungen Haupttermine ... ab Dienstag,
//    13. April 2027 bis Mittwoch, 5. Mai 2027" (42); "Letzter Unterrichtstag für die Schülerinnen und Schüler der
//    Qualifikationsphase 2 | Freitag, 19. März 2027" (43); maths LK and GK Wednesday 5 May 2027 (44). ZP10 in German,
//    maths and English (64).
//  - KMK Ferien 2026/2027, NRW row (275). BWKI: German or English projects (213), ML methods required (208).
//  - AI tool ages: content/ai-tool-age-audit.json.
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Münster 308,258; Hamm 179,968; Osnabrück 166,057 (Niedersachsen).
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Stadt Münster open data portal, "Parkhausbelegungen im Verlauf: 2019 bis heute" (ckan.govdata.de/dataset/
//    parkhausbelegungen-im-verlauf-2019-bis-heute; opendata.stadt-muenster.de), licence Datenlizenz Deutschland
//    Namensnennung 2.0 (dl-by-de/2.0). Dataset text: free spaces of the inner-city car parks saved as CSV, "Diese Daten
//    werden jede Nacht aktualisiert", suitable "um Vorhersagen für eine vorraussichtliche Parkhausauslastung an einem
//    bestimmten Tag zu treffen". The resource links to the daily files in github.com/codeformuenster/parking-decks-muenster
//    /tree/master/data. We downloaded the 29 daily files 2026-10-05.csv to 2026-11-02.csv on 3 November 2026 (796 KB;
//    2026-11-02.csv sha256 5be01fb43343c345ce0f...). Columns: "Datum und Uhrzeit" then one per car park; second line gives
//    capacity in brackets, e.g. PH Theater "(743)"; cells are free spaces or text codes ges / kei / bes. Raw copies in
//    src-pages/coding-and-ai-classes-in-muenster-germany/days/.
// Our own calculations (scratchpad de/w/T1/muenster/v1.py, v2.py, v3.py, python3 -I), PH Theater, quarter-hour readings:
//  v1: "Readings kept: 2708", "Capacity line: (743)".
//  v2 (test days 20 October to 2 November 2026, 09:00 to 19:45): "Guess = yesterday, same time: (149.6, 572)",
//      "Guess = same weekday last week: (40.6, 568)".
//  v3 per weekday, yesterday: Mon 143.0, Tue 37.7, Wed 156.4, Thu 150.2, Fri 35.6, Sat 183.7, Sun 336.3; a week back:
//      Mon 15.0, Tue 47.2, Wed 68.7, Thu 24.2, Fri 40.9, Sat 48.7, Sun 47.7.
//  Free spaces at 12:00 (our read of the files): Sundays 591, 541, 618, 614; Saturdays 89, 167, 206, 41; Wednesdays 318,
//  259, 133, 84. Across all 29 files, non-numeric cells: ges 21,911, kei 9,099, bes 4,304.
// Lesson family: compare like with like; a weekly rhythm makes "same weekday last week" a far stronger guess than
// "yesterday".

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  'import glob',
  'from datetime import date, timedelta',
  '',
  'PARK = "PH Theater"',
  'free = {}                                    # (day, "HH:MM") -> free spaces',
  'for path in sorted(glob.glob("days/*.csv")):',
  '    with open(path, encoding="utf-8") as f:',
  '        rows = list(csv.reader(f))',
  '    col = rows[0].index(PARK)',
  '    for row in rows[2:]:',
  '        day, clock = row[0].split(" ")',
  '        if clock[3:] in ("00", "15", "30", "45") and row[col].isdigit():',
  '            free.setdefault((day, clock), int(row[col]))',
  '',
  'print("Readings kept:", len(free))',
  'print("Capacity line:", rows[1][col])'
].join('\n');

const V2 = [
  'def error(days_back, test_days):',
  '    misses = []',
  '    for day in test_days:',
  '        past = str(date.fromisoformat(day) - timedelta(days=days_back))',
  '        for (d, clock), now in free.items():',
  '            if d == day and "09:00" <= clock <= "19:45" and (past, clock) in free:',
  '                misses.append(abs(free[(past, clock)] - now))',
  '    return round(sum(misses) / len(misses), 1), len(misses)',
  '',
  'test = [str(date(2026, 10, 20) + timedelta(days=i)) for i in range(14)]',
  'print("Guess = yesterday, same time:", error(1, test))',
  'print("Guess = same weekday last week:", error(7, test))'
].join('\n');

const V3 = [
  'names = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]',
  'for back in (1, 7):',
  '    line = []',
  '    for wd in range(7):',
  '        days = [d for d in test if date.fromisoformat(d).weekday() == wd]',
  '        line.append(f"{names[wd]} {error(back, days)[0]}")',
  '    print(back, "day(s) back:", ", ".join(line))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Münster: coding and AI, all ages' },
  slug: 'coding-and-ai-classes-in-muenster-germany',
  code: 'mue',
  accent: '#681247',
  accentRationale: 'Coding and AI in Münster: a deep mulberry #681247, the shade of the old town\'s arcaded gables at dusk, clear of the Karlsruhe claret and the Duisburg violet; contrast 9.65 at its lowest on the paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-north-rhine-westphalia', name: 'North Rhine-Westphalia' }],
  routeLabel: 'Coding and AI classes in Münster',
  title: 'Coding and AI Classes in Münster, Live Online in English',
  description: 'Coding and AI classes in Münster for children, pupils, students and adults: live online in English, NRW Abitur 2027 dates and a Münster car park forecasting project.',
  ogDescription: 'Live coding and AI lessons in English for Münster learners of every age, with an original project that tries to predict how full a city car park will be and finds that the right comparison beats a clever guess.',
  twitterDescription: 'Coding and AI for all ages in Münster, live in English, with a forecasting project on the city\'s car parks.',
  pageName: 'Coding and AI Classes in Münster',
  webPageDescription: 'A guide for Münster children, school pupils, university students and working adults to live coding and AI classes in English: who starts where, Informatik in NRW up to the 2027 Abitur, AI tool age rules, and an original prediction project on Münster\'s open car park data.',
  courseDescription: 'Live online coding and AI classes in English for Münster learners from age 6 to adult: Scratch and Python for children, Python, data and machine learning for pupils, and Python, data and AI for students and professionals, in a group of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Münster, all ages',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#learners', label: 'Who' },
    { href: '#parken', label: 'Forecast' },
    { href: '#abitur', label: 'NRW school' },
    { href: '#zeiten', label: 'Times' }
  ],
  eyebrow: 'Münster &middot; Coding and AI &middot; Children to professionals',
  h1: 'Coding and AI classes in Münster',
  lede: 'Most of what people call AI is prediction: what word comes next, which film you will like, how busy a road will be at five. On this page Münster learners of every age try a prediction of their own, on the city\'s car park data, and discover that the most useful step is not a clever formula but choosing what to compare with. Around that project you will find who learns with us from Münster and where each starts, what NRW schools teach up to the 2027 Abitur, and when live classes in English fit a Münster day.',
  secondaryCta: { href: '#parken', label: 'See the forecast project' },
  wa: 'Hello Modern Age Coders, I am in Münster and would like to try a live coding or AI class in English. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; from first Scratch game to first forecast',
  spec: [
    ['Ages', '6 to adult'],
    ['Children', 'Scratch, then Python'],
    ['School pupils', 'Python, data, Informatik support'],
    ['Students and adults', 'Python, data science, AI'],
    ['Group', '15 to 20 learners, or 1-on-1'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'Summary',
  capsule: 'Modern Age Coders teaches coding and AI to Münster learners of all ages in live online classes held in English. Children from 6 start with Scratch and move to Python; school pupils add data work, machine learning and support next to NRW Informatik; university students and professionals learn Python, data science and AI they can test. Learners keep one mentor, who gets used to their speed and the way they speak, and choose between a shared class of 15 to 20 and private lessons.',

  picks: {
    eyebrow: 'Starting courses',
    h2: 'Three ways into coding and AI from Münster',
    lede: 'One course for younger children, one for secondary pupils and one for students and adults. The free first class confirms the choice.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'MUE / 01', title: 'Coding for Kids', note: 'For 6 to 12 year olds over ten to twelve months: Scratch games and stories, then simple apps and a first, account-free look at how AI learns.' },
      { course: 'ai-ml-masterclass-teens', code: 'MUE / 02', title: 'AI and Machine Learning for Teens', note: 'For 13 to 18 year olds. Python and data, then forecasting and models they train and test themselves, of the kind used in the car park project.' },
      { course: 'data-science-complete-masterclass-college', code: 'MUE / 03', title: 'Data Science Masterclass', note: 'For university students and working adults. Python, statistics and machine learning on real datasets, through to deep learning.' }
    ]
  },

  sections: [
    {
      id: 'learners',
      eyebrow: 'Four kinds of learner',
      h2: 'Who learns coding and AI with us from Münster, and where do they start?',
      lede: 'Münster is a city of schools, students and offices, and our Münster learners reflect that. Here are the four starting points we see most often.',
      body: [
        { kind: 'ol', items: [
          '<strong>A primary pupil of 6 to 10.</strong> Starts with Scratch: characters that move, talk and keep score. AI arrives as a game of rules, where the child sorts things by a rule and then watches a program learn one from examples. No accounts, no chatbots.',
          '<strong>A secondary pupil of 10 to 18.</strong> Starts with typed Python, then data. Pupils in an NRW Informatik course use the classes to practise reading and tracing code, which the paper-based written Abitur rewards; others use them to go further than school offers.',
          '<strong>A university student.</strong> Often studying something that is not computer science, and suddenly needing Python for a thesis, a statistics module or a lab. Starts with Python and pandas-style data work on their own files, then models.',
          '<strong>A working adult.</strong> Wants to automate reports, understand what an AI tool is doing, or change direction. Starts from a real task at work and learns exactly the Python, data and AI skills it needs.'
        ] },
        { kind: 'source', html: 'Our own placement plan. In every group, learners are placed with others of a similar age and level.' },
        { kind: 'p', mt: true, html: 'Every class is live and taught in English only, by mentors based in India who match each learner\'s pace and accent. For a child at a Münster Grundschule that means slow, clear speech and a lot of showing on screen; for a student or professional it means precise technical English, which is the language of nearly every programming manual anyway. Nobody is expected to follow a lecture: learners type, run and fix their own code in every lesson.' },
        { kind: 'p', html: 'Our promise is the same in all four groups. We teach people to think a problem through, not to copy an answer from a classmate, a website or an AI tool. The project below is a good example: the program is short, but the thinking about which comparison is fair is the real work.' }
      ]
    },
    {
      id: 'parken',
      tint: 'tint',
      eyebrow: 'A Münster dataset',
      h2: 'Can a program predict how many spaces a Münster car park will have free?',
      lede: 'Münster publishes how many spaces are free in its inner-city car parks, recorded through the day and updated every night, under the Datenlizenz Deutschland Namensnennung 2.0. The city\'s own description says the data is suitable for predicting how full a car park will be on a given day. So we tried.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The dataset is Parkhausbelegungen im Verlauf: 2019 bis heute, listed on the city\'s open data portal, which links to one CSV file per day kept by the Code for Münster group. On 3 November 2026 we downloaded the 29 daily files from 5 October to 2 November 2026.',
            'Each file has a column per car park. The second line gives the capacity in brackets, and the cells after that hold the number of free spaces, or a short text code such as ges or kei when there is no number. We use one car park, PH Theater, listed with 743 spaces.'
          ],
          rightH3: 'The question',
          right: [
            'If you want to guess how many spaces will be free tomorrow at a given time, what should you look at? The obvious answer is today. The other answer is the same day last week.',
            'We test both on two weeks the guesses have not seen, 20 October to 2 November 2026, between 09:00 and 19:45, and measure how far off each guess is on average.'
          ] },
        { kind: 'code', label: 'Part 1: read every quarter-hour reading for PH Theater', lang: 'Python', code: V1, note: 'It prints <code>Readings kept: 2708</code> and <code>Capacity line: (743)</code>. Readings with a text code instead of a number are skipped.' },
        { kind: 'code', label: 'Part 2: two simple forecasts, tested on two weeks', lang: 'Python', code: V2, note: 'Run after Part 1. It prints <code>Guess = yesterday, same time: (149.6, 572)</code> and <code>Guess = same weekday last week: (40.6, 568)</code>: the average miss in free spaces, and how many readings were tested.' },
        { kind: 'p', mt: true, html: 'Guessing from yesterday misses by about 150 spaces on average, a fifth of the car park. Guessing from the same weekday a week earlier misses by about 41. Same data, same simple rule, nearly four times better, just by comparing like with like. The car park clearly has a weekly rhythm, and Part 3 shows where it lives.' },
        { kind: 'code', label: 'Part 3: which days does each guess get wrong?', lang: 'Python', code: V3, note: 'Run after Part 2. It prints <code>1 day(s) back: Mon 143.0, Tue 37.7, Wed 156.4, Thu 150.2, Fri 35.6, Sat 183.7, Sun 336.3</code> and <code>7 day(s) back: Mon 15.0, Tue 47.2, Wed 68.7, Thu 24.2, Fri 40.9, Sat 48.7, Sun 47.7</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Average miss in free spaces at PH Theater, 20 October to 2 November 2026, 09:00 to 19:45 (our calculation)', head: ['Day being predicted', 'Using yesterday', 'Using the same day last week'], rows: [
          ['Monday', '143.0', '15.0'],
          ['Tuesday', '37.7', '47.2'],
          ['Wednesday', '156.4', '68.7'],
          ['Thursday', '150.2', '24.2'],
          ['Friday', '35.6', '40.9'],
          ['Saturday', '183.7', '48.7'],
          ['Sunday', '336.3', '47.7']
        ] },
        { kind: 'source', html: 'Data: Stadt Münster, Parkhausbelegungen im Verlauf: 2019 bis heute, opendata.stadt-muenster.de, daily files kept by Code for Münster, licence Datenlizenz Deutschland Namensnennung 2.0, downloaded 3 November 2026. Errors, the test period and the weekday split are our own.' },
        { kind: 'p', mt: true, html: 'The table explains itself once you read it slowly. "Yesterday" works on Tuesdays and Fridays, because Monday is a lot like Tuesday and Thursday a lot like Friday. It fails on Sundays, when yesterday was a Saturday: at noon on the four Saturdays in our files the car park had between 41 and 206 spaces free, and at noon on the four Sundays between 541 and 618. Wednesdays are busy too and stay hardest to predict. Why Wednesday and Saturday? The files do not say, so we leave that to learners to find out and check, which is the right order of things.' },
        { kind: 'p', html: 'This is the honest core of a great deal of AI: before any neural network, find the pattern a simple guess should respect. The test fortnight also fell partly in the NRW Herbstferien, from 17 to 31 October 2026, a reminder that a forecast made for school weeks may need checking in the holidays. A machine-learning model built on top of the weekly rule has to beat 40.6 to be worth having.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 9.</strong> Keep a week-long chart of how many cars are outside your house at breakfast. Which day looks most like which?',
          '<strong>Ages 10 to 12.</strong> In Scratch or Python, store seven numbers for a week and guess next Monday two ways: from Sunday, and from last Monday.',
          '<strong>Ages 13 to 18.</strong> Run Parts 1 to 3 for a different car park, then try an average of the last two same weekdays. Does it beat 40.6?',
          '<strong>Students and adults.</strong> Count how often each text code appears per car park and decide, with reasons, whether skipping them could bias the error.'
        ] }
      ]
    },
    {
      id: 'abitur',
      eyebrow: 'NRW schools',
      h2: 'What will a Münster pupil meet in Informatik, up to the 2027 Abitur?',
      lede: 'Münster schools follow Nordrhein-Westfalen\'s rules. Here is the route from grade 5 to the written Abitur, with the 2027 dates the NRW school ministry has published.',
      body: [
        { kind: 'table', numCols: [], caption: 'Informatik and key exams for a Münster pupil', head: ['When', 'What happens'], rows: [
          ['Grades 5 and 6', 'Informatik is compulsory at every general school type'],
          ['Grades 7 to 10', 'Optional: depends on each school\'s timetable and on what the pupil picks'],
          ['End of grade 10', 'ZP10, central exams in German, maths and English'],
          ['Qualifikationsphase', 'Informatik possible as a three-hour Grundkurs or five-hour Leistungskurs'],
          ['19 March 2027', 'Last teaching day for pupils in the Qualifikationsphase 2'],
          ['13 April to 5 May 2027', 'Written Abitur main exams; maths on Wednesday 5 May 2027']
        ] },
        { kind: 'source', html: 'Sources: GI Informatik-Monitor 2026/27, NRW entry; Schulministerium NRW, Zentrale Prüfungen 10 and Zentralabitur 2027 Termine. Read on 2 November 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'What this means in practice',
          left: [
            'Every Münster pupil gets two years of Informatik in grades 5 and 6, then the subject becomes optional. Across Germany, the monitor puts the share choosing it in the Qualifikationsphase at roughly 15 percent.',
            'Central written Abitur papers in Informatik are sat with pen and paper, so reading, tracing and writing code on paper is a skill in its own right.'
          ],
          rightH3: 'How we help, and what we do not do',
          right: [
            'We teach next to school, at the pupil\'s pace, and practise the skills the subject needs, including tracing code by hand. Because the maths Abitur is part of the same spring, many pupils also work on the maths behind data and AI with us.',
            'We do not set or mark school work and we award no German qualification. The school course and its Notenpunkte are what count.'
          ] },
        { kind: 'p', mt: true, html: 'Ambitious pupils sometimes ask about the BWKI, the national AI competition: its rules ask for machine learning and allow an entry written in English. A forecasting project like the one above, extended with a model that beats the weekly rule, is the kind of question such a project could start from. We are not connected with the competition.' }
      ]
    },
    {
      id: 'werkzeuge',
      eyebrow: 'AI tools and age',
      h2: 'Which AI tools do Münster learners use in class?',
      lede: 'It depends on age, because each provider sets its own minimum in its terms. Our courses are built so that no learner ever needs a tool they are too young for.',
      body: [
        { kind: 'two',
          leftH3: 'Under 18',
          left: [
            'Children under 13 use no AI accounts at all; they build small learning programs in Scratch and Python. Teenagers build models in plain Python, like the forecasts above.',
            'The general chat assistants are a separate question, decided by each provider\'s own minimum age and consent rules; our under-18 lessons are designed so that the answer never matters. Anthropic restricts Claude to adults.'
          ],
          rightH3: 'Students and adults',
          right: [
            'Over-18s can bring any assistant they like into class, including adult-only ones. We teach them to set an assistant a precise task and then to check the result against the data, the way Part 2 checks two guesses against two real weeks.',
            'For anyone, the rule is the same: an AI answer is a forecast too, and a forecast is only as good as the comparison behind it.'
          ] },
        { kind: 'source', html: 'Minimum ages from the providers\' terms, quoted in our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a>, which notes when each was last checked.' }
      ]
    },
    {
      id: 'zeiten',
      eyebrow: 'Münster time',
      h2: 'When are coding and AI classes in Münster time?',
      lede: 'Pupils after school, students between lectures, adults after work, and anyone at the weekend. The mentor teaches from India, ahead of Münster on the clock.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example Münster times next to the time in India', head: ['Münster', 'India until 28 March 2027', 'India after 28 March 2027'], rows: [
          ['15:20 on a school day', '19:50', '18:50'],
          ['18:10 after work', '22:40', '21:40'],
          ['Saturday 09:45', '14:15', '13:15'],
          ['Sunday 12:30', '17:00', '16:00']
        ] },
        { kind: 'source', html: 'Under the Einheitenzeitgesetz German legal time is MEZ, UTC+1, through the winter and MESZ, UTC+2, through the summer; the switch back happened on 25 October 2026 and the switch forward is due on 28 March 2027. India is on UTC+5:30 all year round, four and a half hours ahead of Münster in winter and three and a half in summer. Sample times, not fixed batches.' },
        { kind: 'p', mt: true, html: 'NRW holidays in 2026/27 run from 17 to 31 October 2026 (Herbstferien), 23 December 2026 to 6 January 2027 (Christmas), 22 March to 3 April 2027 (Osterferien), 18 May 2027 (Pfingsten) and 19 July to 31 August 2027 (Sommerferien), according to the KMK. Classes continue through them unless a learner asks to pause. University students often shift their slot each semester, which a one-to-one plan makes easy.' },
        { kind: 'p', html: 'Münster had 308,258 residents on 31 December 2024 on the Destatis municipal register. Learners in Hamm (179,968), across the Land border in Osnabrück (166,057), and in Greven, Telgte or Steinfurt join the same online classes; only Osnabrück, in Niedersachsen, follows a different school holiday calendar.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'From first program to first honest forecast',
    lede: 'Our milestones, in the same order for every age. Each learner, or each parent, sees the current one in a monthly note.',
    table: { caption: 'Coding and AI milestones (ours)', head: ['Milestone', 'Children', 'Pupils, students, adults'], rows: [
      ['Exact instructions', 'Ages 6 to 8', 'Week 1'],
      ['Reading a real file', 'Ages 10 to 12', 'Month 1'],
      ['A fair comparison', 'Ages 11 to 12', 'Month 2'],
      ['A tested forecast', 'From 12', 'Month 3'],
      ['A model that beats a simple rule', 'From 13', 'Months 4 to 6']
    ] },
    left: { h3: 'For learners', ps: [
      'Before you guess tomorrow, ask which past day it most resembles.',
      'Every model needs a simple rule to beat. Write the rule down first.'
    ] },
    right: { h3: 'For parents', ps: [
      'Ask your child what their program compared, not only what it predicted.',
      'A forecast that is honest about its error is worth more than one that sounds sure.'
    ] }
  },

  catalogue: {
    eyebrow: 'Further courses',
    h2: 'Nine more courses for Münster learners',
    lede: 'Grouped by stage. All taught live in English by a regular mentor, in a shared class or privately.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'MUE / KIDS / 01', slug: 'scratch-programming-complete-course', title: 'Scratch for kids', blurb: 'A short, complete first course in games and stories.' },
        { code: 'MUE / KIDS / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Real Python for nine to twelve year olds, games included.' },
        { code: 'MUE / KIDS / 03', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'How AI learns, explained with no chatbot sign-ups.' }
      ] },
      { num: 'II', h3: 'School pupils', sub: 'Ages 10 to 19', courses: [
        { code: 'MUE / PUPIL / 01', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik companion', blurb: 'Klasse 5 to 10, alongside the NRW school subject.' },
        { code: 'MUE / PUPIL / 02', slug: 'informatik-abitur-course-java-python', title: 'Informatik Abitur in English', blurb: 'Oberstufe topics, including code traced on paper.' },
        { code: 'MUE / PUPIL / 03', slug: 'abitur-mathematics-course-in-english', title: 'Abitur maths in English', blurb: 'Analysis and Stochastik for the spring 2027 exams.' }
      ] },
      { num: 'III', h3: 'Students and professionals', sub: 'Ages 18 and up', courses: [
        { code: 'MUE / PRO / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python from zero', blurb: 'For theses, labs and work, starting from nothing.' },
        { code: 'MUE / PRO / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Errors, averages and uncertainty, behind every forecast.' },
        { code: 'MUE / PRO / 03', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI', blurb: 'Large language models, retrieval and agents, built and tested.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Format',
    h2: 'Inside a Münster learner\'s week of live lessons',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'School afternoons', l: 'From mid-afternoon, for children and pupils.' },
      { time: 'Evenings', l: 'Early evening, often chosen by students and adults.' },
      { time: 'Weekends', l: 'Saturday or Sunday, morning or midday.' }
    ],
    cells: [
      { h3: 'Hands on keys', p: 'Learners write and run the code themselves.' },
      { h3: 'Tested ideas', p: 'Every forecast is measured against real data.' },
      { h3: 'English at your speed', p: 'Repeated, rephrased and never rushed.' },
      { h3: 'One mentor', p: 'The same teacher across the weeks and months.' },
      { h3: 'Age rules kept', p: 'No adult-only tools for anyone under 18.' },
      { h3: 'Shared or solo', p: 'Join a class of 15 to 20 people, or book a mentor alone.' }
    ]
  },

  projectsH2: 'Projects by students of ours',
  projectsLede: 'Students of all ages build working projects with us. A few are shown here; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has more of them.',
  reviewsLede: 'Google reviews by our students and their parents, in their own words.',

  fees: {
    h2: 'Fees for Münster learners',
    lede: 'Eight live classes are covered by each monthly fee. We convert that fee to euro for display with the European Central Bank reference rate; the payment is collected in US dollars, and the bank that issued your card converts it, so the booked euro sum may be marginally different.',
    free: ['A free first class at your level', 'A short, real task', 'No card needed'],
    group: ['15 to 20 learners of similar age and level', 'A regular mentor', 'Two classes a week', 'Monthly, no fixed term'],
    one: ['One learner, one mentor', 'Projects chosen around your goals', 'Times that move with your week']
  },

  faq: {
    eyebrow: 'Münster asks',
    h2: 'Coding and AI classes in Münster: your questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. We teach only in English, always live. A mentor slows down, rephrases and shows on screen until the idea has landed, and gets used to each learner\'s accent within a few weeks. Since Python and its documentation are in English, learners rarely find this a drawback.' },
      { q: 'I am a university student in Münster. Is this for me?', a: 'Yes. Many students come to us needing Python, data analysis or machine learning for a thesis or a module outside computer science. We start with your own files and questions.' },
      { q: 'What age does a child need to be?', a: 'Six. Children of six to eight learn with Scratch blocks, without typing. From about nine they can move on to typed Python.' },
      { q: 'What does NRW teach in Informatik?', a: 'Two compulsory years first: the GI Informatik-Monitor 2026/27 records the subject as obligatory in grades 5 and 6 for every general school type in NRW. Later it is optional; in the Oberstufe a pupil may take it with three weekly hours or, at the higher level, five. The central written Abitur in Informatik is done on paper.' },
      { q: 'When is the written Abitur in NRW in 2027?', a: 'The NRW school ministry lists the written main exams from Tuesday 13 April to Wednesday 5 May 2027, with maths on 5 May. The last teaching day for pupils in the Qualifikationsphase 2 is Friday 19 March 2027.' },
      { q: 'When do classes run in Münster time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Pupils tend to choose afternoons, students and adults evenings or weekends.' },
      { q: 'Will my teenager need an AI account?', a: 'No account is needed. Teenagers write their forecasts and models themselves in Python, so there is nothing to sign up for. Where a provider allows younger users at all, its own terms set the age and any parental consent, and adult-only assistants appear only in adult courses.' },
      { q: 'Where are the mentors?', a: 'In India, teaching live online. In winter India is four and a half hours ahead of Münster, so an 18:10 class in Münster is 22:40 for the mentor.' },
      { q: 'How are fees shown and paid?', a: 'Monthly, for eight classes. The euro figure on this page comes from the European Central Bank reference rate; the card itself is debited in US dollars, and the euro amount your bank books after converting can be a touch higher or lower. There is no charge for the first class.' },
      { q: 'Do classes stop during NRW school holidays?', a: 'Not automatically. School holidays in NRW do not apply to the mentors, so lessons go on unless you ask for a break, which many families do for a summer trip.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for learners in Germany.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'All our pages for Germany.' },
      { href: '/coding-classes-in-north-rhine-westphalia', label: 'Coding classes in North Rhine-Westphalia', p: 'NRW rules, holidays and data.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning', p: 'Our national page on learning ML properly.' },
      { href: '/abitur-computer-science-in-english', label: 'Abitur computer science', p: 'Informatik in the Oberstufe, in English.' },
      { href: '/python-and-dsa-for-international-students-germany', label: 'Python for international students', p: 'For students at German universities.' },
      { href: '/online-coding-course-for-career-changers-germany', label: 'Career changers', p: 'Learning to code later in life.' }
    ]
  },

  start: {
    h2: 'Book a free first class in Münster',
    lede: 'Let us know the learner\'s age and goal. The mentor prepares a short task at that level, watches how the learner reasons and how easily they follow English, and recommends where to begin.',
    readFirst: 'Our method is set out in <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and every syllabus is on the <a class="ag-inline-link" href="/courses">courses</a> page.',
    note: 'All classes are live online in English only, with mentors in India. WhatsApp, in English, gets the quickest answer.',
    formNote: 'Free of charge; no card is needed.'
  },

  footer: {
    cols: [
      { h4: 'Learn', links: [
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and ML in Germany' },
        { href: '/python-and-dsa-for-international-students-germany', label: 'Python for students' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/abitur-computer-science-in-english', label: 'Abitur computer science' },
        { href: '/online-coding-course-for-career-changers-germany', label: 'Career changers' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Compare like with like'
  },

  personalityCss: `
.ag-root.ag-mue .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-mue .ag-capsule { border-left-width: 4px; border-radius: 3px; }
.ag-root.ag-mue .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-mue .ag-table td + td { font-variant-numeric: tabular-nums; }
.ag-root.ag-mue .ag-steps li strong { letter-spacing: 0.005em; }
`,

  dossier: {
    curriculumAuthority: 'GI Informatik-Monitor 2026/27 (NRW page, national figures); Schulministerium NRW (ZP10; Zentralabitur 2027 Termine and Anlage A); KMK Ferien 2026/2027; BWKI conditions; provider terms via the AI tools age guide; Destatis GV-ISys 31.12.2024; Stadt Münster open data, Parkhausbelegungen im Verlauf, Datenlizenz Deutschland Namensnennung 2.0.',
    localProject: 'Compare like with like: an original Python forecasting project on Münster\'s car park files (PH Theater, 743 spaces, 2,708 quarter-hour readings from 5 October to 2 November 2026) in which guessing from yesterday misses by 149.6 free spaces on average over 20 October to 2 November 2026 and guessing from the same weekday last week misses by 40.6; the weekday split shows Sundays after Saturdays are the worst case (336.3). Lesson family: a weekly rhythm makes the same weekday the fair comparison.',
    requiredMentions: ['Guess = yesterday, same time: (149.6, 572)', 'Guess = same weekday last week: (40.6, 568)', 'Readings kept: 2708', 'Capacity line: (743)', 'PH Theater', 'Compare like with like', '308,258', 'Parkhausbelegungen im Verlauf: 2019 bis heute'],
    sources: [
      { claim: 'NRW Informatik grades 5 and 6; Grundkurs and Leistungskurs; written Abitur without a computer.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/nordrhein-westfalen' },
      { claim: 'NRW Zentralabitur 2027 dates.', url: 'https://www.standardsicherung.schulministerium.nrw.de/zentralabitur-gost/termine/2027' },
      { claim: 'NRW ZP10 subjects.', url: 'https://www.standardsicherung.schulministerium.nrw.de/zentrale-pruefungen-10' },
      { claim: 'NRW holidays 2026/27.', url: 'https://www.kmk.org/service/ferien.html' },
      { claim: 'Münster car park occupancy data and licence.', url: 'https://ckan.govdata.de/dataset/parkhausbelegungen-im-verlauf-2019-bis-heute' },
      { claim: 'Münster population 308,258 on 31 December 2024.', url: 'https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/Administrativ/05-staedte.xlsx?__blob=publicationFile' }
    ],
    rejectedClaims: [
      'Any reason for busy Wednesdays and Saturdays (markets, shopping): not in the data, left as a question for learners.',
      'Expanding the text codes ges, kei and bes: not defined in the files, reported as published.',
      'Any claim about Münster university or student numbers: not sourced, not made.',
      'Any affiliation with Stadt Münster, Code for Münster, the NRW ministry or the BWKI: none.',
      'German-language teaching: we teach in English only, and the page says so.'
    ]
  }
};
