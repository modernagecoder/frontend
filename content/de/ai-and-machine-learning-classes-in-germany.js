'use strict';
// AI and machine learning classes in Germany (ag- door, Germany cluster P0 row DE002), rebuilt 2026-11-03 on the live
// URL that was a hand-written ag page (5ede49a00, July 2026). Spec section 2: the old page said our price is "flat and
// billed in US dollars everywhere outside India" (false since CAD went live on 24 October 2026), and carried DAAD,
// KI-MIG, JUPITER and university fee claims that were not re-verified. None of that is carried over.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Spine: one learned number. An original machine-learning project on a real German open dataset that predicts the
// temperature an hour ahead, first against a "same as now" baseline, then with one learned number, then with 24.
// Sources (read raw, quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md, fetched 2 Nov 2026):
//  - KMK, Bildung in der digitalen Welt: "In dem 2026 verabschiedeten KMK-Kompetenzrahmen ... um KI-bezogene Kompetenzen
//    ergänzt" (fact 102); "Handlungsempfehlung für die Bildungsverwaltung zum Umgang mit Künstlicher Intelligenz in
//    schulischen Bildungsprozessen von 2024" (fact 103).
//  - BWKI, bw-ki.de/teilnahmebedingungen: run by the Tübingen AI Center; machine-learning methods required; Sek I and II,
//    alone or in teams of up to four; documentation, runnable code and a 2 to 4 minute video; up to 10 teams in the
//    November final; projects in German or English (facts 208 to 213). 2026 timeline: registration from 1 March 2026,
//    project deadline 20 September 2026, final in Tübingen 13 November 2026 (fact 214).
//  - GI Informatik-Monitor 2026/27: about 15% of Oberstufe pupils take Informatik (fact 97).
//  - AI tool ages: content/ai-tool-age-audit.json (OpenAI terms: 13, parent's permission under 18; Claude 18+).
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Stadt Bochum, "Bochum - Smarte Bänke - Wetterstation Old Wattsche (Innenstadt)", via bochum.opendata.ruhr
//    (dataset 48efcc84-5d69-4f70-a6d9-5253a1aa1fe5, resource bochum_ecowitt_gw2001_b8d61a7ace0b.csv), licence
//    Datenlizenz Deutschland Zero 2.0; downloaded 2 November 2026, 25,936,443 bytes, sha256 202729ebddbd4e5b..., 190,435
//    readings about five minutes apart from 12 April 2024 to 1 November 2026, with gaps.
// Our own calculations (scratchpad de/ai/prep.py, model.py, byhour.py, python3 -I): readings on the hour with a
// temperature, 13,344 hours; 13,181 hours with the hour before and after present; training = hours before 2026 (8,574),
// test = 2026 hours (4,607, March to October 2026). Same-as-now average error 0.94 C; learned k 0.5 (0.495); trend model
// 0.75 C; hour-by-hour model (24 learned numbers) 0.66 C; k at 08:00 is 1.37, at 12:00 0.06, at 16:00 -0.16. Largest
// single-hour change in the test set: 29 May 2026, 30.7 C at 19:00 to 20.3 C at 20:00.
// Lesson family: beat the baseline first, and test on data the model has never seen.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  'from datetime import datetime, timedelta',
  '',
  'temp = {}',
  'with open("bochum_hourly.csv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f):',
  '        temp[row["hour"]] = float(row["temp"])',
  '',
  'def hour_key(moment):',
  '    return moment.strftime("%Y-%m-%d %H")',
  '',
  'examples = []',
  'for hour in temp:',
  '    now = datetime.strptime(hour, "%Y-%m-%d %H")',
  '    before = hour_key(now - timedelta(hours=1))',
  '    after = hour_key(now + timedelta(hours=1))',
  '    if before in temp and after in temp:',
  '        examples.append((hour, temp[before], temp[hour], temp[after]))',
  '',
  'train = [e for e in examples if e[0] < "2026"]',
  'test = [e for e in examples if e[0] >= "2026"]',
  '',
  'def error(predictions):',
  '    return sum(abs(p - real) for p, real in predictions) / len(predictions)',
  '',
  'same_as_now = [(now, after) for _, before, now, after in test]',
  'print("Training hours:", len(train), " Test hours:", len(test))',
  'print("Same as now, average error:", round(error(same_as_now), 2), "C")',
  '',
  '# learn one number k: how much of the last hour\'s change carries on',
  'top = sum((now - before) * (after - now) for _, before, now, after in train)',
  'bottom = sum((now - before) ** 2 for _, before, now, after in train)',
  'k = top / bottom',
  'trend = [(now + k * (now - before), after) for _, before, now, after in test]',
  'print("Learned k:", round(k, 2))',
  'print("Trend model, average error:", round(error(trend), 2), "C")'
].join('\n');

