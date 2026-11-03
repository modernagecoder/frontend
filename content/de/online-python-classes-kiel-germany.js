'use strict';
// Online Python classes in Kiel (ag- city page, Germany cluster P6 row DE153, tier-2 shape online-python = live online
// explained, Python path). Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief
// docs/superpowers/plans/2026-11-03-de-writer-brief.md. Owner 2026-11-02: classes are live, in English only, with mentors
// who match the learner's pace and accent; euro shown, USD charged.
// Spine: "online" questions answered one by one (what you see, what you hear, what you do), then the Python path, then the
// Kiel fjord ferries, where a total that hardly moves hides a rate that moves a lot, and one round number gives itself away.
// The Land page uses the LfU wind-turbine file; this page uses a different, city-published dataset.
// Sources (school facts read raw and quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md,
// fetched 2 Nov 2026; numbers are fact ids there):
//  - GI Informatik-Monitor 2026/27, Schleswig-Holstein page: "Ab dem Schuljahr 2024/25 ist Informatik an allen Schularten
//    verpflichtendes Unterrichtsfach. Der Gesamtumfang beträgt vier Wochenstunden in den Jahrgangsstufen 7 bis 10." (88);
//    Oberstufe at Gemeinschaftsschule and partly Gymnasium: grade 11 Einführungsphase, 12 and 13 Qualifikationsphase (59).
//    National page: Schleswig-Holstein among four Länder meeting the short-term recommendation of 4 Pflichtstunden (91).
//  - KMK Ferien 2026/2027 (Stand 09.10.2025), Schleswig-Holstein: Herbst 12.10. - 24.10., Weihnachten 21.12. - 06.01.,
//    Ostern 30.03. - 10.04., Sommer 03.07. - 14.08. (282).
//  - BWINF: Bundeswettbewerb Informatik round 1 1 September to 23 November 2026 (146); Jugendwettbewerb round 3 deadline
//    23 November 2026 (143).
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Kiel 252,668 (Landeshauptstadt); Lübeck 216,889; Schleswig-Holstein
//    2,959,517.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Landeshauptstadt Kiel, "Passagiere Schiffsverkehr der Kieler Schlepp- und Fährgesellschaft", kiel.de/opendata,
//    harvested via the Land portal to GovData (https://ckan.govdata.de/dataset/passagiere-schiffsverkehr-der-kieler-schlepp-
//    und-fahrgesellschaft), GovData dataset page licence "Datenlizenz Deutschland – Zero – Version 2.0"; notes "Die Anzahl
//    der Passagiere im Schiffsverkehr der Kieler Schlepp- und Fährgesellschaft als Zeitreihe". File
//    kiel_transport_verkehr_schiffsverkehr_schlepp_und_fahrgesellschaft.csv downloaded 3 November 2026, 3,318 bytes, sha256
//    d07826544f499af2..., 36 rows 1988 to 2023, columns Land;Stadt;Kategorie;Merkmal;Jahr;Anzahl der Linien;Anzahl der
//    Schiffe; Fahrstunden;Fahrgaeste; "k.A." for Fahrstunden 1988 to 1990 and for Fahrgaeste 1999. Raw copy in
//    src-pages/online-python-classes-kiel-germany/.
//    Rows quoted: 1988 2 lines 11 ships 1,739,683; 1998 9 ships 19,067 h 1,010,924; 2007 9 ships 15,639 h 1,400,000;
//    2019 11 ships 20,109 h 1,402,801; 2023 16 ships 17,925 h 1,262,500.
// Our own calculations (scratchpad de/w/T2/run/kie/v1.py, v2.py, python3 -I, Python 3.14.8): v1 riders per sailing hour
//  1991 90, 1998 53, 2019 70, 2023 70; "Years with both figures: 32". v2 "2008 to 2019, lowest: 1399437  highest: 1406574",
//  "Spread as a share of the lowest: 0.51 %", "Years whose rider count ends in 000: [2007]".
// Lesson family: rates, not totals; a suspiciously flat series and a round number are clues about how data was made.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'years = []',
  'with open("kiel_ferries.csv", encoding="utf-8") as f:',
  '    rows = csv.reader(f, delimiter=";")',
  '    next(rows)',
  '    for row in rows:',
  '        year, ships, hours, riders = row[4], row[6], row[7], row[8]',
  '        if hours == "k.A." or riders == "k.A.":',
  '            continue                    # k.A. = keine Angabe, no figure given',
  '        years.append((int(year), int(ships), int(hours), int(riders)))',
  '',
  'for year, ships, hours, riders in years:',
  '    if year in (1991, 1998, 2019, 2023):',
  '        print(year, "riders per sailing hour:", round(riders / hours))',
  'print("Years with both figures:", len(years))'
].join('\n');

