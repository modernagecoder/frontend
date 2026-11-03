'use strict';
// Coding and AI classes in Darmstadt (ag- city page, Germany cluster P6 row DE173, tier-2 slug shape coding-and-ai: all
// ages). Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent;
// pages show euro, checkout charges USD.
// Spine: "a model trained on yesterday". Hessen schools have no compulsory Informatik, so coding and AI in Darmstadt
// are learnt outside the timetable. The page sets out ages, the Hessen facts, which AI tools a learner in Germany may use
// at what age, and a project on 65 years of the city's monthly temperatures in which a model learnt from 1961 to 1990
// is too cold for 2016 to 2025: data drift, and why models must be retrained.
// Sources (read raw; copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/coding-and-ai-classes-in-darmstadt-germany/):
//  - GI Informatik-Monitor 2026/27, Hessen page: "Schulartübergreifend findet kein verbindlicher Informatikunterricht
//    statt." with an elective from grade 7 at the Gymnasium (FACTS 77). National page: Hessen among six Länder without
//    compulsory Informatik (92); no binding plans in Berlin, Brandenburg and Hessen (96).
//  - KMK Ferienkalender 2026/27: "Hessen (4) 05.10. - 17.10. 23.12. - 12.01. -- 22.03. - 02.04. -- 28.06. - 06.08."
//    (FACTS 276).
//  - AI tool ages, content/ai-tool-age-audit.json (vendor terms quoted there): ChatGPT 13, parent's permission under 18
//    (openai.com row terms); Google Gemini "16 in Germany" (support.google.com/gemini); Microsoft Copilot "18 in ...
//    Germany"; Claude 18 everywhere (anthropic.com consumer terms).
//  - Destatis GV-ISys 31.12.2024: Darmstadt 167,029; Hessen 6,280,793 (places.tsv).
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Wissenschaftsstadt Darmstadt, "Monatliche Durchschnittstemperatur ab 1961" (opendata.darmstadt.de, via Open
//    Data Hessen and GovData), file Lufttemperatur_1961-2026_Mittelwert_2.csv (4,199 bytes), licence Datenlizenz
//    Deutschland Namensnennung 2.0 (dataset page dl-de/by-2-0), downloaded 3 November 2026. Notes: data from the city of
//    Darmstadt and the DWD; the station moved several times (Botanischer Garten to 10/1965 ... seit 8/1995 Dieburger
//    Straße, DWD Station 917).
// Our own calculations (scratchpad de/w/T4/bin da_v1.py, da_v2.py; python3 -I): 781 months (1961 to January 2026).
// Normals from 1961-1990: tested on 1961-1990 (1.45, 0.0), on 2016-2025 (1.55, 1.13); normals from 1986-2015 on 2016-2025
// (1.35, 0.78); retrained yearly on the 30 years before (1.31, 0.66). Means of the city's annual values: 1961-1990 9.99 C,
// 2016-2025 11.09 C. Warmest year in the file 2023 (11.7), coldest 1963 (8.0); warmest month July 1994 (23.6), coldest
// January 1963 (-6.1).
// Lesson family: data drift; a model trained on the past goes stale when the world changes, so test on recent data and retrain.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  "temps = {}",
  "with open(\"darmstadt_monthly.csv\", encoding=\"latin-1\") as source:",
  "    header = source.readline()",
  "    for line in source:",
  "        cells = line.strip().split(\";\")",
  "        year = int(cells[0])",
  "        for month in range(1, 13):",
  "            if cells[month] != \"\":",
  "                temps[(year, month)] = float(cells[month].replace(\",\", \".\"))",
  "",
  "def learn(first, last):",
  "    normal = {}",
  "    for month in range(1, 13):",
  "        values = [temps[(y, month)] for y in range(first, last + 1)]",
  "        normal[month] = sum(values) / len(values)",
  "    return normal",
  "",
  "def test(normal, first, last):",
  "    errors = [temps[(y, m)] - normal[m] for y in range(first, last + 1) for m in range(1, 13)]",
  "    size = sum(abs(e) for e in errors) / len(errors)",
  "    bias = sum(errors) / len(errors)",
  "    return round(size, 2), round(bias, 2)",
  "",
  "old = learn(1961, 1990)",
  "print(\"Months in the file:\", len(temps))",
  "print(\"Trained 1961-1990, tested 1961-1990:\", test(old, 1961, 1990))",
  "print(\"Trained 1961-1990, tested 2016-2025:\", test(old, 2016, 2025))"
].join('\n');

