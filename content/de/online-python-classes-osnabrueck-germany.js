'use strict';
// Online Python classes in Osnabrück (ag- city page, Germany cluster P6 row DE174, tier-2 slug shape online-python:
// live online explained, Python path). Owner 2026-11-02: classes are live, in English only, with mentors who match the
// learner's pace and accent; pages show euro, checkout charges USD.
// Spine: "Python that talks to the internet". Osnabrück runs a live city data API; the page explains live online
// lessons through the five questions families ask, gives the Python path with honest timings, the Lower Saxony school
// facts, and a project that reads the city's bike counter through the API, where stopping after the first page of
// answers silently loses most of the data.
// Sources (read raw; copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/online-python-classes-osnabrueck-germany/):
//  - GI Informatik-Monitor 2026/27, Niedersachsen page: compulsory Informatik in grades 9 and 10 at all general school
//    types since 2024/25 (FACTS 79); G9 Oberstufe, grade 11 Einführungsphase, 12 and 13 Qualifikationsphase (50).
//    National page: Niedersachsen among the Länder where about one Oberstufe pupil in twelve takes Informatik (99).
//  - KMK Ferienkalender 2026/27: "Niedersachsen 12.10. - 24.10. 23.12. - 09.01. 01.02. - 02.02. 22.03. - 03.04. 07.05.
//    und 18.05. 08.07. - 18.08." (FACTS 277).
//  - Destatis GV-ISys 31.12.2024: Osnabrück 166,057; Niedersachsen 8,004,489 (places.tsv).
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: GovData "Verkehrszählung Osnabrück" (publisher SWO Netz GmbH, resource https://daten-api.osnabrueck.de,
//    licence dl-by-de/2.0 = Datenlizenz Deutschland Namensnennung 2.0): "Mittels eines KI- basierten Sensors werden ...
//    Verkehrsdaten erfasst und über LoRaWAN datenschutzkonform übertragen. Bei der Verkehrserfassung wird in die
//    Objektklassen PKW, LKW, Motorrad, Fahrrad und Fußgänger unterschieden." Datenplattform Osnabrück ("Ein Projekt der
//    Smart City Osnabrück"), OGC SensorThings API v1.1. Datastream 5521, "Anzahl der Fahrraeder an der Verkehrszählung
//    (Standort: Arndtplatz/ Martinistraße) in die Arndtstraße im letzten Übertragungsintervall (15 Minuten).", Thing
//    owner "Stadt OS", phenomenonTime from 2025-06-04. Pages fetched 4 November 2026 (school_p1..p4, holiday_p1..p3).
//    No licence text on the platform pages themselves; the licence is the GovData listing.
// Our own calculations (scratchpad de/w/T4/bin os_v1.py, os_v2.py; python3 -I with SSL_CERT_FILE set to the system CA
// bundle, run 4 November 2026): week 5 to 11 Oct 2026: 4 pages, 636 of 672 readings, 2063 bikes; first page only 865;
// week 12 to 18 Oct 2026 (Herbstferien): 3 pages, 600 of 672 readings, 1559 bikes. Per reading 3.24 against 2.60.
// Lesson family: an API answers in pages; follow the next link until there is none, or the missing pages vanish silently.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  "import json",
  "from urllib.parse import quote",
  "from urllib.request import urlopen",
  "",
  "BASE = \"https://daten-api.osnabrueck.de/v1.1/Datastreams(5521)/Observations\"",
  "",
  "def fetch_week(start, end):",
  "    query = (f\"$filter=phenomenonTime ge {start} and phenomenonTime lt {end}\"",
  "             \"&$select=phenomenonTime,result&$orderby=phenomenonTime asc&$top=200\")",
  "    url = BASE + \"?\" + quote(query, safe=\"$=&,\")",
  "    rows, pages = [], 0",
  "    while url:",
  "        with urlopen(url) as reply:",
  "            page = json.load(reply)",
  "        rows += page[\"value\"]",
  "        pages += 1",
  "        url = page.get(\"@iot.nextLink\")      # missing on the last page",
  "    return rows, pages",
  "",
  "school, pages = fetch_week(\"2026-10-05T00:00:00Z\", \"2026-10-12T00:00:00Z\")",
  "print(\"Pages:\", pages, \" readings:\", len(school), \"of\", 7 * 96)",
  "print(\"Bikes, 5 to 11 October 2026:\", sum(r[\"result\"] for r in school))"
].join('\n');

