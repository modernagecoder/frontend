'use strict';
// Coding for international school students in Hamburg (ag- city school page, Germany cluster P5 row DE110).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Angle: a teenager in Hamburg at an English-medium school (the city's AGIS member lists IB programmes and Cambridge
// Lower Secondary) or moving between the international and the Hamburg state system. Spine: what AGIS lists for
// Hamburg (context only), how the IB Diploma counts in Germany and where Computer Science sits in that rule (KMK),
// how Hamburg's state schools treat Informatik (four compulsory hours, a central Abitur paper with no computer), the
// IGCSE 0478 papers for pupils on a Cambridge route, an algorithmic-cost project on StadtRAD station data, and times.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/coding-for-international-school-students-hamburg/):
//  - AGIS directory, International School of Hamburg (FACTS 236; agis-international-school-of-hamburg txt lines 35 to
//    40): "Angebotene Abschlüsse IB Middle Years Programme (MYP) International Baccalaureate (IB) IB Career-related
//    Programme (CP) IPC – International Primary Curriculum Cambridge Lower Secondary". places.tsv lists it as the AGIS
//    member in Hamburg. AGIS homepage and Wer wir sind (FACTS 245, 247, 248, 249, 250): "unserer 23 Mitgliedsschulen";
//    all members "autorisierte IB-Schulen"; IB Diploma "dem deutschen Abitur gleichwertig" with prescribed combinations;
//    MYP or IGCSE "einen der Mittleren Reife gleichwertigen Abschluss"; "bis zu 65 verschiedenen Nationen", "Englisch
//    als gemeinsame Sprache im Unterricht".
//  - KMK, Vereinbarung über die Anerkennung des IB Diploma (kmk-ib/5c09f317.txt, copied from the IB CS page sources):
//    "Unter den sechs Prüfungsfächern"; "ein naturwissenschaftliches Fach (Biology, Chemistry, Physics)"; "Das sechste
//    verbindliche Fach kann außer den genannten Fächern eines der nachfolgenden ... sein"; list includes "Computer
//    Science, Design Technology, World Religions, Sports Exercise and Health Science, Digital Society".
//  - GI Informatik-Monitor 2026/27, Hamburg page (infmon-hamburg/09e5d2a0.txt): "An Stadtteilschulen und Gymnasien sind
//    seit dem Schuljahr 2025/26 vier Wochenstunden Informatik verpflichtend."; Qualifikationsphase "als mindestens
//    vierstündiges profilgebendes Fach auf erhöhtem Anforderungsniveau"; "Die Schriftlichen Abiturprüfungen für das
//    grundlegende und das erhöhte Anforderungsniveau in Hamburg werden zentral entwickelt und sind landesweit
//    einheitlich. Derzeit sind in der schriftlichen Abiturprüfung im Fach Informatik keine praktischen Anteile
//    zulässig."; "Taschenrechner (nicht programmierfähig, nicht grafikfähig) und Rechtschreibwörterbuch"; Kennzahl
//    "Anteil Informatiklehrkräfte an allen Lehrkräften" "5 %" (Schuljahr 2025/2026) against the GI's "mindestens acht
//    Prozent".
//  - Cambridge IGCSE Computer Science 0478, 2026 to 2028 syllabus (copied from the IGCSE page sources): Paper 1 Computer
//    Systems, Paper 2 Algorithms, Programming and Logic, each "Written paper, 1 hour 45 minutes, 75 marks"; "pseudocode
//    or their choice of one of the following programming languages: Python, Visual Basic or Java".
//  - KMK holidays 2026/27 Hamburg (FACTS 285); summer 2027 (262). Destatis GV-ISys 31.12.2024: Hamburg 1,862,565.
//  - Time: Einheitenzeitgesetz; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Behörde für Verkehr und Mobilitätswende (BVM) via Transparenzportal Hamburg, "StadtRAD-Stationen Hamburg"
//    (https://ckan.govdata.de/dataset/stadtrad-stationen-hamburg5b815, record saved), licence Datenlizenz Deutschland
//    Namensnennung 2.0. OGC API https://api.hamburg.de/datasets/v1/stadtrad/collections/stadtrad_stationen/items?f=json&limit=1000:
//    358 point features (numberMatched 358), 66,093 bytes, sha256 2b0caa2f...dfdb6b6f4, saved as stadtrad.json,
//    downloaded 3 November 2026. One feature (id 159, Bahnhof Dammtor / Dag-Hammarskjöld-Platz) has coordinates
//    [1.0e-07, 0.0].
// Our own code (scratchpad de/w/C1/py/coi_v1.py, coi_v2.py run as coi_all.py, python3 -I, in the data folder):
//  coi_v1 prints "Stations: 358 Distance checks: 127806" and "Most isolated: StadtRad-Station Bahnhof Dammtor /
//  Dag-Hammarskjöld-Platz 6013309 m".
//  coi_v2 prints "Distance checks: 63903" and "Closest pair: 82 m".
//  Exploration (same haversine, the 357 stations with Hamburg coordinates): most isolated S Rissen / Gudrunstraße 3,813 m,
//  then Bahnhof Rahlstedt / Helmut-Steidl-Platz 2,276 m; median nearest neighbour 463 m; closest pair includes
//  Osakaallee / Überseequartier.
// Lesson family: the cost of an algorithm; count the comparisons a nested loop makes, then halve them.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import json, math',
  '',
  'def metres(a, b):',
  '    lon1, lat1, lon2, lat2 = map(math.radians, (a[0], a[1], b[0], b[1]))',
  '    h = math.sin((lat2 - lat1) / 2) ** 2 + math.cos(lat1) * math.cos(lat2) * math.sin((lon2 - lon1) / 2) ** 2',
  '    return 2 * 6371000 * math.asin(math.sqrt(h))',
  '',
  'with open("stadtrad.json", encoding="utf-8") as f:',
  '    stations = [(s["properties"]["name"], s["geometry"]["coordinates"]) for s in json.load(f)["features"]]',
  '',
  'checks = 0',
  'nearest = {}',
  'for i, (name, here) in enumerate(stations):',
  '    for j, (other, there) in enumerate(stations):',
  '        if i == j:',
  '            continue',
  '        checks += 1',
  '        d = metres(here, there)',
  '        if name not in nearest or d < nearest[name]:',
  '            nearest[name] = d',
  '',
  'print("Stations:", len(stations), "Distance checks:", checks)',
  'loneliest = max(nearest, key=nearest.get)',
  'print("Most isolated:", loneliest, round(nearest[loneliest]), "m")'
].join('\n');