const V2 = [
  'k_by_hour = {}',
  'for h in range(24):',
  '    rows = [e for e in train if int(e[0][11:13]) == h]',
  '    top = sum((n - b) * (a - n) for _, b, n, a in rows)',
  '    bottom = sum((n - b) ** 2 for _, b, n, a in rows)',
  '    k_by_hour[h] = top / bottom',
  '',
  'by_hour = [(n + k_by_hour[int(hr[11:13])] * (n - b), a) for hr, b, n, a in test]',
  'print("Hour-by-hour model, average error:", round(error(by_hour), 2), "C")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'door', label: 'AI and machine learning classes' },
  slug: 'ai-and-machine-learning-classes-in-germany',
  code: 'dki',
  accent: '#5B3A68',
  accentRationale: 'AI and machine learning in Germany: a deep plum #5B3A68, clear of the Germany hub fir green, the Berlin brick, the Informatik teal and the Abitur navy; contrast on the paper #FBF8F2 above 8:1 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'AI and machine learning classes in Germany',
  title: 'AI and Machine Learning Classes in Germany, Live in English',
  description: 'Live online AI and machine learning classes in English for teens and adults in Germany: Python, models you build yourself, the BWKI and a real Bochum data project.',
  ogDescription: 'Machine learning taught live in English for learners in Germany from 13, with an original project that predicts the temperature in Bochum an hour ahead and has to beat a very simple guess first.',
  twitterDescription: 'AI and machine learning for teens and adults in Germany, live in English, built on real German open data.',
  pageName: 'AI and Machine Learning Classes in Germany',
  webPageDescription: 'A guide for teenagers and adults in Germany to learning artificial intelligence and machine learning properly: what German schools now say about AI, the Bundeswettbewerb Künstliche Intelligenz, AI tool age rules, and an original Python project on Bochum\'s open weather data.',
  courseDescription: 'Live online AI and machine learning classes in English for learners in Germany aged 13 and up: Python, data, models built from first principles and real projects, in a group of fifteen to twenty or one to one, with one regular mentor.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'AI and machine learning',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#schools', label: 'Schools' },
    { href: '#project', label: 'Project' },
    { href: '#bwki', label: 'BWKI' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Germany &middot; Artificial intelligence &middot; Ages 13 and up',
  h1: 'AI and machine learning classes in Germany',
  lede: 'Typing a question into an AI tool takes seconds; building the simplest model yourself, and proving whether it works, is a different skill. This page is about that second skill. It covers what German schools are now asked to teach about AI, a national AI competition that accepts projects in English, which AI tools a teenager may legally use, and a project on a Bochum weather station in which a learned model first has to beat the guess "it will stay the same".',
  secondaryCta: { href: '#project', label: 'See the Bochum project' },
  wa: 'Hello Modern Age Coders, I am in Germany and would like a free first class in AI and machine learning, taught in English.',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; models built and tested, not just prompted',
  spec: [
    ['Ages', '13 to 18, and adults'],
    ['Starts with', 'Python and real data'],
    ['Then', 'Models built, tested and explained'],
    ['German times', 'Afternoons, evenings and weekends'],
    ['Teachers', 'Mentors based in India'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'AI and machine learning classes for learners in Germany at Modern Age Coders are live online lessons in English for teenagers from 13 and for adults: Python first, then real datasets, then models the learner builds, tests against a simple baseline and can explain. One regular mentor matches each learner\'s pace and accent. Classes run in German afternoons, evenings and weekends, in a group of fifteen to twenty or one to one.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three AI courses for learners in Germany',
    lede: 'One for teenagers who want to understand how models learn, one for adults who want AI to do real work for them, and one for adults ready to build with AI coding agents.',
    items: [
      { course: 'ai-ml-masterclass-teens', code: 'DKI / 01', title: 'AI and Machine Learning for Teens', note: 'Ages 13 to 18. Python, data and the maths behind models, step by step, up to projects a teenager could enter for the BWKI.' },
      { course: 'python-ai-automation-masterclass-college', code: 'DKI / 02', title: 'Python Automation and Applied AI', note: 'Adults. Scripts that read files, clean data and call AI services, so that a weekly report or a sorting job runs by itself.' },
      { course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', code: 'DKI / 03', title: 'AI Coding Agents for Adults', note: 'Adults 18 and over only. Working with Codex and Claude Code: planning, reviewing and testing what an agent writes, rather than trusting it.' }
    ]
  },

  sections: [
    {
      id: 'schools',
      eyebrow: 'AI at German schools',
      h2: 'What do German schools teach about AI?',
      lede: 'The Länder agreed a common frame through the KMK, but how much AI a pupil actually meets still depends on the Land, the school and above all on whether they take Informatik.',
      body: [
        { kind: 'two',
          leftH3: 'What the KMK has decided',
          left: [
            'The KMK published a recommendation in 2024 for education administrations on how to handle artificial intelligence in school learning. In 2026 it adopted an updated version of its competence framework Bildung in der digitalen Welt, which adds AI-related competences to the areas first set out in its 2016 strategy.',
            'Those are frameworks for using and judging AI in every subject. They do not put a model-building course on every timetable.'
          ],
          rightH3: 'Where building AI actually happens',
          right: [
            'Writing and training a model belongs to Informatik, and Informatik is uneven. The Gesellschaft für Informatik estimates in its 2026/27 Informatik-Monitor that only about 15 percent of pupils in the Oberstufe take the subject in the Qualifikationsphase.',
            'So most teenagers in Germany will use AI tools at school without ever seeing what is inside one. That gap is exactly what a machine-learning class can fill.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Using AI and building AI: what each one asks of a learner', head: ['Skill', 'Using an AI tool', 'Building a model'], rows: [
          ['Starting point', 'An account and a question', 'Python and a dataset'],
          ['Main question', 'Is this answer useful?', 'Is this model better than a simple guess?'],
          ['How you check it', 'Compare with a trusted source', 'Measure the error on data the model has not seen'],
          ['What can go wrong', 'A confident wrong answer', 'A model that only remembers its training data'],
          ['Where it is taught', 'Across subjects, under the KMK framework', 'Mostly in Informatik, if it is chosen']
        ] },
        { kind: 'source', html: 'Sources: KMK, Bildung in der digitalen Welt (the 2024 recommendation on AI in schools and the 2026 update of the competence framework); Gesellschaft für Informatik, Informatik-Monitor 2026/27. Read on 2 November 2026. The table is our own summary.' }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A real German dataset',
      h2: 'Can a model predict the temperature in Bochum an hour from now?',
      lede: 'Bochum publishes the readings of a weather station on a smart bench in its city centre, free for anyone to reuse. Our students use it to learn the habit that separates machine learning from guessing: always measure against a simple baseline, on data the model has never seen.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The dataset is called Bochum, Smarte Bänke, Wetterstation Old Wattsche, published by the city on its open data portal under the Datenlizenz Deutschland Zero 2.0. The file we downloaded on 2 November 2026 holds 190,435 readings, about five minutes apart, from April 2024 to the start of November 2026, with some gaps where the station was silent.',
            'We keep one reading per hour, the one on the hour, which leaves 13,344 hours with a temperature, and save them as bochum_hourly.csv.'
          ],
          rightH3: 'The rule we never break',
          right: [
            'The model may learn only from hours before 1 January 2026. Every hour from 2026 is locked away as the test set and used once, at the end. A model that is tested on the hours it learned from will look far better than it is.',
            'The first prediction is not a model at all: the temperature in an hour will be the same as now. Any model worth keeping has to beat that.'
          ] },
        { kind: 'code', label: 'Version 1: a baseline, then one learned number', lang: 'Python', code: V1, note: 'It prints <code>Training hours: 8574  Test hours: 4607</code>, then <code>Same as now, average error: 0.94 C</code>, <code>Learned k: 0.5</code> and <code>Trend model, average error: 0.75 C</code>.' },
        { kind: 'p', mt: true, html: 'The baseline is already good: on average it is wrong by less than one degree, because temperature rarely jumps in an hour. The trend model learns a single number from the 8,574 training hours, how much of the last hour\'s change tends to carry on into the next hour, and the answer is 0.5: about half. With that one number the average error on the 2026 test hours falls from 0.94 to 0.75 degrees. That is machine learning in its smallest honest form: a number fitted to data, judged on data it has never seen, against a guess anyone could make.' },
        { kind: 'code', label: 'Version 2: a different number for every hour of the day', lang: 'Python', code: V2, note: 'It prints <code>Hour-by-hour model, average error: 0.66 C</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Three predictions for the 4,607 test hours of 2026, and what each one learned (our calculation)', head: ['Prediction', 'Numbers learned', 'Average error'], rows: [
          ['Same as now', '0', '0.94 C'],
          ['Trend model', '1', '0.75 C'],
          ['Hour-by-hour model', '24', '0.66 C']
        ] },
        { kind: 'source', html: 'Data: Stadt Bochum, Smarte Bänke, Wetterstation Old Wattsche (Innenstadt), bochum.opendata.ruhr, Datenlizenz Deutschland Zero 2.0, downloaded 2 November 2026. Training on hours from April 2024 to December 2025, testing on March to October 2026. The errors, the learned numbers and the test split are our own work.' },
        { kind: 'p', mt: true, html: 'The 24 learned numbers tell a story about a day. At 08:00 the number is 1.37: in the morning a warming trend speeds up. At 12:00 it is 0.06 and at 16:00 it is below zero: around midday the temperature levels off, and in the late afternoon a rise is more likely to turn than to continue. Nobody typed those facts in; the model found them in the data. It still misses badly at times. On 29 May 2026 the station read 30.7 degrees at 19:00 and 20.3 at 20:00, a fall of more than ten degrees in one hour that no trend could have seen coming.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Start.</strong> Run Version 1 and write down the three numbers it prints before reading on.',
          '<strong>Break the rule on purpose.</strong> Fit k on all the hours, test included, and compare the error. Explain why the result cannot be trusted.',
          '<strong>Improve it.</strong> Fit Version 2, then try one number per month instead of per hour. Which helps more, and why might that be?',
          '<strong>Going further.</strong> Find the ten test hours with the largest error and look at what the station recorded around them. Write one paragraph on what a better model would need to know.'
        ] }
      ]
    },
    {
      id: 'bwki',
      eyebrow: 'A national AI competition',
      h2: 'Can a pupil in Germany enter the BWKI with a project in English?',
      lede: 'Yes. The Bundeswettbewerb Künstliche Intelligenz says in its own conditions that projects may be submitted in German or in English.',
      body: [
        { kind: 'two',
          leftH3: 'What the BWKI asks for',
          left: [
            'The BWKI is run by the Tübingen AI Center and is open to pupils in Sekundarstufe I and II, alone or in teams of up to four. Its conditions say a project must use machine-learning methods, and a submission needs written documentation, runnable code and a video pitch of two to four minutes. Up to ten teams are invited to the final in November.',
            'The competition is recommended by the KMK and is a member of the working group of national youth competitions.'
          ],
          rightH3: 'The 2026 round, as an example',
          right: [
            'For 2026 the organisers opened registration on 1 March 2026 and set the project deadline for 20 September 2026, with the final in Tübingen on 13 November 2026. The next round follows the same yearly rhythm; check the BWKI site for its dates before planning.',
            'A spring start leaves a pupil about six months from idea to submission, which is about the time our teen course needs to go from first models to a real project.'
          ] },
        { kind: 'p', mt: true, html: 'We are not connected with the BWKI or the Tübingen AI Center and we do not submit projects for anyone. What we do is teach the parts a strong entry needs: a clear question, a dataset with a licence that allows reuse, a baseline, an honest test, code that runs on someone else\'s computer and a short explanation of what the model can and cannot do. The Bochum project above has every one of those parts. Our <a class="ag-inline-link" href="/courses/german-informatics-competitions-course-biber-bwinf-bwki">German informatics competitions course</a> also prepares pupils for the BWKI.' }
      ]
    },
    {
      id: 'ages',
      eyebrow: 'AI tools and age',
      h2: 'Which AI tools can a teenager in Germany use?',
      lede: 'The providers set their own minimum ages, in their own terms. A class for teenagers has to respect them, so ours do.',
      body: [
        { kind: 'table', numCols: [], caption: 'Minimum ages in the providers\' own terms, as quoted in our AI tools age guide', head: ['Tool', 'Minimum age', 'What the terms add'], rows: [
          ['ChatGPT (OpenAI)', '13', 'Under 18 needs a parent\'s or guardian\'s permission'],
          ['Claude (Anthropic)', '18', 'Adults only'],
          ['Python and its libraries', 'None', 'Open source; the learner\'s own code']
        ] },
        { kind: 'source', html: 'Source: the providers\' terms, quoted in full with links in our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a>. Terms change; that page records the date each one was read.' },
        { kind: 'p', mt: true, html: 'That is one reason our teenage classes build models in plain Python rather than relying on a chatbot. A thirteen year old can write every line of the Bochum project with no account anywhere. Our course on AI coding agents uses Claude Code, so it is for adults only, and we never place a learner under 18 in it.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When do AI classes run in German time?',
      lede: 'Teenagers mostly come in the late afternoon or at weekends, adults in the early evening. The mentor is in India, where the clock is ahead.',
      body: [
        { kind: 'table', numCols: [], caption: 'Typical German class times and the time in India', head: ['Germany', 'India, winter (to 28 March 2027)', 'India, summer (from 28 March 2027)'], rows: [
          ['15:30', '20:00', '19:00'],
          ['17:30', '22:00', '21:00'],
          ['Saturday 10:30', '15:00', '14:00'],
          ['Sunday 13:00', '17:30', '16:30']
        ] },
        { kind: 'source', html: 'Germany is on UTC+1 in winter and UTC+2 in summer under the Einheitenzeitgesetz; summer time ended on 25 October 2026 and returns on 28 March 2027. India is on UTC+5:30 throughout the year.' },
        { kind: 'p', mt: true, html: 'You choose the time of the free first class in your own clock. Group classes run at set times, and one-to-one learners agree a time with their mentor that can move when school, work or exams get busy.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'From first script to a model you can defend',
    lede: 'Our own milestones for AI learners, used to place each learner and to report progress.',
    table: { caption: 'Machine-learning milestones (ours)', head: ['Stage', 'Typical start', 'The learner can'], rows: [
      ['1. Python and data', 'Month 1', 'Read a CSV file, clean it and count what is missing'],
      ['2. Baselines', 'Month 2', 'State a simple guess and measure its error'],
      ['3. Fitted models', 'Months 3 to 4', 'Fit a model, split the data honestly and beat the baseline'],
      ['4. Real libraries', 'Months 5 to 7', 'Use scikit-learn or PyTorch and explain what each step does'],
      ['5. A project', 'Months 8 and up', 'Plan, document and present a model, limits included']
    ] },
    left: { h3: 'For teenagers', ps: [
      'If your model cannot beat "same as now", it has not learned anything yet.',
      'Never let the test set anywhere near training. Lock it away first.'
    ] },
    right: { h3: 'For adults', ps: [
      'Ask of every AI result at work what it was compared with, and on which data.',
      'A small model you understand is often worth more than a large one you cannot check.'
    ] }
  },

  catalogue: {
    eyebrow: 'More AI courses',
    h2: 'Nine more ways into AI from Germany',
    lede: 'Every course is live, in English, with one regular mentor, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'DKI / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The language every model on this page is written in.' },
        { code: 'DKI / TEEN / 02', slug: 'vibe-coding-for-teens-python-web-ai-projects-course', title: 'Vibe coding for teens', blurb: 'Building with AI help while learning to check it.' },
        { code: 'DKI / TEEN / 03', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'Competitions and BWKI', blurb: 'From contest puzzles to an AI project entry.' }
      ] },
      { num: 'II', h3: 'The maths underneath', sub: 'Ages 15 and up', courses: [
        { code: 'DKI / MATHS / 01', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Errors, averages and uncertainty, properly.' },
        { code: 'DKI / MATHS / 02', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for data analytics', blurb: 'The algebra and statistics behind data work.' },
        { code: 'DKI / MATHS / 03', slug: 'abitur-mathematics-course-in-english', title: 'Abitur maths in English', blurb: 'Analysis and Stochastik for the German Abitur.' }
      ] },
      { num: 'III', h3: 'Adults and work', sub: 'Ages 18 and up', courses: [
        { code: 'DKI / WORK / 01', slug: 'build-ai-agents-with-google-gemini-enterprise-course', title: 'Gemini Enterprise agents', blurb: 'Agents for teams on Google\'s platform, one to one.' },
        { code: 'DKI / WORK / 02', slug: 'vibe-coding-for-college-fullstack-ai-dsa-career-course', title: 'Vibe coding for adults', blurb: 'Full-stack projects with AI help, tested by you.' },
        { code: 'DKI / WORK / 03', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'The foundations behind efficient code.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live AI classes work for learners in Germany',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Late afternoon', l: 'From about 15:30 German time, for teenagers after school.' },
      { time: 'Early evening', l: 'For adults after work, up to about 18:30 German time.' },
      { time: 'One to one', l: 'A time agreed with the mentor, weekends included.' }
    ],
    cells: [
      { h3: 'Code from day one', p: 'Learners type and run every model themselves.' },
      { h3: 'Honest testing', p: 'Every model is judged against a baseline.' },
      { h3: 'English at your pace', p: 'Clear explanations, rephrased when needed.' },
      { h3: 'Same mentor', p: 'One person who follows the learner\'s progress.' },
      { h3: 'Age rules kept', p: 'Under-18 learners never use adult-only tools.' },
      { h3: 'Group or private', p: 'Fifteen to twenty learners, or one alone.' }
    ]
  },

  projectsH2: 'Projects built by our students',
  projectsLede: 'Some of what our students around the world have built is below; more is collected on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews left on Google by our students and their parents, unedited.',

  fees: {
    h2: 'Fees for AI classes in Germany',
    lede: 'The monthly fee buys eight live classes. It appears here in euro, worked out at the European Central Bank reference rate, while the charge itself is made in US dollars; your bank converts it, so the figure on your statement may be slightly different.',
    free: ['A free first class', 'A short Python task at your level', 'No card needed'],
    group: ['Fifteen to twenty learners of a similar level', 'One regular mentor', 'Two classes a week', 'Monthly, stop whenever you like'],
    one: ['One learner, one mentor', 'Your own projects and pace', 'Times you agree together']
  },

  faq: {
    eyebrow: 'Learners in Germany ask',
    h2: 'AI and machine learning classes in Germany: common questions',
    items: [
      { q: 'Are the AI classes taught in German?', a: 'No. Every class is live and in English only, with a mentor who matches the learner\'s pace and accent. The programming itself, Python and its libraries, is written in English keywords whatever the language of the lesson.' },
      { q: 'What age can someone start learning AI with you?', a: 'From 13 for machine learning. Younger children can start with coding and an AI literacy course. Adults of any age can join the adult courses.' },
      { q: 'Do I need to know Python first?', a: 'No. The teen course and the adult automation course both start with Python. A learner who already codes is placed further along after the free first class.' },
      { q: 'Do German schools teach machine learning?', a: 'Mostly within Informatik, which only about 15 percent of Oberstufe pupils take in the Qualifikationsphase, according to the Gesellschaft für Informatik for 2026/27. The KMK added AI competences to its digital education framework in 2026, which covers using and judging AI in all subjects.' },
      { q: 'Can my child enter the BWKI with an English project?', a: 'Yes. The Bundeswettbewerb Künstliche Intelligenz states that projects may be submitted in German or English. It is open to Sekundarstufe I and II pupils, alone or in teams of up to four, and projects must use machine-learning methods. We are not connected with the BWKI.' },
      { q: 'Will my teenager use ChatGPT or Claude in class?', a: 'Our teen classes build models in plain Python and do not need any chatbot account. OpenAI\'s terms set 13 as the minimum age with a parent\'s permission under 18, and Anthropic\'s terms put Claude at 18 and over, so we never use Claude with under-18 learners.' },
      { q: 'When are classes in German time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Teenagers usually come in the late afternoon or at weekends and adults in the early evening.' },
      { q: 'Which currency do I pay in?', a: 'Fees are shown here in euro at the European Central Bank reference rate, and the payment is taken in US dollars. Your bank converts it, so the amount on your statement can differ a little. The first class is free.' },
      { q: 'Are the classes live?', a: 'Yes, every class is live with a mentor, in a group of fifteen to twenty or one to one. There are no pre-recorded video courses.' },
      { q: 'What will I have built at the end?', a: 'At least one model you trained, tested against a baseline on data it had not seen, and can explain, like the Bochum temperature project on this page, and usually several more on datasets you chose yourself.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for learners in Germany interested in AI.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'All our pages for learners in Germany.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Every major tool\'s minimum age, quoted.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Informatik support, explained in German.' },
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'The maths beneath every model.' },
      { href: '/ai-projects-for-kids', label: 'AI projects for kids', p: 'Ideas for younger learners.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our live classes, step by step.' }
    ]
  },

  start: {
    h2: 'Book a free first AI class',
    lede: 'In the first class the mentor asks what you want AI for, sets a short Python task at your level and suggests the course that fits, in English and at your pace.',
    readFirst: 'To read more before booking, see <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or browse <a class="ag-inline-link" href="/courses">every course</a>.',
    note: 'All classes are live online in English, with mentors based in India. The quickest way to ask us something is WhatsApp, in English.',
    formNote: 'The first class is free; no card is asked for.'
  },

  footer: {
    cols: [
      { h4: 'AI', links: [
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/ai-projects-for-kids', label: 'AI projects for kids' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths in English' },
        { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids in Berlin' }
      ] }
    ],
    bottomRight: 'First, beat the baseline'
  },

  personalityCss: `
.ag-root.ag-dki .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-dki .ag-capsule { border-left-width: 4px; }
.ag-root.ag-dki .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-dki .ag-table td:last-child { font-variant-numeric: tabular-nums; }
.ag-root.ag-dki .ag-code-head b { letter-spacing: 0.02em; }
`,

  dossier: {
    curriculumAuthority: 'KMK, Bildung in der digitalen Welt (2024 AI recommendation, 2026 framework update); Gesellschaft für Informatik, Informatik-Monitor 2026/27; Bundeswettbewerb Künstliche Intelligenz, Teilnahmebedingungen and 2026 timeline; providers\' terms via our AI tools age guide; Einheitenzeitgesetz. Read 2 November 2026. Stadt Bochum, Smarte Bänke weather station, Datenlizenz Deutschland Zero 2.0.',
    localProject: 'One learned number: an original Python project on Bochum\'s smart-bench weather station predicting the temperature an hour ahead, trained on hours before 2026 and tested on 4,607 hours of 2026: same-as-now error 0.94 C, a one-number trend model (k 0.5) 0.75 C, an hour-by-hour model 0.66 C. Lesson family: beat the baseline first, and test on data the model has never seen.',
    requiredMentions: ['bochum_hourly.csv', 'Same as now, average error: 0.94 C', 'Trend model, average error: 0.75 C', 'Hour-by-hour model, average error: 0.66 C', 'Wetterstation Old Wattsche', 'projects may be submitted in German or in English', '30.7 degrees at 19:00 and 20.3 at 20:00', 'First, beat the baseline'],
    sources: [
      { claim: 'KMK 2024 AI recommendation and 2026 framework update.', url: 'https://www.kmk.org/themen/bildung-in-der-digitalen-welt.html' },
      { claim: 'About 15 percent of Oberstufe pupils take Informatik.', url: 'https://informatik-monitor.de/' },
      { claim: 'BWKI conditions: ML methods, teams up to four, German or English, final in November.', url: 'https://www.bw-ki.de/teilnahmebedingungen' },
      { claim: 'Bochum smart-bench weather station data and licence.', url: 'https://bochum.opendata.ruhr/dataset/48efcc84-5d69-4f70-a6d9-5253a1aa1fe5' },
      { claim: 'AI tool minimum ages.', url: 'https://learn.modernagecoders.com/ai-tools-age-guide' }
    ],
    rejectedClaims: [
      '"Flat and billed in US dollars everywhere outside India": false since CAD went live, removed.',
      'DAAD, KI-MIG, JUPITER and university fee figures from the old page: not re-verified, removed.',
      'Any cause for the 29 May 2026 temperature fall: not in the data, none given.',
      'Any affiliation with the BWKI, the Tübingen AI Center, the KMK or the City of Bochum: none.',
      'German-language teaching: we teach in English only, and the page says so.'
    ]
  }
};