const V2 = [
  "first_page_only = school[:200]",
  "print(\"If we had stopped after page 1:\", sum(r[\"result\"] for r in first_page_only), \"bikes\")",
  "",
  "holiday, pages = fetch_week(\"2026-10-12T00:00:00Z\", \"2026-10-19T00:00:00Z\")",
  "print(\"Pages:\", pages, \" readings:\", len(holiday), \"of\", 7 * 96)",
  "print(\"Bikes, 12 to 18 October 2026 (Herbstferien):\", sum(r[\"result\"] for r in holiday))"
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Osnabrück: online Python classes' },
  slug: 'online-python-classes-osnabrueck-germany',
  code: 'pos',
  accent: '#183D64',
  accentRationale: 'Online Python in Osnabrück: a dark blue #183D64, the colour of the Hase at dusk below the old town; contrast 9.02 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-lower-saxony', name: 'Lower Saxony' }],
  routeLabel: 'Online Python classes in Osnabrück',
  title: 'Online Python Classes in Osnabrück: Live, in English',
  description: 'Online Python classes in Osnabrück, live in English: how a lesson works, how long Python takes to learn, Lower Saxony Informatik, and a project on the city API.',
  ogDescription: 'Live online Python in English for learners in Osnabrück from age 10 to adult: five honest answers about online lessons, realistic timings, Informatik in Lower Saxony, and an original project that reads the city\'s bike counter through its open API.',
  twitterDescription: 'Live online Python in English for Osnabrück, with a project on the city\'s open bike-counter API.',
  pageName: 'Online Python Classes in Osnabrück',
  webPageDescription: 'A guide for learners and parents in Osnabrück to live online Python classes taught in English: how online lessons work, a realistic Python path, Lower Saxony school facts from the Gesellschaft für Informatik and the KMK, and an original project on the Datenplattform Osnabrück traffic-count API.',
  courseDescription: 'Live online Python classes in English for learners in Osnabrück from age 10 to adult, from first programs to code that reads live city data, in a group of fifteen to twenty or one to one, with one regular mentor.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Python in Osnabrück',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#online', label: 'Online' },
    { href: '#path', label: 'Path' },
    { href: '#api', label: 'API' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Osnabrück &middot; Python, live online &middot; Ages 10 to adult',
  h1: 'Online Python classes in Osnabrück',
  lede: 'Osnabrück publishes live data from its own street sensors, and anyone with a few lines of Python can read it. That is a good picture of what learning Python online can lead to. This page answers the five questions people in Osnabrück ask about live online lessons, gives an honest idea of how long the Python path takes, explains where Informatik sits in Lower Saxony schools, and walks through a project on the city\'s bike counter at Arndtplatz, where a program that reads only the first page of answers misses more than half the bikes.',
  secondaryCta: { href: '#api', label: 'See the API project' },
  wa: 'Hello Modern Age Coders, I am in Osnabrück and would like live online Python classes in English. Could I book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; real code, real data, taught in English',
  spec: [
    ['Classes', 'Live, by video, in English'],
    ['Ages', '10 to 18, and adults'],
    ['Length', 'Sixty minutes, twice a week'],
    ['Group', 'Fifteen to twenty, or one to one'],
    ['Mentors', 'In India, one per learner'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'In Osnabrück, Modern Age Coders teaches Python online in live video lessons held in English. Learners write the code on their own machines; one regular mentor in India follows the shared screen, asks questions and fits pace and accent to them. Pupils from about ten start with Maths through Coding or Python for Teens; adults take the Python Masterclass or Python web development. Classes run for fifteen to twenty learners, or one to one.',

  picks: {
    eyebrow: 'Three Python courses',
    h2: 'Which Python course suits an Osnabrück learner?',
    lede: 'One for a pupil who likes maths, one for a teenager who wants the whole language, and one for an adult who wants Python that talks to the web.',
    items: [
      { course: 'maths-through-coding', code: 'POS / 01', title: 'Maths Through Coding', note: 'Ten to fifteen. School maths, from fractions to functions, explored in Python, so a pupil learns both at once and sees why each formula works.' },
      { course: 'python-complete-masterclass-teens', code: 'POS / 02', title: 'Python for Teens', note: 'Thirteen to eighteen, from the first variable to classes, files and web data such as the Osnabrück API in the project below.' },
      { course: 'python-web-development-django-flask-course', code: 'POS / 03', title: 'Python Web Development', note: 'For adults who know a little Python: building web applications and APIs with Django and Flask, and reading other people\'s APIs.' }
    ]
  },

  sections: [
    {
      id: 'online',
      eyebrow: 'Online, explained',
      h2: 'How does a live online Python class work? Five questions, answered',
      lede: 'These are the questions families and adult learners in Osnabrück ask before the first class, with the answers we give them.',
      body: [
        { kind: 'ol', items: [
          '<strong>Is it a recording?</strong> No. Every class is a live video call with a mentor. Nothing is pre-recorded, and questions are answered while the learner is stuck, not a day later.',
          '<strong>Who types the code?</strong> The learner. They share their screen and type every line. The mentor reads along, points to the line with the problem and asks what the learner expected to happen.',
          '<strong>What happens in a group of fifteen to twenty?</strong> The mentor explains one idea to everyone, then each learner works on their own code while the mentor goes from screen to screen. Learners at the same level are grouped together.',
          '<strong>What if English is not my first language?</strong> Classes are in English only. Mentors speak clearly, adapt to each learner\'s accent and pace, and write key words in the chat. Python itself uses English keywords, so the two go together.',
          '<strong>What do I need?</strong> A laptop or desktop, a browser, earphones and, for older learners, Python itself, which is free and is installed with the mentor in the first class.'
        ] },
        { kind: 'p', mt: true, html: 'The mentors are based in India, so an Osnabrück afternoon is their evening. Nobody is passed from mentor to mentor during a course, and after a few weeks the mentor knows which explanations work for them and which mistakes they tend to make.' }
      ]
    },
    {
      id: 'path',
      eyebrow: 'The Python path',
      h2: 'How long does it take to learn Python?',
      lede: 'Longer than an advert says and shorter than many people fear. The table shows the timings our mentors plan with at two classes a week; every learner is different.',
      body: [
        { kind: 'table', numCols: [], caption: 'Planning times to each Python milestone at two live classes a week (our planning guide, not a promise)', head: ['Milestone', 'Pupils 10 to 12', 'Teenagers', 'Adults'], rows: [
          ['Programs with input, loops and conditions', '3 months', '2 months', '1 to 2 months'],
          ['Functions, lists and dictionaries', '6 months', '4 months', '3 months'],
          ['Reading files and real data', '9 months', '6 months', '4 months'],
          ['Classes, testing and web data (APIs)', 'Second year', '9 to 12 months', '6 months']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What speeds it up',
          left: [
            'Twenty minutes of practice between classes matters more than anything else. So does a project the learner cares about: a game, a maths question, or data about their own city.',
            'Learners who already know Scratch or another language move faster through the first milestone.'
          ],
          rightH3: 'What slows it down',
          right: [
            'Long gaps. Two weeks without any code costs about a week of progress, which is why classes carry on through the school holidays for anyone who wants them.',
            'Copying code without understanding it, including code from an AI tool. Our mentors ask learners to explain every line they hand in.'
          ] }
      ]
    },
    {
      id: 'niedersachsen',
      eyebrow: 'Lower Saxony schools',
      h2: 'Where does Python fit into school Informatik in Osnabrück?',
      lede: 'Informatik is compulsory for every Lower Saxony pupil for two years, late in Sekundarstufe I. These facts were read in the Gesellschaft für Informatik\'s monitor and the KMK calendar on 2 November 2026.',
      body: [
        { kind: 'two',
          leftH3: 'The compulsory years',
          left: [
            'The Informatik-Monitor 2026/27 notes that every general school in Niedersachsen has had to teach Informatik in the ninth and tenth school years since 2024/25. Which programming language a school uses is the school\'s choice.',
            'A pupil who has already written Python for a year or two arrives in grade 9 able to concentrate on the ideas, such as algorithms and data, rather than on the syntax.'
          ],
          rightH3: 'After grade 10',
          right: [
            'Lower Saxony\'s Gymnasium runs to grade 13: grade 11 is the Einführungsphase, grades 12 and 13 the Qualifikationsphase. Informatik there is a course pupils choose.',
            'The monitor lists Niedersachsen among the Länder with the lowest uptake, about one Oberstufe pupil in twelve. Our classes run alongside school and award no marks; the school course is the one that counts.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Osnabrück school calendar 2026/27 for Lower Saxony (KMK)', head: ['Break', 'From and to'], rows: [
          ['Herbstferien', '12 to 24 October 2026'],
          ['Weihnachtsferien', '23 December 2026 to 9 January 2027'],
          ['Winterferien', '1 and 2 February 2027'],
          ['Osterferien', '22 March to 3 April 2027'],
          ['Sommerferien', '8 July to 18 August 2027']
        ] },
        { kind: 'source', html: 'Informatik facts: GI Informatik-Monitor 2026/27, Niedersachsen page and the Länder comparison. Holidays: KMK Ferienkalender 2026/27, version of 9 October 2025; Lower Saxony also has free days on 7 and 18 May 2027. Modern Age Coders is independent of the GI, the KMK and the Niedersachsen ministry. The Herbstferien appear again in the project below.' }
      ]
    },
    {
      id: 'api',
      tint: 'tint',
      eyebrow: 'A real Osnabrück project',
      h2: 'How many bikes passed Arndtplatz in a week? Reading a city API without losing pages',
      lede: 'The Datenplattform Osnabrück publishes counts from AI-based traffic sensors through an open API. Our teenagers and adults use one counter to learn the first rule of working with any web API: the answer comes in pages, and a program has to ask for all of them.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'GovData lists the dataset Verkehrszählung Osnabrück from SWO Netz GmbH under the Datenlizenz Deutschland Namensnennung 2.0. It describes AI-based sensors that send traffic counts over LoRaWAN and tell apart cars, lorries, motorbikes, bicycles and pedestrians.',
            'We use datastream 5521: bicycles counted at Arndtplatz/Martinistraße going into the Arndtstraße, one reading every 15 minutes. A full week would have 672 readings. We fetched the data on 4 November 2026.'
          ],
          rightH3: 'The trap',
          right: [
            'The API never sends everything at once. Our request asks for 200 readings at a time; the reply contains those 200 and a field called @iot.nextLink with the address of the next page. The last page has no next link.',
            'A program that reads only the first reply gets a number that looks perfectly reasonable, and is wrong. Nothing warns you.'
          ] },
        { kind: 'code', label: 'Version 1: follow every next link', lang: 'Python', code: V1, note: 'It prints <code>Pages: 4  readings: 636 of 672</code> and <code>Bikes, 5 to 11 October 2026: 2063</code>.' },
        { kind: 'p', mt: true, html: 'The loop keeps going while there is a next link and stops when the API stops sending one. Four pages came back for the week of 5 to 11 October 2026, with 636 of the 672 possible readings: 36 quarter-hours had no reading at all, which is worth reporting next to the total.' },
        { kind: 'code', label: 'Version 2: what one page hides, and a holiday week', lang: 'Python', code: V2, note: 'Run after Version 1. It prints <code>If we had stopped after page 1: 865 bikes</code>, then <code>Pages: 3  readings: 600 of 672</code> and <code>Bikes, 12 to 18 October 2026 (Herbstferien): 1559</code>.' },
        { kind: 'p', html: 'With only the first page, the week would have had 865 bikes, fewer than half of the real 2,063. The second week falls in the Lower Saxony Herbstferien and shows 1,559 bikes, but it also has fewer readings, 600 against 636. Dividing by the readings, the school week averaged 3.24 bikes per quarter-hour and the holiday week 2.60, still about a fifth lower. That is our calculation, not a claim about why.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'Bicycles into the Arndtstraße, two weeks of October 2026 (our calculation)', head: ['Week', 'Pages', 'Readings of 672', 'Bikes'], rows: [
          ['5 to 11 October, school week', '4', '636', '2,063'],
          ['Same week, first page only', '1', '200', '865'],
          ['12 to 18 October, Herbstferien', '3', '600', '1,559']
        ] },
        { kind: 'source', html: 'Data: Datenplattform Osnabrück, SensorThings API, datastream 5521 (Fahrraeder, Arndtplatz/Martinistraße, in die Arndtstraße), listed on GovData as Verkehrszählung Osnabrück under the Datenlizenz Deutschland Namensnennung 2.0, fetched 4 November 2026. Totals, readings and per-reading averages are ours. Because the API is live, a later run can differ if the platform corrects past readings.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Pupils, 10 to 12.</strong> A book has 4 pages of names. You read page 1 and count 20 names. How many names does the book have? What would you need to know first?',
          '<strong>Teenagers.</strong> Change <code>$top=200</code> to <code>$top=50</code>. How many pages now, and does the total change?',
          '<strong>Adults.</strong> Group the readings by day using <code>phenomenonTime</code> and find the busiest day of each week.',
          '<strong>Everyone.</strong> Write a check that stops with an error if the number of readings is below 90 percent of 672. Which of the two weeks passes?'
        ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Times',
      h2: 'When are online Python classes in Osnabrück time?',
      lede: 'Pick what suits you. Here is how a few Osnabrück times read on the mentor\'s clock.',
      body: [
        { kind: 'table', numCols: [], caption: 'Osnabrück slot and the hour in India', head: ['Osnabrück', 'India this winter', 'India from 28 March 2027'], rows: [
          ['15:10', '19:40', '18:40'],
          ['16:40', '21:10', '20:10'],
          ['Saturday 14:00', '18:30', '17:30'],
          ['Sunday 11:30', '16:00', '15:00']
        ] },
        { kind: 'source', html: 'Since 25 October 2026 Germany has been on MEZ, UTC+1; on 28 March 2027 it moves to MESZ, UTC+2, as the Einheitenzeitgesetz sets out. India is fixed at UTC+5:30. That makes the gap 4 h 30 this winter and 3 h 30 from the end of March. The rows are conversions only, never fixed batch times.' },
        { kind: 'p', mt: true, html: 'Learners in Georgsmarienhütte, Bramsche, Wallenhorst, Belm or Melle join the same live classes. The booking page shows each slot on your own clock.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What can an Osnabrück Python learner do at each step?',
    lede: 'Five steps we use in our progress notes.',
    table: { caption: 'Five steps in Python (ours)', head: ['Step', 'What the learner can do'], rows: [
      ['1', 'Write a program that asks, decides and answers'],
      ['2', 'Use loops that stop at the right time'],
      ['3', 'Organise data in lists and dictionaries'],
      ['4', 'Read a file or a web API completely and summarise it'],
      ['5', 'Check their own results and report what is missing']
    ] },
    left: { h3: 'For parents', ps: [
      'The Arndtplatz project covers steps 4 and 5. A learner who has seen 865 turn into 2,063 knows to ask whether a computer has really read everything.',
      'Notes to you describe code written and ideas explained.'
    ] },
    right: { h3: 'For learners', ps: [
      'If an answer can come in pages, assume it does.',
      'Report how many readings you got, not just the total.'
    ] }
  },

  catalogue: {
    eyebrow: 'Further courses',
    h2: 'Other courses for Python learners in Osnabrück',
    lede: 'The same live format in English, with one mentor, as a class or one to one.',
    bands: [
      { num: 'I', h3: 'Younger learners', sub: 'Ages 7 to 12', courses: [
        { code: 'POS / KIDS / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'A gentle first language from nine.' },
        { code: 'POS / KIDS / 02', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Blocks before typing, for the youngest.' },
        { code: 'POS / KIDS / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Step-by-step thinking through puzzles.' }
      ] },
      { num: 'II', h3: 'School years', sub: 'Klasse 5 to Abitur', courses: [
        { code: 'POS / SCHOOL / 01', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik Companion', blurb: 'Ready for Informatik in grades 9 and 10.' },
        { code: 'POS / SCHOOL / 02', slug: 'informatik-abitur-course-java-python', title: 'Informatik Abitur in English', blurb: 'For the Qualifikationsphase.' },
        { code: 'POS / SCHOOL / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Charts and models from real data.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Students and professionals', courses: [
        { code: 'POS / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python Masterclass', blurb: 'From no code at all to confident.' },
        { code: 'POS / ADULT / 02', slug: 'pcap-python-certification-prep-course', title: 'PCAP preparation', blurb: 'Towards the Python Institute exam.' },
        { code: 'POS / ADULT / 03', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL', blurb: 'Databases behind every web API.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it runs',
    h2: 'How online Python lessons fit an Osnabrück week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school', l: 'Mid-afternoon on weekdays.' },
      { time: 'Weekends', l: 'Late morning to afternoon.' },
      { time: '1-on-1', l: 'Agreed with your own mentor.' }
    ],
    cells: [
      { h3: 'Live mentor', p: 'Help while you are stuck, not later.' },
      { h3: 'You type', p: 'Every line is the learner\'s own.' },
      { h3: 'Same mentor', p: 'Continuity from first class to last.' },
      { h3: 'Short practice', p: 'Twenty minutes between lessons.' },
      { h3: 'City data', p: 'Real German open data and APIs.' },
      { h3: 'Class or solo', p: 'Fifteen to twenty learners, or one.' }
    ]
  },

  projectsH2: 'Some of our students\' Python work',
  projectsLede: 'A small selection of student projects; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has the full set.',
  reviewsLede: 'What learners and parents posted on Google, unaltered.',

  fees: {
    h2: 'Fees for online Python classes in Osnabrück',
    lede: 'The monthly fee includes eight live lessons. We quote it in euro using the European Central Bank reference rate; the money is collected in US dollars and converted by your bank, so a small difference on your statement is to be expected.',
    free: ['A free first class', 'A first program you run yourself', 'No card needed'],
    group: ['Fifteen to twenty learners at one level', 'One regular mentor', 'Two lessons a week', 'Monthly, end it any month'],
    one: ['You and one mentor', 'Your own pace and projects', 'Times you pick']
  },

  faq: {
    eyebrow: 'Questions from Osnabrück',
    h2: 'Online Python classes in Osnabrück: questions and answers',
    items: [
      { q: 'Are the classes in German?', a: 'No. Classes are live and taught in English only. The mentors, who work from India, adapt to each learner\'s pace and accent and put key terms in the chat, so learners who are not fluent in English can follow.' },
      { q: 'Is an online Python class live or recorded?', a: 'Live, always. A mentor is on video for the whole hour, sees the learner\'s screen and helps in real time. Nothing is pre-recorded.' },
      { q: 'How long does it take to learn Python?', a: 'Our mentors plan with about two months for a teenager to write programs with loops and conditions, and about six to work with real data, at two classes a week. Adults often move faster and children of ten to twelve a little slower; every learner differs.' },
      { q: 'When are classes in Osnabrück time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Mid-afternoon after school and weekend late mornings are common choices in Osnabrück.' },
      { q: 'When does Informatik start at Osnabrück schools?', a: 'For every pupil in the ninth school year: the Gesellschaft für Informatik reports it as compulsory in grades 9 and 10 across Lower Saxony since 2024/25. In the Oberstufe it is a course pupils can choose.' },
      { q: 'What is an API, and why does the project use one?', a: 'An API is a way for programs to ask a website for data. The Osnabrück platform answers in pages of readings, so the project teaches learners to follow every page. Working with APIs is a normal part of real Python work.' },
      { q: 'Is the bike data really from Osnabrück?', a: 'Yes. It comes from the Datenplattform Osnabrück traffic sensors, datastream 5521 at Arndtplatz/Martinistraße, listed on GovData under the Datenlizenz Deutschland Namensnennung 2.0 and fetched on 4 November 2026. The totals are our own.' },
      { q: 'Can an adult with no experience start online Python?', a: 'Yes. The Python Masterclass starts from nothing. Adults who already know some Python often choose Python Web Development, where they build and use APIs themselves.' },
      { q: 'How big are the classes?', a: 'Fifteen to twenty learners at a similar level in a group class. One-to-one classes are private, two a week.' },
      { q: 'How do I pay?', a: 'By the month. The fee is shown in euro at the European Central Bank reference rate and charged in US dollars, which your bank converts, so the statement can differ by a little. The first class is free.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'Related pages',
    lede: 'Further pages for Python learners around Osnabrück.',
    items: [
      { href: '/coding-classes-in-lower-saxony', label: 'Coding classes in Lower Saxony', p: 'The Land page for Niedersachsen.' },
      { href: '/python-course-germany', label: 'Python course in Germany', p: 'Our main Python page.' },
      { href: '/python-lernen-fuer-schueler', label: 'Python lernen für Schüler', p: 'The same subject, in German, for pupils.' },
      { href: '/informatik-abitur-niedersachsen', label: 'Informatik Abitur Niedersachsen', p: 'The Abitur course in Lower Saxony.' },
      { href: '/coding-classes-for-teens-germany', label: 'Coding classes for teens', p: 'Courses for 13 to 18.' },
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'All our Germany pages.' }
    ]
  },

  start: {
    h2: 'Book one free live Python lesson',
    lede: 'It is a normal lesson: you write and run a small program while the mentor sees how you approach it and how much English support is useful. Afterwards we recommend a course and group.',
    readFirst: 'Background reading: <a class="ag-inline-link" href="/how-we-teach">how we teach</a>; every syllabus is under <a class="ag-inline-link" href="/courses">courses</a>.',
    note: 'Live online lessons in English only, with mentors in India. A WhatsApp message gets the quickest reply.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Python', links: [
        { href: '/python-course-germany', label: 'Python course in Germany' },
        { href: '/python-lernen-fuer-schueler', label: 'Python für Schüler' },
        { href: '/coding-classes-for-teens-germany', label: 'Coding for teens' },
        { href: '/informatik-abitur-niedersachsen', label: 'Informatik Abitur Niedersachsen' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-lower-saxony', label: 'Coding in Lower Saxony' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Follow the next link to the end'
  },

  personalityCss: `
.ag-root.ag-pos .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-pos .ag-capsule { border-left-width: 5px; border-radius: 3px; }
.ag-root.ag-pos .ag-section-head h2 { max-width: 35ch; }
.ag-root.ag-pos .ag-table caption { text-align: left; font-weight: 500; letter-spacing: 0.005em; }
.ag-root.ag-pos .ag-code-head b { letter-spacing: 0.02em; text-transform: uppercase; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Niedersachsen page and national overview); KMK Ferienkalender 2026/27; Destatis GV-ISys; Einheitenzeitgesetz; read 2 and 3 November 2026. Datenplattform Osnabrück SensorThings API, GovData Verkehrszählung Osnabrück (SWO Netz GmbH), Datenlizenz Deutschland Namensnennung 2.0, fetched 4 November 2026.',
    localProject: 'Follow the next link: an original Python project that reads Osnabrück\'s open traffic API (datastream 5521, bicycles into the Arndtstraße at Arndtplatz/Martinistraße) page by page. A full week (5 to 11 October 2026) needs four pages: 636 of 672 readings and 2,063 bikes, against 865 from the first page alone; the Herbstferien week (12 to 18 October) gives 1,559 bikes from 600 readings. Lesson family: an API answers in pages.',
    requiredMentions: ['Pages: 4  readings: 636 of 672', 'Bikes, 5 to 11 October 2026: 2063', 'If we had stopped after page 1: 865 bikes', 'Bikes, 12 to 18 October 2026 (Herbstferien): 1559', 'datastream 5521', '@iot.nextLink', 'ninth and tenth school years since 2024/25', 'Follow the next link to the end'],
    sources: [
      { claim: 'Niedersachsen compulsory Informatik grades 9 and 10; G9 Oberstufe.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/niedersachsen' },
      { claim: 'Low Oberstufe uptake in Niedersachsen.', url: 'https://informatik-monitor.de/' },
      { claim: 'Niedersachsen holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Verkehrszählung Osnabrück, SWO Netz GmbH, DL-DE BY 2.0.', url: 'https://ckan.govdata.de/dataset/verkehrszahlung-osnabruck' },
      { claim: 'Datenplattform Osnabrück traffic count page and API.', url: 'https://datenplattform.osnabrueck.de/verkehrszaehlung/' }
    ],
    rejectedClaims: [
      'Why the holiday week had fewer bikes: not in the data, so no cause is given.',
      'The exact sensor site of the GovData description (August-Bebel-Platz) against the datastream used (Arndtplatz): the page names only the datastream\'s own site.',
      'That the timings in the Python path are guaranteed: labelled as our planning guide.',
      'Any connection with Stadt Osnabrück, SWO Netz or the Niedersachsen ministry: none.'
    ]
  }
};