const V2 = [
  'flat = [r for y, s, h, r in years if 2008 <= y <= 2019]',
  'print("2008 to 2019, lowest:", min(flat), " highest:", max(flat))',
  'print("Spread as a share of the lowest:", round((max(flat) - min(flat)) / min(flat) * 100, 2), "%")',
  'round_years = [y for y, s, h, r in years if r % 1000 == 0]',
  'print("Years whose rider count ends in 000:", round_years)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Kiel: online Python' },
  slug: 'online-python-classes-kiel-germany',
  code: 'pyk',
  accent: '#651135',
  accentRationale: 'Online Python classes, Kiel: a deep harbour-buoy claret #651135, for the fjord ferries in the project; contrast 10.12 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-schleswig-holstein', name: 'Schleswig-Holstein' }],
  routeLabel: 'Online Python classes in Kiel',
  title: 'Online Python Classes in Kiel: Live Lessons in English',
  description: 'Online Python classes in Kiel for teens and adults, live in English: what a live lesson is like, the Python path, Informatik in Schleswig-Holstein, a ferry project.',
  ogDescription: 'Live online Python in English for Kiel: the questions people ask about online lessons, answered plainly; a path from first script to real data; and a project on 36 years of Kiel fjord ferry passengers where the total barely moves but the rate does.',
  twitterDescription: 'Live Python lessons in English for Kiel, with a project on the city\'s fjord ferry passenger figures since 1988.',
  pageName: 'Online Python Classes in Kiel',
  webPageDescription: 'A guide for teenagers, adults and parents in Kiel to learning Python live online in English, built on Gesellschaft für Informatik, KMK and BWINF sources and an original project on the Landeshauptstadt Kiel\'s open ferry passenger series.',
  courseDescription: 'Live online Python classes in English for Kiel learners from about 13 and adults: typed Python, files and real data, then a project of their own, taught by one regular mentor in a group of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Python in Kiel',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#online', label: 'Online?' },
    { href: '#ferries', label: 'Ferry data' },
    { href: '#school', label: 'School' }
  ],
  eyebrow: 'Kiel &middot; Python &middot; Live online in English',
  h1: 'Online Python classes in Kiel',
  lede: 'If you live in Kiel, the nearest Python teacher who can see your screen is, with us, a video call away. This page answers the honest questions about learning that way, lays out the Python path stage by stage, explains where Informatik sits in Schleswig-Holstein\'s schools, and works through a project on the city\'s own figures for the fjord ferries, where the number everyone would quote turns out to be the least interesting one in the file.',
  secondaryCta: { href: '#ferries', label: 'See the ferry project' },
  wa: 'Hello Modern Age Coders, I live in Kiel and would like to learn Python live online in English. Could I book a free first lesson?',
  heroNote: 'Live lessons since 2020 &middot; 10,000+ students worldwide &middot; a mentor who sees your code as you type',
  spec: [
    ['For', 'Teens from about 13, and adults'],
    ['You learn', 'Python 3, files, real data'],
    ['How', 'Live video with screen sharing'],
    ['Group', '15 to 20, or one to one'],
    ['Mentors', 'In India, teaching in English'],
    ['Try it', 'First lesson free']
  ],
  capsuleQ: 'Quick answer',
  capsule: 'Modern Age Coders teaches online Python classes for Kiel as live lessons on video, in English: a mentor sees your shared screen, follows every line you type and helps the moment you are stuck. Teenagers from about 13 and adults go from a first script to working with real data files and then a project of their own, in a group of 15 to 20 or one to one, with a regular mentor who adapts to your pace and accent.',

  picks: {
    eyebrow: 'Three ways in',
    h2: 'Which Python course suits a learner in Kiel?',
    lede: 'Choose by who you are and what you want at the end: pupils, grown-ups, or anyone aiming at a recognised Python certificate.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'PYK / 01', title: 'Python for Teens', note: 'For pupils from about 13. A steady course from first print() to files, small games and data, with homework that is checked live.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'PYK / 02', title: 'Python Masterclass for adults', note: 'For students, career changers and professionals. Clean scripts, functions, modules and data handling at a working adult\'s pace.' },
      { course: 'pcep-pcap-python-certification-course', code: 'PYK / 03', title: 'PCEP and PCAP preparation', note: 'For learners who like a clear goal. A structured route through the Python Institute\'s entry and associate syllabuses.' }
    ]
  },

  sections: [
    {
      id: 'online',
      eyebrow: 'Online, honestly',
      h2: 'What is a live online Python lesson really like?',
      lede: 'Five questions Kiel learners ask before they book, with straight answers.',
      body: [
        { kind: 'ol', items: [
          '<strong>Will I just watch someone else code?</strong> No. You type, the mentor watches your shared screen. Explanations are short and the keyboard stays with you for most of the hour.',
          '<strong>What if I get stuck halfway through a line?</strong> You say so, or type it in the chat, and the mentor looks at the exact line. That is the whole reason a lesson is live.',
          '<strong>Is a group lesson still personal?</strong> In a group of 15 to 20, the mentor moves between learners\' screens and brings the most useful mistake to everyone. If you want all the attention, one to one is there.',
          '<strong>What do I need at home in Kiel?</strong> Any computer with a real keyboard, a headset or microphone, and internet that does not drop. The software costs nothing, and setting it up is the first job you do together.',
          '<strong>What happens between lessons?</strong> One small task, written in the chat. The next lesson starts by running it together, mistakes included.'
        ] },
        { kind: 'table', mt: true, numCols: [], caption: 'An hour of live Python, roughly how it is spent (our lesson plan)', head: ['Minutes', 'What happens'], rows: [
          ['0 to 10', 'Run last week\'s task together; fix whatever broke'],
          ['10 to 20', 'A new idea, shown on a tiny example'],
          ['20 to 50', 'You write code for a real problem; the mentor follows and questions'],
          ['50 to 60', 'Recap in your own words; the next small task']
        ] },
        { kind: 'source', html: 'Our own lesson plan, adjusted by the mentor to the learner. Every minute is live, with an India-based mentor speaking English; there are no recordings to sit through.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'In English',
      h2: 'Can I learn Python in German with you?',
      lede: 'No. Our classes are only in English. Here is why that works for most Kiel learners.',
      body: [
        { kind: 'three', cells: [
          { h3: 'One language, clearly', p: 'Every lesson is in English, taught by mentors in India. We do not offer German-speaking teachers, and we prefer you hear that before booking.' },
          { h3: 'Adapted to you', p: 'Mentors adjust their speed and words, repeat in a simpler way when asked, and soon know how you speak. Mixing in a German word is fine; you will be given the English one.' },
          { h3: 'Python speaks English', p: 'for, while, if, return, True, False: the language is built from English words, and its error messages are English too. Learning in English removes a layer of translation.' }
        ] },
        { kind: 'p', mt: true, html: 'Kiel is a university and port city, and many learners here already work or study in English. For school pupils, an hour of spoken technical English each week is a bonus on top of the Python.' }
      ]
    },
    {
      id: 'path',
      eyebrow: 'The Python path',
      h2: 'What will I learn, and in what order?',
      lede: 'Four stages. You finish each by building something, not by sitting a test.',
      body: [
        { kind: 'table', numCols: [], caption: 'The Python path (our course plan, two live lessons a week)', head: ['Stage', 'Roughly', 'You learn', 'You build'], rows: [
          ['First scripts', 'Weeks 1 to 5', 'print, variables, input, if and else', 'A small quiz that keeps score'],
          ['Structure', 'Weeks 5 to 12', 'Loops, lists, dictionaries, functions', 'A game or a converter with clean functions'],
          ['Data', 'Weeks 12 to 22', 'Reading CSV files, counting, rates, missing values', 'An answer from a public dataset, like the ferries below'],
          ['Your project', 'From about week 22', 'Choosing a question and testing your own answer', 'A program and a short written explanation']
        ] },
        { kind: 'source', html: 'Week ranges are our planning figures, not guarantees. A learner who already knows some Python starts at the stage agreed in the free first lesson.' },
        { kind: 'p', mt: true, html: 'Two habits run through all four stages. First, you read every error message before asking for help, because it nearly always says which line is wrong. Second, when a program gives an answer, you ask whether it could be wrong. The ferry project trains the second habit.' }
      ]
    },
    {
      id: 'ferries',
      tint: 'tint',
      eyebrow: 'A real Kiel project',
      h2: 'Are Kiel\'s fjord ferries as busy as they used to be?',
      lede: 'The Landeshauptstadt Kiel publishes a yearly series for the ferries of the Schlepp- und Fährgesellschaft Kiel, from 1988, free to reuse under Datenlizenz Deutschland Zero 2.0. Our Data-stage learners use it to see why a rate tells you more than a total.',
      body: [
        { kind: 'two',
          leftH3: 'The file',
          left: [
            'One row per year from 1988 to 2023, with the number of lines, the number of ships, the sailing hours (Fahrstunden) and the passengers (Fahrgaeste). Where there is no figure the file writes "k.A.", short for keine Angabe: no hours for 1988 to 1990, no passengers for 1999.',
            'In 1988 the ferries carried 1,739,683 passengers with 11 ships. In 2023 they carried 1,262,500 with 16 ships.'
          ],
          rightH3: 'The question',
          right: [
            'Fewer passengers with more ships: are the ferries emptier? A total cannot say. What you need is a rate: passengers per sailing hour, which accounts for how much the boats actually ran.',
            'The learner\'s copy is called kiel_ferries.csv. The first program skips the k.A. years and works out the rate for a few years across the decades.'
          ] },
        { kind: 'code', label: 'Version 1: passengers per sailing hour', lang: 'Python', code: V1, note: 'It prints: <code>1991 riders per sailing hour: 90</code>, <code>1998 riders per sailing hour: 53</code>, <code>2019 riders per sailing hour: 70</code>, <code>2023 riders per sailing hour: 70</code> and <code>Years with both figures: 32</code>.' },
        { kind: 'p', mt: true, html: 'In 1991 every sailing hour carried about 90 passengers. By 1998, the lowest passenger year in the file at 1,010,924, it was about 53. Since then it has recovered to about 70 an hour, in 2019 and again in 2023. So the ferries are not emptier than in the late 1990s, even with more ships. A second look at the totals shows something odder.' },
        { kind: 'code', label: 'Version 2: does the series look measured?', lang: 'Python', code: V2, note: 'It prints: <code>2008 to 2019, lowest: 1399437  highest: 1406574</code>, <code>Spread as a share of the lowest: 0.51 %</code> and <code>Years whose rider count ends in 000: [2007]</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3, 4], caption: 'Selected years from the Kiel ferry series, with our rate', head: ['Year', 'Ships', 'Sailing hours', 'Passengers', 'Per sailing hour (ours)'], rows: [
          ['1991', '11', '20,867', '1,868,194', '90'],
          ['1998', '9', '19,067', '1,010,924', '53'],
          ['2007', '9', '15,639', '1,400,000', '90'],
          ['2019', '11', '20,109', '1,402,801', '70'],
          ['2023', '16', '17,925', '1,262,500', '70']
        ] },
        { kind: 'source', html: 'Data: Landeshauptstadt Kiel, Passagiere Schiffsverkehr der Kieler Schlepp- und Fährgesellschaft, via kiel.de/opendata and GovData, licence Datenlizenz Deutschland Zero 2.0, downloaded 3 November 2026. Rates and spreads are our own calculations; years marked k.A. are left out. We are not connected with the city or the ferry company.' },
        { kind: 'p', mt: true, html: 'For twelve years, 2008 to 2019, passengers stay between 1,399,437 and 1,406,574, a spread of half a percent, while sailing hours swing between 17,446 and 20,983. Real counts of a ferry service rarely sit that still while the timetable moves. And 2007 is exactly 1,400,000. A good analyst does not call this wrong; the file does not say how it was made. But they would write the question down: were these years counted, or estimated from tickets or a formula? Asking how numbers were produced is part of reading them.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Run it.</strong> Type Version 1 yourself and add 2010 and 2020 to the years printed.',
          '<strong>Passengers per ship.</strong> Compute it for every year. When was it highest?',
          '<strong>Spot the flat line.</strong> Find any other run of five or more years where passengers change by less than 1 percent.',
          '<strong>Write it up.</strong> In five sentences, answer the page\'s question and say what you cannot know from this file.'
        ] }
      ]
    },
    {
      id: 'school',
      eyebrow: 'School in Schleswig-Holstein',
      h2: 'How much Informatik do pupils in Kiel get at school?',
      lede: 'Since 2024/25 every pupil in Schleswig-Holstein has it, four weekly hours in total across grades 7 to 10.',
      body: [
        { kind: 'two',
          leftH3: 'Sekundarstufe I',
          left: [
            'The Gesellschaft für Informatik quotes the rule in its Informatik-Monitor 2026/27: "Ab dem Schuljahr 2024/25 ist Informatik an allen Schularten verpflichtendes Unterrichtsfach. Der Gesamtumfang beträgt vier Wochenstunden in den Jahrgangsstufen 7 bis 10."',
            'Schleswig-Holstein is one of four Länder the monitor lists as meeting the short-term recommendation of four compulsory hours.'
          ],
          rightH3: 'The Oberstufe',
          right: [
            'At Gemeinschaftsschulen and some Gymnasien, the Oberstufe has grade 11 as Einführungsphase and grades 12 and 13 as Qualifikationsphase; selected Gymnasien keep an eight-year route.',
            'Python practice outside school helps most where the four hours run out: in the step from short exercises to a program of real size.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Schleswig-Holstein school calendar, 2026 to 2027', head: ['Holiday', 'Dates'], rows: [
          ['Autumn', '12 to 24 October 2026'],
          ['Christmas', '21 December 2026 to 6 January 2027'],
          ['Easter', '30 March to 10 April 2027'],
          ['Summer', '3 July to 14 August 2027']
        ] },
        { kind: 'source', html: 'Sources: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Schleswig-Holstein page and national overview; Kultusministerkonferenz, Ferien 2026/2027 (Stand 09.10.2025). Read 2 November 2026. Our lessons add to school Informatik rather than replace it, school marks are decided by the school alone, and we have no link to the Land or the KMK.' },
        { kind: 'p', mt: true, html: 'Pupils looking for a challenge this term have until 23 November 2026 for two national contests: the first round of the Bundeswettbewerb Informatik, open since 1 September 2026, and round 3 of the Jugendwettbewerb Informatik. Entry is usually through the school. We practise with our own problems and never reproduce the organisers\' tasks.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What time are lessons in Kiel?',
      lede: 'India is ahead of Kiel, so an afternoon or early evening here is evening there. These are sample slots only.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample Kiel lesson times next to India time', head: ['Kiel', 'India in winter (to 28 March 2027)', 'India in summer (from 28 March 2027)'], rows: [
          ['17:15', '21:45', '20:45'],
          ['18:00', '22:30', '21:30'],
          ['Sunday 10:30', '15:00', '14:00']
        ] },
        { kind: 'source', html: 'German time follows the Einheitenzeitgesetz: MEZ is UTC+1, MESZ is UTC+2. Clocks went back on 25 October 2026 and go forward on 28 March 2027. India holds UTC+5:30 year round, which makes the gap four and a half hours in the cold months and three and a half in the warm ones.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Checkpoints',
    h2: 'How will I know I am getting better at Python?',
    lede: 'Our checkpoints, shared with the learner and, for pupils, with parents.',
    table: { caption: 'Python checkpoints (ours)', head: ['Checkpoint', 'Usually by', 'You can'], rows: [
      ['Run', 'Week 1', 'Write, save and run a script without help'],
      ['Branch', 'Week 4', 'Make a program choose between paths'],
      ['Repeat', 'Week 8', 'Use loops and lists without copying lines'],
      ['Read data', 'Week 16', 'Open a CSV file and handle a missing value'],
      ['Compare fairly', 'Week 22', 'Turn totals into rates before comparing years']
    ] },
    left: { h3: 'Pupils and parents', ps: [
      'Compare fairly is the ferry project. It is the same skill that makes a school chart or a Facharbeit convincing.',
      'Progress notes describe what was built, never only time spent.'
    ] },
    right: { h3: 'Adults', ps: [
      'Most adults reach Read data in about four months. That is when Python starts to save real time at work.',
      'If a busy month gets in the way, the mentor continues from where you actually are.'
    ] }
  },

  catalogue: {
    eyebrow: 'Beyond the first course',
    h2: 'Nine more courses for Kiel learners',
    lede: 'Taught the same way: live, in English, with a mentor who stays with you.',
    bands: [
      { num: 'I', h3: 'Further Python', sub: 'Teens and adults', courses: [
        { code: 'PYK / PY / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and DSA', blurb: 'Data structures and algorithms for teenagers.' },
        { code: 'PYK / PY / 02', slug: 'python-web-development-django-flask-course', title: 'Web apps in Python', blurb: 'Flask and Django from first page to working app.' },
        { code: 'PYK / PY / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub', blurb: 'Saving and sharing code the professional way.' }
      ] },
      { num: 'II', h3: 'Data', sub: 'Teens and adults', courses: [
        { code: 'PYK / DATA / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Cleaning, counting and charting real data.' },
        { code: 'PYK / DATA / 02', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Spreadsheets, SQL and Python together.' },
        { code: 'PYK / DATA / 03', slug: 'statistics-probability-maths-course', title: 'Statistics', blurb: 'Rates, spreads and fair comparisons.' }
      ] },
      { num: 'III', h3: 'School and beyond', sub: 'Pupils and adults', courses: [
        { code: 'PYK / SCH / 01', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik companion', blurb: 'Support next to school Informatik.' },
        { code: 'PYK / SCH / 02', slug: 'informatik-abitur-course-java-python', title: 'Informatik Abitur in English', blurb: 'For the Oberstufe, beside the school course.' },
        { code: 'PYK / SCH / 03', slug: 'python-ai-automation-masterclass-college', title: 'Python automation', blurb: 'Scripts that do the boring work.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Each week',
    h2: 'How a week of live Python works from Kiel',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school', l: 'Late afternoons, for pupils.' },
      { time: 'Evenings', l: 'Weekday evenings, for adults.' },
      { time: 'Sunday', l: 'A relaxed morning slot.' }
    ],
    cells: [
      { h3: 'Two live lessons', p: 'About an hour each.' },
      { h3: 'One mentor', p: 'The same person each week.' },
      { h3: 'Shared screen', p: 'Your code, seen as you type it.' },
      { h3: 'One task', p: 'Small, clear, checked next time.' },
      { h3: 'Real data', p: 'Files from public sources.' },
      { h3: 'Your choice', p: 'Group of 15 to 20, or one to one.' }
    ]
  },

  projectsH2: 'Projects our students made',
  projectsLede: 'Shown as our students built them. For more, visit the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews of Modern Age Coders, copied exactly.',

  fees: {
    h2: 'Fees for Python lessons in Kiel',
    lede: 'A monthly plan covers eight live lessons. The amount appears in euro here, using the European Central Bank reference rate, but the charge itself is in US dollars, so your bank converts it and the euro figure on your statement can be a little different.',
    free: ['First lesson free', 'Your first script, run live', 'No card'],
    group: ['15 to 20 learners at a similar stage', 'A regular mentor', 'Two lessons a week', 'Monthly, cancel anytime'],
    one: ['Just you and the mentor', 'Your own pace and project', 'Times you agree']
  },

  faq: {
    eyebrow: 'Kiel asks',
    h2: 'Online Python classes in Kiel: questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Lessons are live and only in English, taught by mentors based in India who adapt to your pace and accent. Python is written with English keywords, so the lesson and the code use the same words.' },
      { q: 'Is this a video course?', a: 'No. Every lesson is a live call. The mentor sees your shared screen while you type, answers questions on the spot and checks your homework at the start of the next lesson.' },
      { q: 'Do I need experience?', a: 'None. The first stage starts from print and variables. If you already code a little, the free first lesson finds the right stage for you.' },
      { q: 'When are the lessons?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. In Kiel, pupils often choose late afternoons and adults weekday evenings or Sunday mornings.' },
      { q: 'Does it replace Informatik at school?', a: 'No. In Schleswig-Holstein every pupil has four weekly hours of Informatik in total across grades 7 to 10. We teach alongside school, and the school course is the one that counts for marks and the Abitur.' },
      { q: 'Can adults take part?', a: 'Yes. The Python Masterclass is designed for adults, and one-to-one lessons fit shifts and family life. Many adults use Python to handle spreadsheets and files at work.' },
      { q: 'How large are the groups?', a: '15 to 20 learners at a similar stage. A one-to-one plan gives two private lessons each week at times agreed with you.' },
      { q: 'In which currency do I pay?', a: 'In US dollars, monthly. The fees here are shown in euro at the European Central Bank reference rate; your bank converts the dollar charge, so the euro amount booked may vary slightly. The first lesson is free.' },
      { q: 'What is the ferry project?', a: 'An original project of ours on the Landeshauptstadt Kiel\'s ferry passenger series since 1988. Learners turn totals into passengers per sailing hour, find the low point in 1998, and notice that 2008 to 2019 barely moves and that 2007 is exactly 1,400,000.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Python learners in Schleswig-Holstein.',
    items: [
      { href: '/coding-classes-in-schleswig-holstein', label: 'Coding classes in Schleswig-Holstein', p: 'Our page for the Land.' },
      { href: '/python-course-germany', label: 'Python course in Germany', p: 'The Python route in depth.' },
      { href: '/coding-classes-for-teens-germany', label: 'Coding for teens', p: 'Courses for ages 13 to 18.' },
      { href: '/online-coding-course-for-career-changers-germany', label: 'Career changers', p: 'Python as a new start.' },
      { href: '/jugendwettbewerb-informatik-preparation', label: 'Jugendwettbewerb Informatik', p: 'Preparing for the contest.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our live format in detail.' }
    ]
  },

  start: {
    h2: 'Try a free live Python lesson',
    lede: 'You will write and run a first script while the mentor watches, then talk through which stage and course fit you. Nothing to pay and nothing to install in advance.',
    readFirst: 'Before you book, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> shows the format, and the <a class="ag-inline-link" href="/courses">course pages</a> give each syllabus.',
    note: 'Live online lessons in English with mentors in India. WhatsApp gets the fastest answer from us.',
    formNote: 'Free and without obligation.'
  },

  footer: {
    cols: [
      { h4: 'Python', links: [
        { href: '/python-course-germany', label: 'Python course in Germany' },
        { href: '/python-and-dsa-for-international-students-germany', label: 'Python and DSA' },
        { href: '/coding-classes-for-adults-germany', label: 'Coding for adults' },
        { href: '/learn-coding-in-english-germany', label: 'Coding in English' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-schleswig-holstein', label: 'Schleswig-Holstein' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Turn totals into rates first'
  },

  personalityCss: `
.ag-root.ag-pyk .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-pyk .ag-capsule { border-left-width: 5px; }
.ag-root.ag-pyk .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-pyk .ag-steps li { margin-bottom: 12px; }
.ag-root.ag-pyk .ag-table td { font-variant-numeric: tabular-nums; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Schleswig-Holstein page and national overview); KMK Ferien 2026/2027; Bundesweite Informatikwettbewerbe 2026 dates; Einheitenzeitgesetz; Destatis GV-ISys 31.12.2024; Landeshauptstadt Kiel, ferry passenger series, Datenlizenz Deutschland Zero 2.0.',
    localProject: 'The fjord ferries: an original Python project on Kiel\'s ferry passenger series 1988 to 2023 that turns totals into passengers per sailing hour (90 in 1991, 53 in 1998, 70 in 2019 and 2023), then finds a suspiciously flat stretch (2008 to 2019, spread 0.51 percent) and an exact 1,400,000 in 2007. Lesson family: rates, not totals; how data was made.',
    requiredMentions: ['kiel_ferries.csv', '1998 riders per sailing hour: 53', 'Years with both figures: 32', 'Spread as a share of the lowest: 0.51 %', 'Years whose rider count ends in 000: [2007]', '1991 riders per sailing hour: 90', '2008 to 2019, lowest: 1399437  highest: 1406574', 'Turn totals into rates first'],
    sources: [
      { claim: 'Schleswig-Holstein Informatik rule and Oberstufe structure.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/schleswig-holstein' },
      { claim: 'Four Länder meet the four-hour recommendation.', url: 'https://informatik-monitor.de/' },
      { claim: 'Schleswig-Holstein holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Bundeswettbewerb Informatik round 1 dates.', url: 'https://bwinf.de/bundeswettbewerb/' },
      { claim: 'Kiel ferry passenger series and licence.', url: 'https://ckan.govdata.de/dataset/passagiere-schiffsverkehr-der-kieler-schlepp-und-fahrgesellschaft' }
    ],
    rejectedClaims: [
      'That the 2008 to 2019 figures are estimates: not stated in the data, so raised as a question only.',
      'Any reason for the lower figures from 2020: not stated in the data, so none given.',
      'German-language teaching: we teach in English only, and the page says so.',
      'Any affiliation with the city, the ferry company, the Land or BWINF: none.'
    ]
  }
};
