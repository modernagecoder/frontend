'use strict';
// Coding and AI classes in Trier (ag- city page, Germany cluster P6 row DE200, tier-2 shape
// coding-and-ai-classes-in-<city>-germany: all ages). Owner 2026-11-02: classes are live, in English only, with mentors
// who match the learner's pace and accent; pages show euro, checkout charges USD.
// Spine: AI runs on data fetched from services, so every age learns to collect data correctly; a project on the City
// of Trier's own map service for bus stops, read page by page, where stopping at the first short page loses 62 stops,
// one stop arrives twice, and the service's own total is wrong; Rhineland-Palatinate before and after 2028/29; times.
// Sources (facts read raw, quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md, fetched
// 2 November 2026, unless stated):
//  - GI Informatik-Monitor 2026/27: RLP among six Länder without Informatik compulsory for all (fact 92); 21
//    Informatik-Profil-Schulen with compulsory Informatik in grade 5 since 2021/22 (83); compulsory at all schools from
//    2028/29, four weekly hours in total (95); some Gymnasien offer G8 (60). National: about 15 percent take Informatik in
//    the Q-phase (97).
//  - KMK school types: Realschule plus (fact 21).
//  - KMK FER2026_27.pdf, RLP row (fact 280); summer 2027 28 June to 6 August (267).
//  - BWKI: projects in German or English (facts 208 to 213, as on the live AI page).
//  - Destatis GV-ISys: Trier, Stadt 104,342 on 31.12.2024 (facts-geo/places.tsv).
//  - AI tool ages: content/ai-tool-age-audit.json (OpenAI 13 with a parent's permission under 18; Anthropic 18+).
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Stadt Trier, "Stadtbus - Haltestellen (SWT)", GovData id stadtbus-haltestellen-swt, description "POIs der
//    Bushaltestellen der SWT (Stadtwerke Trier) in Trier und Umgebung", data licence Datenlizenz Deutschland
//    Namensnennung 2.0 (metadata CC0); layer metadata on geoportal.rlp.de gives the attribution "dl-de/by2-0,
//    www.trier.de". Served by the OGC API Features endpoint https://www.geoportal.rlp.de/spatial-objects/505/
//    collections/ms:haltestellen_swt/items (service "Verkehr und Mobilität in Trier"). The service only accepts limit
//    values 1, 5, 10, 20, 50, 100, 200, 500, 1000, 2000, 3000 or 4000 (its own error message, 3 November 2026). Pages
//    saved with curl on 3 November 2026 at limit=200, offsets 0, 200, 400, 600, 800: 200, 200, 198, 62 and 0 features;
//    every page reports numberMatched 648. A single request at limit=1000 returned 659 features. Raw copies in
//    src-pages/<slug>/.
// Our own calculations (scratchpad de/w/T7/run/trier/v1.py + v2.py, python3 -I): service says 648; stopping at the
// first short page gives 598; stopping at the first empty page gives 660 stops, 659 different ids; id 35006 came twice.
// Lesson family: page through a service until a page comes back empty, then de-duplicate by id, and do not trust the
// service's own total.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import json',
  '',
  'LIMIT = 200',
  '',
  'def page(offset):                         # one saved answer from the Trier service',
  '    with open(f"stops_offset_{offset}.json", encoding="utf-8") as f:',
  '        return json.load(f)',
  '',
  'first = page(0)',
  'print("The service says it matched:", first["numberMatched"])',
  '',
  'stops, offset = [], 0',
  'while True:',
  '    features = page(offset)["features"]',
  '    stops += features',
  '    if len(features) < LIMIT:             # "a short page must be the last one"',
  '        break',
  '    offset += LIMIT',
  'print("Stopping at the first short page:", len(stops), "stops")'
].join('\n');