const V2 = [
  'checks = 0',
  'closest = None',
  'for i in range(len(stations)):',
  '    for j in range(i + 1, len(stations)):',
  '        checks += 1',
  '        d = metres(stations[i][1], stations[j][1])',
  '        if closest is None or d < closest[0]:',
  '            closest = (d, stations[i][0], stations[j][0])',
  '',
  'print("Distance checks:", checks)',
  'print("Closest pair:", round(closest[0]), "m")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'school', label: 'Hamburg: international school coding' },
  slug: 'coding-for-international-school-students-hamburg',
  code: 'coi',
  accent: '#721D50',
  accentRationale: 'Coding for international school students in Hamburg: a deep plum #721D50, distinct from the harbour green and wine red of the other Hamburg pages and from the Berlin olive; contrast 8.49 at its lowest on the paper tints and above 4.5 on all three',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Coding for international school students in Hamburg',
  title: 'Coding for International School Students in Hamburg, in English',
  description: 'Coding for international school students in Hamburg: IB, Cambridge and Hamburg Abitur computing explained, live online classes in English, and a StadtRAD project.',
  ogDescription: 'Live online computer science help in English for Hamburg teenagers at English-medium schools or moving between systems: the IB and Cambridge routes, Hamburg\'s Informatik rules, and an algorithm project on the StadtRAD stations.',
  twitterDescription: 'Computer science for Hamburg\'s international school pupils, live in English: IB, Cambridge, Abitur and a StadtRAD project.',
  pageName: 'Coding for International School Students in Hamburg',
  webPageDescription: 'A guide for teenagers at English-medium schools in Hamburg to computer science routes and help, built from the AGIS directory, the KMK IB recognition agreement, the Gesellschaft für Informatik and Cambridge sources, with an original Python project on the StadtRAD station data.',
  courseDescription: 'Live online computer science tutoring in English for pupils of 13 to 19 at international schools in Hamburg and those moving into the Hamburg system: IB Diploma Computer Science, IGCSE Computer Science and Abitur Informatik, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'International schools, Hamburg',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#school', label: 'School' },
    { href: '#compare', label: 'Compare' },
    { href: '#project', label: 'Project' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Hamburg &middot; International schools &middot; Ages 13 to 19',
  h1: 'Coding for international school students in Hamburg',
  lede: 'Hamburg has one member of the Association of International Schools in Germany, and its directory entry lists IB programmes and Cambridge Lower Secondary. Hamburg\'s state schools, meanwhile, now teach every pupil Informatik and set a central Abitur paper in it with no computer in the room. A teenager who moves between the two, or who simply wants computer science in English, needs to know how each route works. This page explains them, shows how we teach for both, and ends with a Python project on Hamburg\'s bike-share stations about the question every computer science exam asks sooner or later: how much work does your algorithm do?',
  secondaryCta: { href: '#compare', label: 'Compare the routes' },
  wa: 'Hello Modern Age Coders, I go to school in Hamburg and want computer science help in English. Could I book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; IB, Cambridge and Abitur computing in English',
  spec: [
    ['Ages', '13 to 19'],
    ['Routes', 'IB Diploma, IGCSE, Hamburg Abitur'],
    ['Languages', 'Python, Java, pseudocode'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Teachers', 'Mentors based in India, live'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders offers coding for international school students in Hamburg as live online computer science lessons, taught in English, for teenagers from 13 to 19: IB Diploma Computer Science, IGCSE Computer Science 0478 for Cambridge routes, and Informatik for pupils joining a Hamburg Oberstufe. A regular mentor adapts to your pace and accent, and you choose one to one or a group of fifteen to twenty.',

  picks: {
    eyebrow: 'Three routes, three courses',
    h2: 'Courses for Hamburg pupils on each computing route',
    lede: 'Choose by the qualification you are working toward, not by the school you attend.',
    items: [
      { course: 'ib-diploma-computer-science-course', code: 'COI / 01', title: 'IB Diploma Computer Science', note: 'For the last two school years. Built on the IB guide first examined in 2027: programming, algorithms, data and a supervised path through the internal assessment.' },
      { course: 'igcse-computer-science-0478-course', code: 'COI / 02', title: 'IGCSE Computer Science 0478', note: 'For pupils of about 14 to 16 on a Cambridge route after Lower Secondary: both written papers, pseudocode until it is second nature, Python for the code.' },
      { course: 'informatik-abitur-course-java-python', code: 'COI / 03', title: 'Informatik Abitur in English', note: 'Ages 16 to 19. For pupils moving into a Hamburg Oberstufe: Java or Python, data structures and the habit of writing code on paper.' }
    ]
  },

  sections: [
    {
      id: 'school',
      eyebrow: 'International schools in Hamburg',
      h2: 'What does Hamburg\'s international school offer, according to AGIS?',
      lede: 'In Hamburg, the directory of AGIS (Arbeitsgemeinschaft der Internationalen Schulen in Deutschland) has a single member school. We describe its listing as context only; we have no connection with the school or with AGIS, and we never name a school as a source of students.',
      body: [
        { kind: 'table', numCols: [], caption: 'Qualifications AGIS lists for the International School of Hamburg, and how AGIS says Germany reads them', head: ['Listed by AGIS', 'How AGIS describes its value in Germany'], rows: [
          ['IPC, International Primary Curriculum', 'No German equivalence stated'],
          ['Cambridge Lower Secondary', 'No German equivalence stated'],
          ['IB Middle Years Programme (MYP)', 'Schools offering the MYP give a qualification equivalent to the Mittlere Reife'],
          ['International Baccalaureate (IB Diploma)', 'Equivalent to the German Abitur, with prescribed subject combinations'],
          ['IB Career-related Programme (CP)', 'No German equivalence stated']
        ] },
        { kind: 'source', html: 'Sources: AGIS school directory entry for the International School of Hamburg; AGIS homepage and Wer wir sind. Read on 2 November 2026. According to AGIS, every member is an authorised IB school, pupils come from as many as 65 nations, and lessons share English as their language.' },
        { kind: 'two', mt: true,
          leftH3: 'Where Computer Science fits the IB rule',
          left: [
            'The KMK agreement that recognises the IB Diploma in Germany asks for a particular mix among the six exam subjects: two languages, a natural science from Biology, Chemistry or Physics, mathematics, and a social science. The sixth subject can come from a further list.',
            'Computer Science is on that further list, alongside Design Technology and Digital Society. So a pupil who wants the German recognition takes Computer Science in addition to a natural science, not instead of one. Your IB coordinator is the person to confirm a subject plan.'
          ],
          rightH3: 'Cambridge before the IB',
          right: [
            'AGIS lists Cambridge Lower Secondary for the Hamburg school but not IGCSE, so a Hamburg pupil who wants IGCSE Computer Science would be taking it through another school, privately, or after moving from another city.',
            'For those pupils the 0478 syllabus is the reference, and it is set out in the next section. Everything we say about a particular school\'s offer comes from AGIS; the school\'s own pages are the authority on what it teaches in a given year.'
          ] }
      ]
    },
    {
      id: 'compare',
      eyebrow: 'Routes compared',
      h2: 'How does computing differ between IB, IGCSE and the Hamburg Abitur?',
      lede: 'All three teach the same core ideas. They differ in how many hours you get, what language you answer in, and whether a computer is allowed in the exam.',
      body: [
        { kind: 'table', numCols: [], caption: 'Computing on three routes open to Hamburg pupils', head: ['Route', 'Before the final exam', 'The exam', 'Computer in the exam?'], rows: [
          ['Hamburg state school, Abitur', 'Four compulsory Informatik hours across grades 7 to 10 since 2025/26; at raised level a profile subject of at least four hours a week', 'Written paper developed centrally, the same across Hamburg', 'No: no practical parts; only a non-programmable, non-graphing calculator and a spelling dictionary'],
          ['Cambridge IGCSE 0478', 'The two-year syllabus', 'Two written papers of 75 marks and 1 hour 45 minutes each: one on computer systems, one on algorithms, programming and logic', 'No: answers are handwritten, in pseudocode or in Python, Visual Basic or Java'],
          ['IB Diploma', 'The two-year IB course', 'Set by the IB', 'Left blank: we could not read ibo.org, so we quote nothing']
        ] },
        { kind: 'source', html: 'Where this comes from: the Informatik-Monitor 2026/27 page on Hamburg, published by the Gesellschaft für Informatik; the Cambridge 0478 syllabus valid from 2026 to 2028; the KMK recognition agreement for the IB Diploma. We read them on 2 and 3 November 2026 and left the IB row without figures on purpose.' },
        { kind: 'two', mt: true,
          leftH3: 'Hamburg is a paper-and-pen Land',
          left: [
            'The Informatik-Monitor says Hamburg\'s written Abitur papers in Informatik are developed centrally and are uniform across the city, and that no practical parts are currently allowed. The only aids are a calculator that cannot be programmed or draw graphs, and a spelling dictionary.',
            'That surprises pupils from international schools, where code is often written and tested on a laptop all the way to the final project. A pupil joining a Hamburg Oberstufe has to learn to trace and write programs by hand, which is the skill IGCSE Paper 2 also rewards.'
          ],
          rightH3: 'Hours and teachers',
          right: [
            'Hamburg is one of four Länder that meet the recommendation of four compulsory Informatik hours, and the Informatik-Monitor gives the share of Informatik teachers among all Hamburg teachers in 2025/26 as 5 percent. The GI itself says a share of at least 8 percent would be needed to teach six hours.',
            'In other words, the subject is compulsory but specialist teachers are still scarce. A pupil who arrives from an international school with strong programming may find the class moves slowly; a pupil arriving with none may find the paper tasks hard. Both are reasons families look for help outside school.'
          ] }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Why take computer science lessons in English in Hamburg?',
      lede: 'Because the IB and Cambridge exams are in English, and because the languages of programming are English too.',
      body: [
        { kind: 'three', cells: [
          { h3: 'English, only', p: 'Lessons are live and taught in English, with no German-language option. Mentors adjust to each pupil\'s pace and accent and put an idea another way when the first way does not work.' },
          { h3: 'The board\'s own words', p: 'We practise with the command words and formats of your syllabus, so an exam question reads the way the examiner meant it.' },
          { h3: 'One mentor all year', p: 'The same mentor teaches you every week and keeps track of what is still shaky. Our mentors work from India and teach you live, on video, in a code editor you both type into.' }
        ] },
        { kind: 'p', mt: true, html: 'We teach pupils to reason, not to collect answers. Nobody writes your internal assessment for you, and no AI tool is used to do the thinking. For pupils under 18 we never recommend adult-only AI services; our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a> shows the minimum ages in each tool\'s own terms.' }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A Hamburg data project',
      h2: 'How much work does a nearest-station search do? An algorithm project on StadtRAD data',
      lede: 'Hamburg\'s transport authority publishes the locations of its StadtRAD bike-share stations as open data. Finding the nearest station to each station is a classic exercise, and it teaches what IB and IGCSE call efficiency.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The dataset StadtRAD-Stationen Hamburg comes from the Behörde für Verkehr und Mobilitätswende under the Datenlizenz Deutschland Namensnennung 2.0. On 3 November 2026 we downloaded it from the city\'s open API and saved it as stadtrad.json: 358 stations, each with a name and a longitude and latitude.',
            'To measure the distance between two points on the Earth we use the haversine formula, with the Earth\'s radius taken as 6,371 km. It is a short function, and every distance in the project comes from it.'
          ],
          rightH3: 'The question',
          right: [
            'For every station, which other station is nearest, and which station is the most isolated? The simplest algorithm compares every station with every other station. With 358 stations, how many distance calculations is that?',
            'Pupils should guess before running anything. Most guess a few thousand. The real number is the point of the lesson.'
          ] },
        { kind: 'code', label: 'Version 1: compare everything with everything', lang: 'Python', code: V1, note: 'It prints <code>Stations: 358 Distance checks: 127806</code> and <code>Most isolated: StadtRad-Station Bahnhof Dammtor / Dag-Hammarskjöld-Platz 6013309 m</code>.' },
        { kind: 'p', mt: true, html: 'Two lessons in one run. First the cost: 358 stations times 357 others is 127,806 distance checks. Double the stations and the checks roughly quadruple, which is what quadratic time means. Second, the answer is absurd: a station at Hamburg Dammtor station cannot be 6,013 km from its nearest neighbour. Its record in the file has the coordinates 0, 0, a point in the Atlantic off West Africa that mapping people call Null Island. The algorithm is right; the input is not.' },
        { kind: 'code', label: 'Version 2: compare each pair only once', lang: 'Python', code: V2, note: 'Run after Version 1, it prints <code>Distance checks: 63903</code> and <code>Closest pair: 82 m</code>.' },
        { kind: 'p', html: 'The distance from A to B is the same as from B to A, so the inner loop can start just after the outer one. That halves the work to 63,903 checks, still quadratic but twice as fast, and it finds the two stations closest together, 82 m apart near Osakaallee in the Überseequartier. Leave out the station at 0, 0 and run Version 1 again on the 357 stations with Hamburg coordinates: the most isolated real station is S Rissen / Gudrunstraße, 3,813 m from its nearest neighbour, and the median distance to a nearest neighbour is 463 m.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Distance checks for the nearest-station search (our calculation)', head: ['Method', 'Checks for 358 stations', 'Formula'], rows: [
          ['Every station against every other', '127,806', 'n times (n minus 1)'],
          ['Each pair once', '63,903', 'n times (n minus 1), halved'],
          ['Each pair once, for 716 stations', '255,970', 'Twice the stations, about four times the checks']
        ] },
        { kind: 'source', html: 'Data: Behörde für Verkehr und Mobilitätswende, via Transparenzportal Hamburg, StadtRAD-Stationen Hamburg, Datenlizenz Deutschland Namensnennung 2.0; downloaded 3 November 2026 through api.hamburg.de. Every count and distance is our own. The last row of the table is a calculation for a city with twice as many stations, not real data.' },
        { kind: 'ol', mt: true, items: [
          '<strong>IGCSE.</strong> Write Version 2 as Cambridge-style pseudocode with two nested FOR loops, and trace it by hand for four stations. How many times does the inner loop body run?',
          '<strong>IB.</strong> Explain in Big O terms why Version 2 is faster but not in a different class from Version 1. Then describe a grid-based method that would avoid comparing stations kilometres apart.',
          '<strong>Abitur.</strong> Add a validation step that rejects any station outside a rectangle around Hamburg, and write two test cases: one that must pass, one that must fail.',
          '<strong>Everyone.</strong> Before you run any program on a new file, plot the points or print the extremes. One look would have found Null Island.'
        ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What times work for a Hamburg pupil?',
      lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. International school days can run late, so many pupils book an early evening or a weekend slot.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample Hamburg lesson times, with the mentor\'s clock', head: ['Hamburg', 'Mentor in India, winter', 'Mentor in India, from 28 March 2027'], rows: [
          ['16:35', '21:05', '20:05'],
          ['17:50', '22:20', '21:20'],
          ['Saturday 14:20', '18:50', '17:50'],
          ['Sunday 12:30', '17:00', '16:00']
        ] },
        { kind: 'source', html: 'Under the Einheitenzeitgesetz Germany uses Central European Time, UTC+1, and summer time, UTC+2; the clocks went back on 25 October 2026 and go forward on 28 March 2027. India is on UTC+5:30 throughout, so the mentor is 4 hours 30 minutes ahead of Hamburg in winter and 3 hours 30 minutes ahead in summer. The rows are only examples.' },
        { kind: 'p', mt: true, html: 'International schools set their own calendars. For comparison, the KMK table gives Hamburg\'s state school holidays for 2026/27 as 21 December 2026 to 1 January 2027 at Christmas, 1 to 12 March 2027 in spring and 1 July to 11 August 2027 in summer. Tell your mentor your own term dates and mock exam weeks.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'Five stages to exam-ready computer science',
    lede: 'Our own stages, the same whichever route a Hamburg pupil is on.',
    table: { caption: 'Computer science stages for ages 13 to 19 (ours)', head: ['Stage', 'Usual age', 'By then the pupil can'], rows: [
      ['1. Read and trace', '13 to 14', 'Follow a program by hand and predict its output'],
      ['2. Loops inside loops', '14 to 15', 'Write nested loops and count how often the inner part runs'],
      ['3. Efficiency', '15 to 16', 'Compare two algorithms by the work they do, not by feel'],
      ['4. Objects and data', '16 to 17', 'Design classes and choose a data structure for a task'],
      ['5. Exam form', '16 to 19', 'Answer unseen questions on paper or screen in the board\'s format']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 3 is the StadtRAD project. Pupils who can count an algorithm\'s work answer efficiency questions with reasons rather than guesses.',
      'Reports say what your child can now do without help, with an example.'
    ] },
    right: { h3: 'For pupils', ps: [
      'Guess how many steps your program takes before you run it. Then count them.',
      'When an answer is absurd, check the input first. The bug may be in the data.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for Hamburg pupils',
    lede: 'Live and in English, with the same mentor each week, as a group or one to one.',
    bands: [
      { num: 'I', h3: 'Programming', sub: 'Ages 13 to 18', courses: [
        { code: 'COI / CODE / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The language most computing syllabuses accept, done thoroughly.' },
        { code: 'COI / CODE / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Interactive web pages and small browser games.' },
        { code: 'COI / CODE / 03', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Fast algorithms under time limits, for strong coders.' }
      ] },
      { num: 'II', h3: 'German school and contests', sub: 'Ages 10 to 19', courses: [
        { code: 'COI / DE / 01', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik Companion', blurb: 'Hamburg\'s grades 7 to 10 Informatik, in English.' },
        { code: 'COI / DE / 02', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'German informatics contests', blurb: 'From Biber puzzles to BwInf rounds and BWKI projects, using our own problems.' },
        { code: 'COI / DE / 03', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP Computer Science A', blurb: 'Java and the AP exam, for American-system pupils.' }
      ] },
      { num: 'III', h3: 'Data and maths', sub: 'Ages 13 to 19', courses: [
        { code: 'COI / DATA / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Clean and chart real files in Python.' },
        { code: 'COI / DATA / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Data structures and algorithms', blurb: 'The theory behind efficiency questions.' },
        { code: 'COI / DATA / 03', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB maths AA and AI', blurb: 'The maths that IB computer scientists lean on.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'What a week of live computer science lessons looks like from Hamburg',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Twice a week, an hour each time, you and the mentor work in one shared editor.',
    slots: [
      { time: 'Early evening', l: 'After a full international school day.' },
      { time: 'Weekend', l: 'Saturday afternoon or Sunday lunchtime for longer tasks.' },
      { time: 'One to one', l: 'A slot agreed with the mentor, shifted for mocks.' }
    ],
    cells: [
      { h3: 'Your route only', p: 'IB, Cambridge or Abitur, never a blend.' },
      { h3: 'Paper practice', p: 'Hand-traced code for the paper exams.' },
      { h3: 'Original tasks', p: 'Everything we set is written by us.' },
      { h3: 'Say it first', p: 'Explain the idea, then write the code.' },
      { h3: 'Short updates', p: 'Parents hear progress and next steps.' },
      { h3: 'Group or private', p: 'Up to twenty pupils, or one.' }
    ]
  },

  projectsH2: 'Work by our students',
  projectsLede: 'Our older students build real tools and games. A few are shown below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> page collects more.',
  reviewsLede: 'Reviews from parents and students on Google, unchanged.',

  fees: {
    h2: 'Fees for Hamburg pupils',
    lede: 'Eight live classes a month, one monthly fee. The figure on this page is in euro, based on the European Central Bank reference rate, while the card is charged in US dollars; your bank converts the payment, so the euro amount you finally see may differ a little.',
    free: ['A free first class', 'One programming task at your level', 'No card needed'],
    group: ['Fifteen to twenty pupils on your route', 'One regular mentor', 'Two classes a week', 'Monthly, cancel any month'],
    one: ['You and one mentor', 'Your syllabus and your deadlines', 'Times that fit your school day']
  },

  faq: {
    eyebrow: 'Hamburg pupils and parents ask',
    h2: 'Coding for international school students in Hamburg: questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. All classes are live and taught only in English, by mentors who adjust to your pace and accent. IB and Cambridge exams are written in English anyway, and Hamburg Informatik loses nothing, because Python and Java keywords are English words.' },
      { q: 'Do you help with IB Diploma Computer Science?', a: 'Yes. The course is built on the IB guide first examined in 2027 and walks you through the internal assessment step by step. Exam details are not repeated here, since ibo.org was closed to us; ask your IB coordinator for the official version.' },
      { q: 'Does IB Computer Science count toward German university entry?', a: 'The KMK agreement on the IB Diploma lists Computer Science among the subjects that can be the sixth exam subject, alongside a required natural science from Biology, Chemistry or Physics. We do not give admissions advice; check your subject plan with your school.' },
      { q: 'Is a computer allowed in the Hamburg Abitur in Informatik?', a: 'No. The Informatik-Monitor 2026/27 says the written Hamburg Abitur in Informatik is developed centrally, the same across Hamburg, with no practical parts; only a non-programmable calculator and a spelling dictionary are allowed.' },
      { q: 'Is Informatik compulsory at Hamburg state schools?', a: 'Yes. Since 2025/26 four weekly hours of Informatik are compulsory at Stadtteilschulen and Gymnasien, spread over grades 7 to 10 by each school. A pupil moving from an international school may join classmates who already have that background.' },
      { q: 'Do you teach IGCSE Computer Science?', a: 'Yes. We follow Cambridge 0478 as valid from 2026 to 2028. Both papers last 1 hour 45 minutes and carry 75 marks; the second, on algorithms and programming, accepts answers in pseudocode or in Python, Visual Basic or Java.' },
      { q: 'Which school do your Hamburg students go to?', a: 'We never name schools as sources of students. The school on this page appears only because the AGIS directory lists its qualifications. Neither AGIS nor any school in Hamburg has a link with us.' },
      { q: 'What times are classes from Hamburg?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. A class at 16:35 in Hamburg is 21:05 for the mentor in India in winter.' },
      { q: 'What does it cost, and in what currency?', a: 'A month of eight live classes is one fee. We quote it in euro from the European Central Bank reference rate, take the payment in US dollars, and leave the conversion to your bank, which can shift the final figure a little. Your first class costs nothing.' },
      { q: 'Can you write my coursework for me?', a: 'No. We teach you to plan, build and test it yourself and explain the assessment criteria in plain English. The work you submit stays yours from the first line to the last.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More on computing for pupils in Germany.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Every page for families in Germany.' },
      { href: '/coding-for-international-school-students-germany', label: 'International school students, Germany', p: 'All AGIS schools and routes.' },
      { href: '/ib-computer-science-tutor-germany', label: 'IB Computer Science tutor', p: 'The IB subject plan and German recognition.' },
      { href: '/igcse-computer-science-tutor-germany', label: 'IGCSE Computer Science tutor', p: 'The 0478 papers in detail.' },
      { href: '/abitur-computer-science-in-english', label: 'Abitur computer science', p: 'Oberstufe Informatik, in English.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land', p: 'Compulsory hours in all 16 Länder.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Let us know which route you are on and when your next deadline falls. The mentor gives you one short programming problem, watches how you tackle it, and suggests a course and a format.',
    readFirst: 'To read first, see the <a class="ag-inline-link" href="/courses/ib-diploma-computer-science-course">IB Computer Science course</a>, the <a class="ag-inline-link" href="/courses/igcse-computer-science-0478-course">IGCSE 0478 course</a> or <a class="ag-inline-link" href="/how-we-teach">how we teach</a>.',
    note: 'Every lesson is live online, in English, with a mentor in India. WhatsApp gets the quickest reply.',
    formNote: 'Free, with no card and no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Courses', links: [
        { href: '/courses/ib-diploma-computer-science-course', label: 'IB Computer Science' },
        { href: '/courses/igcse-computer-science-0478-course', label: 'IGCSE Computer Science' },
        { href: '/courses/informatik-abitur-course-java-python', label: 'Informatik Abitur' },
        { href: '/courses/python-complete-masterclass-teens', label: 'Python for teens' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-for-international-school-students-germany', label: 'International schools, Germany' },
        { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Count the work before you trust the answer'
  },

  personalityCss: `
.ag-root.ag-coi .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-coi .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-coi .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-coi .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-coi .ag-code-head b { letter-spacing: 0.015em; }
`,

  dossier: {
    curriculumAuthority: 'AGIS directory (International School of Hamburg), AGIS homepage and Wer wir sind; KMK agreement on recognition of the IB Diploma; Gesellschaft für Informatik, Informatik-Monitor 2026/27, Hamburg page and national comparison; Cambridge International IGCSE Computer Science 0478 syllabus 2026 to 2028; KMK holidays 2026/27; Destatis GV-ISys 31.12.2024. Data: BVM via Transparenzportal Hamburg, StadtRAD-Stationen Hamburg, Datenlizenz Deutschland Namensnennung 2.0.',
    localProject: 'StadtRAD nearest stations: an original Python project on the 358 StadtRAD stations in which a brute-force search makes 127,806 distance checks and reports a station 6,013 km away because its record sits at 0, 0 (Null Island), and a pair-once version halves the work to 63,903 checks and finds the closest pair 82 m apart; plus route-specific tasks. Lesson family: algorithmic cost of nested loops.',
    requiredMentions: ['stadtrad.json', 'Stations: 358 Distance checks: 127806', 'Distance checks: 63903', 'Closest pair: 82 m', 'Null Island', 'no practical parts', 'Cambridge Lower Secondary', 'Count the work before you trust the answer'],
    sources: [
      { claim: 'AGIS listing for the International School of Hamburg.', url: 'https://www.agis-schools.org/school/international-school-of-hamburg' },
      { claim: 'AGIS: IB schools, English, equivalences.', url: 'https://www.agis-schools.org/' },
      { claim: 'KMK IB recognition and the sixth-subject list.', url: 'https://www.kmk.org/fileadmin/veroeffentlichungen_beschluesse/1986/1986_03_10-Vereinbarung-Baccalaureate-Dipl_2023_06_15.pdf' },
      { claim: 'Hamburg Informatik hours, Abitur rules and teacher share.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/hamburg' },
      { claim: 'IGCSE 0478 papers.', url: 'https://www.cambridgeinternational.org/Images/697167-2026-2028-syllabus.pdf' },
      { claim: 'StadtRAD station data and licence.', url: 'https://ckan.govdata.de/dataset/stadtrad-stationen-hamburg5b815' }
    ],
    rejectedClaims: [
      'Naming a school as a source of our students: refused.',
      'That the Hamburg school teaches Computer Science or IGCSE: not claimed; AGIS lists programmes only.',
      'IB exam figures: not given, because ibo.org could not be read.',
      'A reason for the 0, 0 coordinates: not stated in the data, so none given.',
      'Any connection with AGIS, the IB, Cambridge, the BVM or a school: none.'
    ]
  }
};