const V2 = [
  "recent = learn(1986, 2015)",
  "print(\"Trained 1986-2015, tested 2016-2025:\", test(recent, 2016, 2025))",
  "",
  "rolling = []",
  "for y in range(2016, 2026):",
  "    normal = learn(y - 30, y - 1)          # retrain every year on the 30 years before it",
  "    rolling += [temps[(y, m)] - normal[m] for m in range(1, 13)]",
  "print(\"Retrained every year, tested 2016-2025:\",",
  "      (round(sum(abs(e) for e in rolling) / len(rolling), 2), round(sum(rolling) / len(rolling), 2)))"
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Darmstadt: coding and AI' },
  slug: 'coding-and-ai-classes-in-darmstadt-germany',
  code: 'cda',
  accent: '#183D4C',
  accentRationale: 'Coding and AI in Darmstadt: a blue-black #183D4C taken from the slate and glass of the Mathildenhöhe; contrast 9.41 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-hesse', name: 'Hesse' }],
  routeLabel: 'Coding and AI classes in Darmstadt',
  title: 'Coding and AI Classes in Darmstadt, Live Online in English',
  description: 'Coding and AI classes in Darmstadt for children, teens and adults, live online in English: Hessen school facts, AI tool age rules, and a data-drift project.',
  ogDescription: 'Live online coding and AI in English for every age in Darmstadt: why Hessen schools leave Informatik optional, which AI tools a learner in Germany may use at what age, and an original project on 65 years of Darmstadt temperatures.',
  twitterDescription: 'Coding and AI for all ages in Darmstadt, live in English, with a data-drift project on city temperatures.',
  pageName: 'Coding and AI Classes in Darmstadt',
  webPageDescription: 'A guide for families and adult learners in Darmstadt to live online coding and AI classes in English, with Hessen school facts from the Gesellschaft für Informatik and the KMK, the published minimum ages of common AI tools, and an original Python project on the Wissenschaftsstadt Darmstadt\'s monthly temperature series since 1961.',
  courseDescription: 'Live online coding and AI classes in English for learners in Darmstadt from age 6 to adult: Scratch, Python, data science and machine learning, in a group of fifteen to twenty or one to one, with one regular mentor.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Darmstadt',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#hessen', label: 'Hessen' },
    { href: '#tools', label: 'AI tools' },
    { href: '#drift', label: 'Drift' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Darmstadt &middot; Coding and AI &middot; From age 6',
  h1: 'Coding and AI classes in Darmstadt',
  lede: 'In Hessen no pupil has to take Informatik, and the Gesellschaft für Informatik knows of no binding plan to change that. So in Darmstadt, coding and AI are learnt mostly outside the timetable. Below: the learners our English-language live classes suit, the Informatik Hessen schools do offer, which AI tools a learner in Germany may legally use and from what age, and a project on 65 years of Darmstadt temperatures where a model trained in the past quietly goes wrong in the present.',
  secondaryCta: { href: '#drift', label: 'See the drift project' },
  wa: 'Hello Modern Age Coders, we live in Darmstadt and would like coding or AI classes in English. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; models built and tested, taught in English',
  spec: [
    ['For', 'Children from 6, teenagers, adults'],
    ['Covers', 'Scratch, Python, data, machine learning'],
    ['How', 'Live online lessons'],
    ['Class', 'Fifteen to twenty, or one to one'],
    ['Teaching language', 'English, mentors in India'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Coding and AI classes in Darmstadt at Modern Age Coders are taught live online in English to children from 6, teenagers and adults: Coding for Kids with Scratch, AI and Machine Learning for Teens, and Data Science for adults. Each learner keeps one mentor, who works from India and fits pace and accent to the person; lessons run for fifteen to twenty people at once or privately. No Hessen pupil is required to take Informatik.',

  picks: {
    eyebrow: 'Starting points',
    h2: 'Which coding or AI course suits a Darmstadt learner?',
    lede: 'A child starts by making, a teenager by building models, an adult by working with real data. Three courses for those three starts.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'CDA / 01', title: 'Coding for Kids', note: 'Children from six make Scratch stories and games, then apps, and finish with first ideas about machines that learn. Grouped by age.' },
      { course: 'ai-ml-masterclass-teens', code: 'CDA / 02', title: 'AI and Machine Learning for Teens', note: 'Teenagers write models in Python step by step, test them fairly and learn why a model that worked last year can fail this year.' },
      { course: 'data-science-complete-masterclass-college', code: 'CDA / 03', title: 'Data Science', note: 'Adults and students: Python, statistics, machine learning and the habit of checking a model on recent data before trusting it.' }
    ]
  },

  sections: [
    {
      id: 'who',
      eyebrow: 'Who it suits',
      h2: 'Who takes coding and AI classes with us in Darmstadt?',
      lede: 'Darmstadt calls itself a Wissenschaftsstadt, a city of science, and our learners here range from Grundschule children to researchers who want Python for their own data.',
      body: [
        { kind: 'table', numCols: [], caption: 'Learners and their usual first course (our recommendation)', head: ['Learner', 'First course', 'What they make in month one'], rows: [
          ['Child, 6 to 8', 'Coding for Kids', 'A Scratch character that moves and talks'],
          ['Child, 9 to 12', 'Python and AI for Kids', 'A turtle drawing and a number game'],
          ['Pupil, 13 to 15', 'Python for Teens', 'A program that reads a file and answers a question'],
          ['Pupil, 16 to 18', 'AI and Machine Learning for Teens', 'A first model tested on unseen data'],
          ['Adult', 'Data Science', 'A clean dataset, a chart and a simple model']
        ] },
        { kind: 'p', mt: true, html: 'Every course is live, with one mentor who stays the same, and the learner always does the typing. A family can book different courses for different members, each at their own time.' }
      ]
    },
    {
      id: 'hessen',
      eyebrow: 'Hessen schools',
      h2: 'Does a Darmstadt school teach Informatik?',
      lede: 'Some do, as an option. None has to. Everything in this section was checked against the GI monitor and the KMK calendar on 2 November 2026.',
      body: [
        { kind: 'two',
          leftH3: 'Optional, not required',
          left: [
            'The Informatik-Monitor 2026/27 states for Hessen that there is no compulsory Informatik across school types. At a Gymnasium, Informatik can be chosen as an elective from grade 7.',
            'Looking at all sixteen Länder, the monitor puts Hessen among six without Informatik that is compulsory for all, and one of three, with Berlin and Brandenburg, where no binding plans to introduce it are known.'
          ],
          rightH3: 'What that means at home',
          right: [
            'A Darmstadt child can finish school without ever having had a programming lesson, unless the school offers one and the child chooses it. Whether that happens depends on the school, the timetable and luck.',
            'Our classes do not replace school Informatik and award no marks. They give a learner who wants to code a regular, structured place to do it, whatever the school offers.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'When Hessen schools close in 2026/27', head: ['Break', 'From and to'], rows: [
          ['Herbstferien', '5 to 17 October 2026'],
          ['Weihnachtsferien', '23 December 2026 to 12 January 2027'],
          ['Osterferien', '22 March to 2 April 2027'],
          ['Sommerferien', '28 June to 6 August 2027']
        ] },
        { kind: 'source', html: 'Informatik rules: GI Informatik-Monitor 2026/27 (Hessen and the Länder comparison). Holiday dates: KMK calendar for 2026/27, version of 9 October 2025; Hessen lists no winter week this year. Modern Age Coders works independently of the GI, the KMK and the Hessen Kultusministerium.' }
      ]
    },
    {
      id: 'tools',
      eyebrow: 'AI tools and age',
      h2: 'Which AI tools may a learner in Germany use, and from what age?',
      lede: 'Parents ask this more than any other AI question. The answer is in each company\'s own terms, and for Germany several are stricter than the general rule.',
      body: [
        { kind: 'table', numCols: [], caption: 'Minimum ages in the providers\' own terms, as checked in our AI tools age audit', head: ['Tool', 'Minimum age', 'Note for Germany'], rows: [
          ['ChatGPT (OpenAI)', '13', 'Under 18 needs a parent\'s or guardian\'s permission'],
          ['Google Gemini, personal account', '13 generally', '16 in Germany'],
          ['Microsoft Copilot', '13 generally', '18 in Germany'],
          ['Claude (Anthropic)', '18', '18 everywhere, or higher where local law requires']
        ] },
        { kind: 'source', html: 'Source: our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a>, which quotes each provider\'s terms: OpenAI terms of use, Google Gemini help, Microsoft Copilot support and Anthropic consumer terms. Terms change; check the provider before signing a child up. This is not legal advice.' },
        { kind: 'p', mt: true, html: 'In our classes no one under 18 is asked to open any of these accounts. Children and teenagers learn how AI works by building small models in Python, which needs no account at all. Adults may use the tools in class, and the adult courses teach how to check what they produce.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'What is it like to learn coding and AI in English from a mentor in India?',
      lede: 'Every class is live and taught in English only. The mentor adapts to the learner, not the other way round.',
      body: [
        { kind: 'three', cells: [
          { h3: 'No German lessons', p: 'We teach in English, and there is no German-language version of any course. We say it plainly here so that no family discovers it after booking.' },
          { h3: 'Adapted to each learner', p: 'A mentor slows down for a seven year old and speeds up for a researcher. Accent, vocabulary and pace are matched to the person, and anything unclear is explained a second way.' },
          { h3: 'The field speaks English', p: 'Programming languages, AI libraries and most research papers use English. Learning in English means reading the documentation of a new tool without a translation step.' }
        ] },
        { kind: 'p', mt: true, html: 'Because the mentors work from India over live video, Darmstadt afternoons and early evenings are the usual class times. The same mentor teaches a learner for the whole course.' }
      ]
    },
    {
      id: 'drift',
      tint: 'tint',
      eyebrow: 'A real Darmstadt project',
      h2: 'Does a model trained on Darmstadt\'s past still fit today? A lesson in data drift',
      lede: 'The Wissenschaftsstadt Darmstadt publishes its average temperature for every month since January 1961. Teenage and adult learners work through it to see one of the commonest ways AI goes wrong: the model is fine, but the world it learnt from has moved on.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The city\'s dataset Monatliche Durchschnittstemperatur ab 1961 gives the monthly mean temperature in degrees Celsius, based on measurements by the city and the Deutscher Wetterdienst. Reuse is allowed with credit under the Datenlizenz Deutschland Namensnennung, version 2.0. Our copy, fetched on 3 November 2026, holds 781 months from January 1961 to January 2026.',
            'The city notes that the station moved several times, from the Botanischer Garten in the early 1960s to the Dieburger Straße since August 1995. Moves like that are a second, quieter kind of drift, and we tell learners about it.'
          ],
          rightH3: 'The model',
          right: [
            'The simplest temperature model there is: for each month, predict the average of that month over a training period. Train it on 1961 to 1990 and it knows what a normal Darmstadt January or July looked like then.',
            'We measure two things on test years. The average size of the error, and the bias: whether the errors lean one way. A good model has a bias near zero.'
          ] },
        { kind: 'code', label: 'Version 1: train on 1961 to 1990, test old and new', lang: 'Python', code: V1, note: 'It prints <code>Months in the file: 781</code>, <code>Trained 1961-1990, tested 1961-1990: (1.45, 0.0)</code> and <code>Trained 1961-1990, tested 2016-2025: (1.55, 1.13)</code>.' },
        { kind: 'p', mt: true, html: 'On its own training years, the model has no bias at all, which is guaranteed: an average has no lean on the data it came from. On 2016 to 2025 the bias is 1.13. On average every month of the last ten years was 1.13 degrees warmer than the 1961 to 1990 model expected. The code did not change. The world did.' },
        { kind: 'code', label: 'Version 2: train on recent years, or retrain every year', lang: 'Python', code: V2, note: 'Run after Version 1. It prints <code>Trained 1986-2015, tested 2016-2025: (1.35, 0.78)</code> and <code>Retrained every year, tested 2016-2025: (1.31, 0.66)</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Error and bias on 2016 to 2025, in degrees C (our calculation)', head: ['Model', 'Average error', 'Bias'], rows: [
          ['Normals from 1961 to 1990', '1.55', '+1.13'],
          ['Normals from 1986 to 2015', '1.35', '+0.78'],
          ['Retrained every year on the previous 30 years', '1.31', '+0.66']
        ] },
        { kind: 'p', html: 'Training on more recent years helps, and retraining every year helps a little more, but the bias never reaches zero, because the warming continued even inside each training window. Averaging the city\'s own annual values gives 9.99 degrees for 1961 to 1990 and 11.09 for 2016 to 2025. The warmest year in the file is 2023 at 11.7 degrees, the coldest 1963 at 8.0.' },
        { kind: 'source', html: 'Temperatures: Wissenschaftsstadt Darmstadt on opendata.darmstadt.de (Monatliche Durchschnittstemperatur ab 1961), credited under Datenlizenz Deutschland Namensnennung 2.0, file of 3 November 2026. Training periods, errors, biases and averages are our own. The project is about how models age, not a climate analysis; the station moves listed by the city mean the series is not a single site.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Children, 9 to 12.</strong> Write down what you wore to school last November. Would last year\'s clothes list work for this November? That is a model and its test.',
          '<strong>Teenagers.</strong> Change the test years to 1991 to 2000 and then 2006 to 2015. Plot the bias of the 1961 to 1990 model against the decade.',
          '<strong>Adults.</strong> Try training windows of 10, 20 and 30 years with yearly retraining. Which window gives the smallest error, and why might a short window be noisier?',
          '<strong>Everyone.</strong> Name one AI system you use whose world could drift. What would you test it on?'
        ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Times',
      h2: 'When are classes in Darmstadt time?',
      lede: 'Times are agreed with each learner. These examples show a Darmstadt time next to the mentor\'s clock.',
      body: [
        { kind: 'table', numCols: [], caption: 'Darmstadt slot against the clock in India', head: ['Darmstadt', 'India before the spring change', 'India after 28 March 2027'], rows: [
          ['14:50', '19:20', '18:20'],
          ['17:10', '21:40', '20:40'],
          ['Saturday 09:45', '14:15', '13:15'],
          ['Sunday 12:30', '17:00', '16:00']
        ] },
        { kind: 'source', html: 'Germany is on MEZ (UTC+1) for the winter and MESZ (UTC+2) for the summer, under the Einheitenzeitgesetz; this winter began on 25 October 2026 and summer time returns on 28 March 2027. India keeps UTC+5:30 throughout, so the mentor is four and a half hours ahead now and three and a half from late March. None of these rows is a fixed class.' },
        { kind: 'p', mt: true, html: 'Learners in Griesheim, Weiterstadt, Pfungstadt, Mühltal or Dieburg join just the same. Booking shows every slot in your own clock.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'What can a Darmstadt learner do at each stage?',
    lede: 'Our own stages, shared by every age group; only the speed differs.',
    table: { caption: 'Coding and AI stages (ours)', head: ['Stage', 'The learner can'], rows: [
      ['1. Command', 'Make a computer follow exact steps'],
      ['2. Code', 'Write Python with loops, functions and lists'],
      ['3. Data', 'Read and clean a real dataset'],
      ['4. Model', 'Train a simple model and measure its error'],
      ['5. Maintain', 'Test a model on new data and decide when to retrain']
    ] },
    left: { h3: 'For parents', ps: [
      'The drift project reaches stage 5. A teenager who has seen a model go stale knows that "the computer worked it out" is never the end of the story.',
      'Our reports describe what was built and explained.'
    ] },
    right: { h3: 'For learners', ps: [
      'A model is only as current as its training data.',
      'Always test on the most recent data you have.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Further courses Darmstadt learners choose',
    lede: 'The same live, English-language format, one mentor, class or private.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 14', courses: [
        { code: 'CDA / KIDS / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'Real typing for nine to twelve.' },
        { code: 'CDA / KIDS / 02', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'Machines that learn, explained simply.' },
        { code: 'CDA / KIDS / 03', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Hackathon for kids', blurb: 'A twelve-week build-up to a project.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'CDA / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The full language, project by project.' },
        { code: 'CDA / TEEN / 02', slug: 'teens-ai-tools-mastery-course', title: 'AI tools for teens', blurb: 'Age-appropriate tools, used critically.' },
        { code: 'CDA / TEEN / 03', slug: 'informatik-abitur-course-java-python', title: 'Informatik Abitur in English', blurb: 'For pupils who choose Informatik.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Students and professionals', courses: [
        { code: 'CDA / ADULT / 01', slug: 'ai-ml-masterclass-complete-college', title: 'AI and ML Masterclass', blurb: 'From regression to deep learning.' },
        { code: 'CDA / ADULT / 02', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for data science', blurb: 'Statistics and linear algebra for ML.' },
        { code: 'CDA / ADULT / 03', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI', blurb: 'Language models, retrieval, agents.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'A typical week of classes for a learner in Darmstadt',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Afternoons', l: 'For school pupils after lessons.' },
      { time: 'Evenings', l: 'Early evening for adults.' },
      { time: '1-on-1', l: 'Arranged with your mentor.' }
    ],
    cells: [
      { h3: 'Same mentor', p: 'One person for the whole course.' },
      { h3: 'Live only', p: 'No recordings, no waiting for answers.' },
      { h3: 'Learner types', p: 'Hands on the keyboard from day one.' },
      { h3: 'Tested models', p: 'Every model meets data it has not seen.' },
      { h3: 'Safe for under-18s', p: 'No adult AI accounts needed.' },
      { h3: 'Class or solo', p: 'A class of fifteen to twenty, or private.' }
    ]
  },

  projectsH2: 'Projects by our students',
  projectsLede: 'Some of what our students have built; the <a class="ag-inline-link" href="/student-labs">student labs</a> show the rest.',
  reviewsLede: 'Google reviews from students and parents, word for word.',

  fees: {
    h2: 'What classes cost for Darmstadt learners',
    lede: 'One monthly fee buys eight live classes. It appears here in euro at the European Central Bank reference rate; the payment is taken in US dollars and your bank converts it, so the euro on your statement can be slightly different.',
    free: ['A free first class', 'A small problem and a first program', 'No card needed'],
    group: ['Fifteen to twenty learners', 'One regular mentor', 'Two live classes a week', 'Monthly, stop any time'],
    one: ['One learner, one mentor', 'Projects chosen for you', 'Times you choose']
  },

  faq: {
    eyebrow: 'Questions from Darmstadt',
    h2: 'Coding and AI classes in Darmstadt: frequent questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. All classes are live and taught in English only, by mentors based in India. They match each learner\'s pace and accent, explain things a second way when needed, and keep language simple for children.' },
      { q: 'Is Informatik compulsory in Darmstadt schools?', a: 'No. The Gesellschaft für Informatik reports that Hessen has no compulsory Informatik across school types; at a Gymnasium it can be an elective from grade 7. No binding plans to change this are known.' },
      { q: 'From what age can my child use ChatGPT or Gemini?', a: 'According to the providers\' terms, ChatGPT is from 13 with a parent\'s permission under 18, Gemini with a personal account from 16 in Germany, Microsoft Copilot from 18 in Germany, and Claude from 18. Our classes never require a child to open any of these accounts.' },
      { q: 'When are classes in Darmstadt time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Afternoons suit pupils; early evenings and weekends suit most adults.' },
      { q: 'What is data drift, and why do you teach it?', a: 'It is when the data a model learnt from no longer matches the world it is used in. Our Darmstadt project shows it with 65 years of temperatures. Real AI systems drift too, so learners must know to test on recent data and retrain.' },
      { q: 'Can my child start AI without coding?', a: 'Young children start with AI literacy and Scratch, which need no typing. Real AI work needs Python, which most children start from about nine and teenagers can learn quickly.' },
      { q: 'Is the temperature project real Darmstadt data?', a: 'Yes. It uses the Wissenschaftsstadt Darmstadt dataset Monatliche Durchschnittstemperatur ab 1961, under the Datenlizenz Deutschland Namensnennung 2.0, downloaded on 3 November 2026. The models and figures are ours.' },
      { q: 'Do you teach adults who already code?', a: 'Yes. Developers and researchers often go straight to the AI and ML Masterclass, Data Science or Generative AI, usually one to one so the projects can use their own data.' },
      { q: 'How big is a class?', a: 'A class holds fifteen to twenty people. Children are put together by age and older learners by how far they have got. Private learners get two lessons a week with the mentor alone.' },
      { q: 'What currency will I pay in?', a: 'US dollars. We display the monthly fee in euro, worked out from the ECB reference rate; when the dollar charge reaches your account, your bank converts it, so a little variation is normal. You pay nothing for a first class.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'Related pages',
    lede: 'Where to read on after this page.',
    items: [
      { href: '/coding-classes-in-hesse', label: 'Coding classes in Hesse', p: 'The Land page for Hessen.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Every tool\'s minimum age, quoted.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning in Germany', p: 'Our deeper AI page.' },
      { href: '/informatik-abitur-hessen', label: 'Informatik Abitur Hessen', p: 'For pupils who choose Informatik.' },
      { href: '/coding-classes-for-kids-frankfurt', label: 'Coding classes for kids in Frankfurt', p: 'The neighbouring city page.' },
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'All our pages for Germany.' }
    ]
  },

  start: {
    h2: 'Start with a free first class',
    lede: 'Expect a short task and a conversation. While the learner works, the mentor notes their approach and their ease with English; you then get a recommended course and group.',
    readFirst: 'To read more first: <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and <a class="ag-inline-link" href="/courses">all courses</a>.',
    note: 'Every class is online, live and in English, taught from India. For a fast reply, write to us on WhatsApp.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'AI', links: [
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and ML in Germany' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/learn-to-think-not-copy-ai-germany', label: 'Think, do not copy AI' },
        { href: '/vibe-coding-and-ai-agents-classes-germany', label: 'Vibe coding and AI agents' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-hesse', label: 'Coding in Hesse' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Test on recent data, then retrain'
  },

  personalityCss: `
.ag-root.ag-cda .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-cda .ag-capsule { border-left-width: 5px; border-radius: 0; }
.ag-root.ag-cda .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-cda .ag-table caption { text-align: left; font-weight: 600; font-variant-numeric: tabular-nums; }
.ag-root.ag-cda .ag-code-head b { letter-spacing: 0.025em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Hessen page and national overview); KMK Ferienkalender 2026/27; provider terms for ChatGPT, Gemini, Copilot and Claude as quoted in content/ai-tool-age-audit.json; Destatis GV-ISys; Einheitenzeitgesetz; read 2 and 3 November 2026. Wissenschaftsstadt Darmstadt, Monatliche Durchschnittstemperatur ab 1961, Datenlizenz Deutschland Namensnennung 2.0.',
    localProject: 'Data drift: an original Python project on 781 months of Darmstadt mean temperatures (1961 to January 2026). Monthly normals learnt from 1961 to 1990 have zero bias on their own years but a bias of +1.13 C on 2016 to 2025; normals from 1986 to 2015 cut it to +0.78 and yearly retraining to +0.66. Lesson family: a model trained on the past goes stale; test on recent data and retrain.',
    requiredMentions: ['darmstadt_monthly.csv', 'Months in the file: 781', 'Trained 1961-1990, tested 2016-2025: (1.55, 1.13)', 'Retrained every year, tested 2016-2025: (1.31, 0.66)', 'Monatliche Durchschnittstemperatur ab 1961', 'elective from grade 7', '23 December 2026 to 12 January 2027', 'Test on recent data, then retrain'],
    sources: [
      { claim: 'Hessen no compulsory Informatik; elective from grade 7 at Gymnasium.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/hessen' },
      { claim: 'Hessen among six Länder without compulsory Informatik; no binding plans.', url: 'https://informatik-monitor.de/' },
      { claim: 'Hessen holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'ChatGPT minimum age and parental permission.', url: 'https://openai.com/policies/row-terms-of-use/' },
      { claim: 'Claude minimum age 18.', url: 'https://www.anthropic.com/legal/consumer-terms' },
      { claim: 'Darmstadt monthly temperatures since 1961, DL-DE BY 2.0.', url: 'https://opendata.darmstadt.de/dataset/monatliche-durchschnittstemperatur-ab-1961' }
    ],
    rejectedClaims: [
      'Any climate conclusion beyond the model error: the series combines several station sites, so the page treats it as a teaching dataset.',
      'Legal advice on AI tool ages: the page quotes provider terms and says it is not legal advice.',
      'Naming Darmstadt schools that offer Informatik: not verified.',
      'Any connection with the Wissenschaftsstadt Darmstadt, the Hessen ministry or any AI provider: none.'
    ]
  }
};