const V2 = [
  'stops, offset = [], 0',
  'while True:',
  '    features = page(offset)["features"]',
  '    if not features:                      # only an empty page means the end',
  '        break',
  '    print("  offset", offset, "gave", len(features))',
  '    stops += features',
  '    offset += LIMIT',
  '',
  'ids = [s["properties"]["gid"] for s in stops]',
  'print("Stopping at the first empty page:", len(stops), "stops,", len(set(ids)), "different ids")',
  'twice = sorted({i for i in ids if ids.count(i) > 1})',
  'print("Ids that came twice:", twice)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Trier: coding and AI' },
  slug: 'coding-and-ai-classes-in-trier-germany',
  code: 'cat',
  accent: '#691F0A',
  accentRationale: 'Coding and AI in Trier: a dark Roman-brick red #691F0A for the Porta Nigra and the old basilica, distinct from the Berlin brick and the Rhineland-Palatinate purple; contrast 9.46 on the paper #FBF8F2 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-rhineland-palatinate', name: 'Rhineland-Palatinate' }],
  routeLabel: 'Coding and AI classes in Trier',
  title: 'Coding and AI Classes in Trier: Live Online, in English',
  description: 'Coding and AI classes in Trier for children, teens and adults: live online in English, Rhineland-Palatinate school facts, AI ages and a bus stop data project.',
  ogDescription: 'Live coding and AI lessons in English for every age in Trier, with an original project on the city\'s own bus stop service that shows why careful data collection comes before any AI.',
  twitterDescription: 'Coding and AI for all ages in Trier, live in English, starting with how to collect data properly.',
  pageName: 'Coding and AI Classes in Trier',
  webPageDescription: 'A guide for Trier learners of every age to coding and artificial intelligence: why collecting data correctly comes first, an original Python project on the Stadt Trier bus stop service, what Rhineland-Palatinate schools teach before and after 2028/29, AI tool ages and class times.',
  courseDescription: 'Live online coding and AI classes in English for learners in Trier from age 6: Scratch and Python for children, Python, data and machine learning for teenagers, automation and applied AI for adults, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Trier',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#why', label: 'Why' },
    { href: '#project', label: 'Project' },
    { href: '#school', label: 'School' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Trier &middot; Coding and AI &middot; All ages',
  h1: 'Coding and AI classes in Trier',
  lede: 'Every AI system is only as good as the data it was given, and somebody had to collect that data, usually with a few lines of code. Learning to do that carefully is a skill for a ten year old, a sixteen year old and a fifty year old alike. This page is for learners of every age in Trier: why we teach coding before AI, a project on the city\'s own bus stop service in which the data quietly goes missing, what Rhineland-Palatinate schools teach now and from 2028/29, and when live classes in English fit your week.',
  secondaryCta: { href: '#project', label: 'See the bus stop project' },
  wa: 'Hello Modern Age Coders, I am in Trier and would like a free first class in coding or AI, taught in English.',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; data first, then models',
  spec: [
    ['Ages', 'From 6, teens and adults'],
    ['Children start with', 'Scratch, then Python'],
    ['Older learners start with', 'Python and live data'],
    ['Trier times', 'After school, after work, weekends'],
    ['Teachers', 'Mentors based in India'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders teaches coding and AI to learners in Trier from age 6 upwards, in live online lessons held in English. Children work in Scratch and then Python; teenagers collect and analyse data and train models; adults automate tasks and learn to use AI they can check. A regular mentor based in India sets the pace and gets used to each learner\'s accent. Choose a class of fifteen to twenty or one to one, in the afternoon, evening or at weekends.',

  picks: {
    eyebrow: 'Start by age',
    h2: 'Three first courses for Trier learners',
    lede: 'The mentor confirms the choice after the free first class, depending on age and what the learner already knows.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'CAT / 01', title: 'Python and AI for Kids', note: 'Children of 9 to 12 type real Python, make games and drawings, and find out how a program can learn from a list of examples.' },
      { course: 'ai-ml-masterclass-teens', code: 'CAT / 02', title: 'AI and Machine Learning for Teens', note: 'Teenagers gather data, check it, and train models that must outperform a naive guess before anyone calls them clever.' },
      { course: 'python-ai-automation-masterclass-college', code: 'CAT / 03', title: 'Python Automation and Applied AI', note: 'Adults learn to fetch, tidy and summarise data with Python and to pass it to AI services, reviewing every result.' }
    ]
  },

  sections: [
    {
      id: 'why',
      eyebrow: 'Coding before AI',
      h2: 'Why learn to code before learning AI, at any age?',
      lede: 'Because AI is built from data and code, and judged by people who understand both. Each age reaches that understanding by a different road.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Children, 6 to 12', p: 'A child who has told a Scratch cat exactly what to do knows that computers follow instructions, not wishes. From about 10 they build tiny programs that sort examples into groups, which is what much of AI really does, without needing any account on an adult AI service.' },
          { h3: 'Teenagers, 13 to 18', p: 'Teenagers write the code that collects data, then train a model and test it fairly. They learn that a model is only as honest as the dataset behind it, which is exactly where the Trier project below begins.' },
          { h3: 'Adults', p: 'Adults get the most from AI when they can check it. With some Python they can fetch the data themselves, compare it with what a tool tells them, and automate the dull parts of their work without handing over their judgement.' }
        ] },
        { kind: 'p', mt: true, html: 'AI tools have age limits in their providers\' own terms, and we follow them. OpenAI allows ChatGPT from 13, with a parent\'s permission until 18; Anthropic allows Claude only from 18, so it appears only in adult courses. Each limit is quoted with its date in our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a>. A teenager looking for a national target might try the Bundeswettbewerb Künstliche Intelligenz: its conditions allow an entry written in English. It is run independently of us.' }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A Trier data project',
      h2: 'How many bus stops does Trier\'s own data service list?',
      lede: 'The City of Trier publishes the locations of its city bus stops through an online map service, free to reuse under the Datenlizenz Deutschland Namensnennung 2.0. Asking it a simple question teaches the first rule of collecting data for any AI: get all of it, get each item once, and check the answer yourself.',
      body: [
        { kind: 'two',
          leftH3: 'How the service answers',
          left: [
            'The data sits behind a standard web interface for map features, run on the Rhineland-Palatinate geoportal. It describes the stops of the Stadtwerke Trier buses in Trier and the surrounding area. Ask it for stops and it does not send them all at once; it sends a page of them, plus a link to the next page.',
            'You choose how many stops per page, but only from a fixed list. When we asked for 5,000 at once, the service refused and listed the sizes it accepts, from 1 up to 4,000. We used pages of 200 and saved each answer as a file, stops_offset_0.json, stops_offset_200.json and so on.'
          ],
          rightH3: 'The obvious plan',
          right: [
            'Every page also carries a number called numberMatched, the service\'s own count of how many stops match. The obvious plan is to keep reading pages until one comes back with fewer than 200 stops, because a short page must surely be the last.',
            'Version 1 does exactly that. It is the code most people would write, and on this service it is wrong.'
          ] },
        { kind: 'code', label: 'Version 1: stop at the first short page', lang: 'Python', code: V1, note: 'It prints <code>The service says it matched: 648</code> and <code>Stopping at the first short page: 598 stops</code>.' },
        { kind: 'p', mt: true, html: 'The third page brought 198 stops instead of 200, so Version 1 decided it had reached the end. It had not. The service simply sent a slightly short page in the middle, and 62 more stops were waiting on the fourth page. A program that trusts "short means last" would hand an AI model, a map or a report about nine percent too few stops, and nobody would see an error message.' },
        { kind: 'code', label: 'Version 2: stop only at an empty page, then check the ids', lang: 'Python', code: V2, note: 'It prints <code>offset 0 gave 200</code>, <code>offset 200 gave 200</code>, <code>offset 400 gave 198</code>, <code>offset 600 gave 62</code>, then <code>Stopping at the first empty page: 660 stops, 659 different ids</code> and <code>Ids that came twice: [35006]</code>.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Three answers to "how many bus stops?", Stadt Trier service, 3 November 2026 (our counts)', head: ['Method', 'Stops'], rows: [
          ['The service\'s own numberMatched', '648'],
          ['Reading until the first short page', '598'],
          ['Reading until the first empty page', '660'],
          ['After removing the stop that arrived twice', '659'],
          ['One request for up to 1,000 stops', '659']
        ] },
        { kind: 'source', html: 'Data: Stadt Trier, Stadtbus - Haltestellen (SWT), via the geoportal.rlp.de feature service, Datenlizenz Deutschland Namensnennung 2.0 (dl-de/by2-0, www.trier.de); pages saved on 3 November 2026. Every count in the table, and the reading of it, is ours.' },
        { kind: 'p', mt: true, html: 'Version 2 keeps going until a page is empty, which is the only safe sign of the end. It then finds a second, smaller problem: one stop, id 35006, appears on two neighbouring pages, so 660 records hold 659 different stops. Paging can repeat or skip items at page edges, which is why a careful collector always de-duplicates by id. The final surprise is the service\'s own total. It says 648 on every page, yet it delivers 659 different stops, and a single large request agrees with 659. A number a system reports about itself is a claim, not a fact, until you count.' },
        { kind: 'p', html: 'There are also more stop records than stop names. The file lists 347 different names for its 659 records, because a busy stop is listed more than once: Trier, Porta Nigra alone appears eight times, most likely once per platform or direction. Deciding whether "a stop" means a name or a platform comes before any analysis, and the right answer depends on the question.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Children, 9 to 12.</strong> Read a long book list aloud ten titles at a time. Make one "page" only nine titles long by mistake. Does the listener stop early?',
          '<strong>Teenagers.</strong> After running the two versions, add a third that halts when the service gives no next link at all. Does the service ever stop giving one?',
          '<strong>Adults.</strong> Think of an export at work that comes in pages or batches. How would you prove you received everything exactly once?',
          '<strong>Going further.</strong> Group the 659 records by stop name and list the five names with the most platforms.'
        ] }
      ]
    },
    {
      id: 'school',
      eyebrow: 'Rhineland-Palatinate schools',
      h2: 'What do Trier schools teach about Informatik, now and from 2028/29?',
      lede: 'Trier follows the Rhineland-Palatinate rules, which are about to change. Here is the picture today and the one the Land has announced.',
      body: [
        { kind: 'table', numCols: [], caption: 'Informatik in Rhineland-Palatinate, as reported in the Informatik-Monitor 2026/27', head: ['Topic', 'Today', 'From the 2028/29 school year'], rows: [
          ['Compulsory for all pupils?', 'No; Rhineland-Palatinate is one of six Länder without it', 'Yes, at all schools'],
          ['Where it is compulsory now', 'Grade 5 at 21 Informatik-Profil-Schulen, since 2021/22', 'Every school'],
          ['How much', 'Varies by school', 'Four weekly hours, added up over the years taught'],
          ['Oberstufe', 'Optional, where a school offers it', 'Optional, where a school offers it']
        ] },
        { kind: 'source', html: 'From the Informatik-Monitor 2026/27 of the Gesellschaft für Informatik (overview and the Land\'s own page), consulted 2 November 2026. Secondary schools in the Land include the Gymnasium, mostly nine years with an eight-year route at some, and the Realschule plus.' },
        { kind: 'two', mt: true,
          leftH3: 'What that means for a Trier family',
          left: [
            'A child who is 7 today will meet Informatik as a subject at secondary school. A teenager in grade 9 today will most likely finish school without it, unless they choose it. Across Germany, according to the monitor, roughly 15 out of every 100 pupils in the last two school years have Informatik on their timetable.',
            'Either way, the subject is new to the timetable, and many pupils will meet it with no practice behind them.'
          ],
          rightH3: 'Where we fit',
          right: [
            'Nothing we teach replaces a lesson at a Trier school, and only the school awards marks or the Abitur. If a pupil does take Informatik there, our <a class="ag-inline-link" href="/courses/informatik-companion-course-klasse-5-10">Informatik companion for Klasse 5 to 10</a> and <a class="ag-inline-link" href="/courses/informatik-abitur-course-java-python">Informatik Abitur course</a> follow school topics in English.',
            'For holidays, school types and the reform timetable across the whole Land, see our <a class="ag-inline-link" href="/coding-classes-in-rhineland-palatinate">Rhineland-Palatinate overview</a>.'
          ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When do classes run in Trier time?',
      lede: 'Pupils mostly come after school, adults after work, and many learners on Saturday or Sunday. In India, where the mentor teaches, it is already evening.',
      body: [
        { kind: 'table', numCols: [], caption: 'Trier time and the mentor\'s time, four examples', head: ['Trier', 'India, this winter', 'India, from 28 March 2027'], rows: [
          ['16:50', '21:20', '20:20'],
          ['17:40', '22:10', '21:10'],
          ['Saturday 11:00', '15:30', '14:30'],
          ['Sunday 14:00', '18:30', '17:30']
        ] },
        { kind: 'source', html: 'The Einheitenzeitgesetz puts Trier on UTC+1 in winter (since 25 October 2026) and on UTC+2 in summer (from 28 March 2027). India uses UTC+5:30 the whole year. Illustrations only; group times are agreed when a class forms.' },
        { kind: 'p', mt: true, html: 'The Kultusministerkonferenz table for 2026/27 gives Rhineland-Palatinate an autumn break that ended on 16 October 2026 after starting on the 5th, a Christmas break from 23 December 2026 to 8 January 2027, two Easter weeks from 22 March 2027 ending on 2 April, and six summer weeks from 28 June 2027 until 6 August. Classes continue through the holidays for anyone who wants them. Learners join from all parts of Trier and from nearby Konz, Schweich, Saarburg, Hermeskeil and Bitburg.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'Five milestones from first program to AI project',
    lede: 'Our own milestones, the same for every age, used to place learners and report progress.',
    table: { caption: 'Coding and AI milestones (ours)', head: ['Milestone', 'Usually', 'The learner can'], rows: [
      ['First program', 'First week', 'Make the computer follow steps exactly'],
      ['Loops and choices', 'First months', 'Repeat work and decide between cases'],
      ['Collecting data', 'Months 3 to 5', 'Fetch every page of a dataset, once each, and check the count'],
      ['A tested model', 'Months 5 to 9', 'Train a model and compare it with a naive guess'],
      ['A project', 'Later', 'Build, document and explain something new']
    ] },
    left: { h3: 'For parents', ps: [
      'The third milestone is the Trier bus stop project. A child who checks a total for themselves will do the same in maths homework.',
      'Reports describe what your child made and could explain.'
    ] },
    right: { h3: 'For adult learners', ps: [
      'A system\'s own count is a claim until you have counted.',
      'If data arrives in pages, stop when a page is empty, never when it is merely short.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for Trier learners',
    lede: 'Each is live and in English, with one mentor throughout, in a class or one to one.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'CAT / KIDS / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Scratch first, then apps and a taste of AI.' },
        { code: 'CAT / KIDS / 02', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'What AI is and is not, for 8 to 14.' },
        { code: 'CAT / KIDS / 03', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe coding for kids', blurb: 'Children steer an AI helper and check its work.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'CAT / TEEN / 01', slug: 'backend-coding-masterclass-for-teens', title: 'Backend for teens', blurb: 'APIs and databases from the server side.' },
        { code: 'CAT / TEEN / 02', slug: 'orange-data-mining-visual-machine-learning-course-for-teens', title: 'Visual machine learning', blurb: 'Models in Orange before writing code.' },
        { code: 'CAT / TEEN / 03', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'Biber, BwInf and BWKI', blurb: 'From contest puzzles to an AI entry.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Ages 18 and up', courses: [
        { code: 'CAT / ADULT / 01', slug: 'data-science-complete-masterclass-college', title: 'Data science', blurb: 'From raw data to models and reports.' },
        { code: 'CAT / ADULT / 02', slug: 'artificial-intelligence-complete-masterclass-college', title: 'Artificial intelligence', blurb: 'Search, logic and agents, from first principles.' },
        { code: 'CAT / ADULT / 03', slug: 'mysql-database-complete-masterclass-college', title: 'SQL and databases', blurb: 'Where most organisations keep their data.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How live classes run for Trier learners',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Late afternoon', l: 'For pupils, once school is done.' },
      { time: 'Evening', l: 'For adults on working days.' },
      { time: 'Private', l: 'A time fixed with the mentor, weekends too.' }
    ],
    cells: [
      { h3: 'Typed by the learner', p: 'The mentor never takes the keyboard.' },
      { h3: 'Checked counts', p: 'Every dataset is counted before it is used.' },
      { h3: 'Gentle English', p: 'Slower, simpler, repeated when needed.' },
      { h3: 'One mentor', p: 'The same person from start to finish.' },
      { h3: 'Ages kept separate', p: 'Children, teens and adults in their own groups.' },
      { h3: 'Group or solo', p: 'Fifteen to twenty learners, or private.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Projects from our learners in many countries; the <a class="ag-inline-link" href="/student-labs">student labs</a> page collects more.',
  reviewsLede: 'Students\' and parents\' Google reviews, copied without changes.',

  fees: {
    h2: 'Fees for learners in Trier',
    lede: 'You pay once a month for eight live classes. The euro amount on this page is converted at the European Central Bank reference rate, while the payment runs in US dollars; your bank handles the exchange, so the euro it books may be a few cents off.',
    free: ['A free first class', 'A short task at the learner\'s level', 'No card needed'],
    group: ['Fifteen to twenty learners of similar age', 'One regular mentor', 'Two classes each week', 'Monthly, cancel when you like'],
    one: ['One learner, one mentor', 'Your own goals and pace', 'Times agreed together']
  },

  faq: {
    eyebrow: 'Trier learners ask',
    h2: 'Coding and AI classes in Trier: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. All lessons are live and in English only, with a mentor who adjusts speed and accent to the learner. Python and Scratch use English words anyway, so the two fit together.' },
      { q: 'Why not start straight with AI?', a: 'Because AI depends on data and code. A few weeks of programming teach a learner to check what a computer returns, which is the skill that makes AI useful and safe to rely on.' },
      { q: 'What is the minimum age?', a: 'Six. The youngest begin with Scratch, where blocks replace typing, and switch to Python when reading and keyboard skills allow, often at nine.' },
      { q: 'Do Trier schools teach Informatik?', a: 'Only some pupils have it for now: the Land has no Informatik binding on everyone, except grade 5 at 21 profile schools. The Gesellschaft für Informatik reports that from the 2028/29 school year every school will teach it, four weekly hours spread over the grades.' },
      { q: 'Which AI tools will my teenager use?', a: 'OpenAI allows ChatGPT from 13 with a parent\'s permission under 18, and we follow that. Anthropic sets 18 for Claude, so it is used only in adult classes. Children\'s courses need no AI account at all.' },
      { q: 'When are classes in Trier time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Pupils tend to come after school and adults after work.' },
      { q: 'Who are the mentors?', a: 'Programmers and teachers based in India who teach live over video, in English. Each learner keeps the same mentor.' },
      { q: 'Which currency is used?', a: 'Fees appear in euro, converted at the European Central Bank reference rate, and are charged in US dollars. Your bank converts the payment, so the booked amount may vary a little. The first class is free.' },
      { q: 'What is the bus stop project?', a: 'An exercise on the City of Trier\'s bus stop service. Reading pages until the first short one gives 598 stops; reading until an empty page gives 660, of which 659 are different; the service itself claims 648.' },
      { q: 'Can adults with no experience join?', a: 'Yes. Adult courses start from the first line of Python and move to data and AI at a pace that fits work.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Trier learners.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Our national page, with links onward.' },
      { href: '/coding-classes-in-rhineland-palatinate', label: 'Coding classes in Rhineland-Palatinate', p: 'The Land\'s school rules in full.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning in Germany', p: 'Teen and adult machine learning.' },
      { href: '/vibe-coding-and-ai-agents-classes-germany', label: 'Vibe coding and AI agents', p: 'Working with AI coding tools, carefully.' },
      { href: '/online-coding-classes-europe', label: 'Online coding classes in Europe', p: 'For families near the borders.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What happens in a live class.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Send us an age and one interest. In the free class the mentor sets a short task, sees how the learner approaches it and how easy English feels, and recommends a course.',
    readFirst: 'Further reading: <a class="ag-inline-link" href="/how-we-teach">how we teach</a> and <a class="ag-inline-link" href="/courses">all courses</a>.',
    note: 'Live online classes in English only, with mentors in India. For quick questions, WhatsApp us in English.',
    formNote: 'The first class is free and asks for no card.'
  },

  footer: {
    cols: [
      { h4: 'Coding and AI', links: [
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and ML in Germany' },
        { href: '/vibe-coding-and-ai-agents-classes-germany', label: 'Vibe coding and agents' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-rhineland-palatinate', label: 'Rhineland-Palatinate' },
        { href: '/online-coding-classes-europe', label: 'Coding classes in Europe' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Read until the page is empty'
  },

  personalityCss: `
.ag-root.ag-cat .ag-hero h1 { letter-spacing: -0.017em; }
.ag-root.ag-cat .ag-capsule { border-left-width: 5px; }
.ag-root.ag-cat .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-cat .ag-table td:last-child { font-variant-numeric: tabular-nums; }
.ag-root.ag-cat .ag-code-head b { letter-spacing: 0.018em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (national summary, Rhineland-Palatinate page); KMK school types; KMK Ferienregelung 2026/27; BWKI conditions; providers\' terms via our AI tools age guide; Einheitenzeitgesetz; Destatis GV-ISys. Stadt Trier, Stadtbus - Haltestellen (SWT), Datenlizenz Deutschland Namensnennung 2.0.',
    localProject: 'Bus stops from the Trier service: an original Python project reading the Stadt Trier bus stop feature service in saved pages of 200, where stopping at the first short page (198) gives 598 stops, stopping at the first empty page gives 660 records with 659 different ids (id 35006 twice), and the service\'s own numberMatched says 648. Lesson family: page until empty, de-duplicate by id, and count rather than trust a reported total.',
    requiredMentions: ['stops_offset_0.json', 'The service says it matched: 648', 'Stopping at the first short page: 598 stops', 'Stopping at the first empty page: 660 stops, 659 different ids', 'Ids that came twice: [35006]', '347 different names', 'Konz, Schweich, Saarburg, Hermeskeil and Bitburg', 'Read until the page is empty'],
    sources: [
      { claim: 'Stadt Trier bus stop dataset and its DL-DE BY 2.0 licence.', url: 'https://ckan.govdata.de/dataset/stadtbus-haltestellen-swt' },
      { claim: 'The feature service the pages were read from.', url: 'https://www.geoportal.rlp.de/spatial-objects/505/collections/ms:haltestellen_swt' },
      { claim: 'Rhineland-Palatinate Informatik today and from 2028/29.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/rheinland-pfalz' },
      { claim: 'Rhineland-Palatinate school holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'AI tool minimum ages.', url: 'https://learn.modernagecoders.com/ai-tools-age-guide' }
    ],
    rejectedClaims: [
      'Any explanation of why numberMatched says 648: not documented; reported only as a mismatch we counted.',
      'Treating the 659 records as 659 physical stops: refused; the file has 347 names, and Porta Nigra appears eight times (our reading: platforms or directions, not documented).',
      'Any affiliation with the Stadt Trier, the Stadtwerke Trier, the geoportal or the BWKI: none.',
      'German-language teaching: we teach in English only, and the page says so.'
    ]
  }
};
