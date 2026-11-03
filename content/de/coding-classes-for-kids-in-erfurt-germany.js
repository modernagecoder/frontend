'use strict';
// Coding classes for kids in Erfurt (ag- city page, Germany cluster P6 row DE160, tier-2 shape coding-classes-for-kids =
// ages 6 to 12). Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; euro shown,
// USD charged.
// Spine: Thuringia's new school subject Medienbildung und Informatik (MBI) starts in grade 5 and is still arriving one grade
// a year, so an Erfurt child of 6 to 10 meets no Informatik at school yet. The years before grade 5 are where we help. The
// project asks a child's question, "which was the snowiest winter in Erfurt?", and finds that a calendar year is the wrong
// box for a winter.
// Sources (copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/coding-classes-for-kids-in-erfurt-germany/):
//  - KMK Primarbereich (kmk-primar): Grundschule "von der ersten bis zur vierten" Jahrgangsstufe outside Berlin and
//    Brandenburg (fact 1); 2024 "Eckpunktepapier zur Verankerung von Medienbildung und informatischer Bildung in der
//    Grundschule" (fact 4).
//  - GI Informatik-Monitor 2026/27, Thüringen page (infmon-thueringen/592b113d.txt): "Im Schuljahr 2024/25 wurde das Fach
//    „Medienbildung und Informatik" (MBI) mit jeweils zwei Wochenstunden in den Doppeljahrgangsstufen 5/6 und 7/8 sowie jeweils
//    eine Unterrichtswochenstunde in den Klassenstufen 9 und 10 an allen allgemeinbildenden Schulen ... eingeführt. Die
//    Umsetzung erfolgt aktuell in den Jahrgangsstufen 5, 6 und 7 - sie erfolgt schrittweise aufwachsend bis zur
//    Jahrgangsstufe 10 im Schuljahr 2029/30."; Gymnasium Wahlpflichtfach Informatik grades 9 and 10 up to six hours in total.
//    National page: Thüringen among three Länder meeting the SWK medium-term recommendation of 6 compulsory hours (fact 90).
//  - KMK Ferien 2026/2027 (Stand 09.10.2025): "Thüringen (2) 12.10. - 24.10. 23.12. - 02.01. 01.02. - 06.02. 22.03. - 03.04.
//    07.05. 10.07. - 20.08." (fact 283).
//  - BWINF: Informatik-Biber 2026 9 to 20 November 2026; primary pupils 9 tasks in 30 minutes (facts 132, 133).
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Erfurt 218,793 (Land capital); Thüringen 2,100,277; Jena 109,725.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Deutscher Wetterdienst, Climate Data Center, daily climate data (KL) station 01270, named Erfurt-Bindersleben until
//    20 March 2011 and Erfurt-Weimar since (Metadaten_Stationsname), 316.61 m, 50.9827 N, 10.9613 E. Files
//    tageswerte_KL_01270_19510101_20251231_hist.zip and tageswerte_KL_01270_akt.zip downloaded 3 November 2026 from
//    opendata.dwd.de; licence per opendata.dwd.de Terms_of_use.txt: "The Creative Commons BY 4.0 - Licence "CC BY 4.0"
//    apply." Column SHK_TAG "Schneehoehe Tageswert" in cm. The city portal erfurt.de did not answer (connection timed out on
//    3 November 2026), so the DWD station inside the city is used; no other page uses station 01270.
//    Our extract erfurt_schnee.csv: 11,293 days from 1991-07-01 to 2022-05-31 (31 complete winters), no -999 values,
//    158,304 bytes, sha256 56771a57...4a49db5c. Stopped at May 2022 because SHK_TAG is -999 for every day from June 2022 to
//    August 2023 and for 19 days of September 2023 (our count).
// Our own calculations (scratchpad de/w/T3/erfurt/run/v1.py, v12.py, feb.py, python3 -I, Python 3.14.8; a snow day is ours:
// at least 1 cm of snow at the morning reading):
//  v1: "Years counted: 32"; "Snowiest year: 2010 94 days"; "2010: 94  2011: 20".
//  v2: "Winters with snow: 31"; "Snowiest winter: 2012/13 84 days"; "2009/10: 69  2010/11: 55".
//  All winters: 1995/96 67, 2005/06 76, 2006/07 6, 2012/13 84, 2018/19 8, 2019/20 3, 2021/22 12. Calendar years 1991 and 2022
//  are half years in the file (3 and 8 days). feb.py: "Februaries: 31  with snow on 1 to 6 Feb: 19".
// Lesson family: a winter crosses New Year; group each day by the season it belongs to, not by its calendar year.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'snow_days = {}',
  'with open("erfurt_schnee.csv", encoding="utf-8") as f:',
  '    for day in csv.DictReader(f):',
  '        year = day["datum"][:4]',
  '        if int(day["schnee_cm"]) >= 1:',
  '            snow_days[year] = snow_days.get(year, 0) + 1',
  '',
  'top = max(snow_days, key=snow_days.get)',
  'print("Years counted:", len(snow_days))',
  'print("Snowiest year:", top, snow_days[top], "days")',
  'print("2010:", snow_days["2010"], " 2011:", snow_days["2011"])'
].join('\n');

const V2 = [
  'def winter(date):',
  '    year, month = int(date[:4]), int(date[5:7])',
  '    if month >= 7:',
  '        return str(year) + "/" + str(year + 1)[2:]',
  '    return str(year - 1) + "/" + str(year)[2:]',
  '',
  'by_winter = {}',
  'with open("erfurt_schnee.csv", encoding="utf-8") as f:',
  '    for day in csv.DictReader(f):',
  '        if int(day["schnee_cm"]) >= 1:',
  '            w = winter(day["datum"])',
  '            by_winter[w] = by_winter.get(w, 0) + 1',
  '',
  'top = max(by_winter, key=by_winter.get)',
  'print("Winters with snow:", len(by_winter))',
  'print("Snowiest winter:", top, by_winter[top], "days")',
  'print("2009/10:", by_winter["2009/10"], " 2010/11:", by_winter["2010/11"])'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Erfurt: coding for kids' },
  slug: 'coding-classes-for-kids-in-erfurt-germany',
  code: 'cer',
  accent: '#76640B',
  accentRationale: 'Coding for kids in Erfurt: a dark mustard #76640B, the colour of the sandstone of the Domstufen below the cathedral; contrast 4.74 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-thuringia', name: 'Thuringia' }],
  routeLabel: 'Coding classes for kids in Erfurt',
  title: 'Coding Classes for Kids in Erfurt: Live Online, in English',
  description: 'Coding classes for kids in Erfurt aged 6 to 12: live online in English, when Thuringia\'s new MBI subject starts, holidays, and a snowy-winters data project.',
  ogDescription: 'Live online coding for Erfurt children aged 6 to 12, in English at the child\'s pace: why school Informatik waits until grade 5 in Thuringia, how the new MBI subject is arriving, and a project on 31 winters of Erfurt snow.',
  twitterDescription: 'Coding for Erfurt children, live in English: Thuringia\'s MBI subject and a 31-winter snow project.',
  pageName: 'Coding Classes for Kids in Erfurt',
  webPageDescription: 'A guide for Erfurt parents of children aged 6 to 12 to live coding classes in English, built from the KMK, the GI Informatik-Monitor and Destatis, with an original snow-days project on Deutscher Wetterdienst data from the Erfurt-Weimar station.',
  courseDescription: 'Live online coding classes in English for Erfurt children aged 6 to 12: Scratch first, then typed Python and small projects with real data, in a group of fifteen to twenty or one to one, with one regular mentor.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }, { name: 'Thuringia', href: '/coding-classes-in-thuringia' }],
  crumbLabel: 'Kids in Erfurt',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#mbi', label: 'School' },
    { href: '#project', label: 'Snow project' },
    { href: '#ages', label: 'By age' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Erfurt &middot; Coding for children &middot; Ages 6 to 12',
  h1: 'Coding classes for kids in Erfurt',
  lede: 'Thuringia is building one of the most generous school Informatik plans in Germany, but it starts in grade 5. For an Erfurt child in Grundschule, coding is something to find outside school, and that is where we come in: live classes in English, a mentor who learns how your child thinks, and real projects. On this page, one of them asks a question every Erfurt child has an opinion on: which winter had the most snow?',
  secondaryCta: { href: '#project', label: 'See the snow project' },
  wa: 'Hello Modern Age Coders, my child lives in Erfurt and would like to learn coding in English. Could we book a free first class?',
  heroNote: 'Teaching live since 2020 &middot; 10,000+ students worldwide &middot; rated 4.9 by about 547 Google reviewers',
  spec: [
    ['Ages', '6 to 12, in age groups'],
    ['Begins with', 'Scratch blocks, then Python'],
    ['Class size', 'Fifteen to twenty, or one to one'],
    ['Erfurt times', 'After school and weekend mornings'],
    ['Mentors', 'Based in India, teaching in English'],
    ['First class', 'Free, nothing to pay']
  ],
  capsuleQ: 'Quick answer',
  capsule: 'Modern Age Coders teaches Erfurt children aged 6 to 12 to code in live online classes held in English. The youngest make games and stories in Scratch; from about 9 they type Python and explore real data. The same mentor stays with your child, matches their pace and accent, and teaches either a batch of fifteen to twenty children or your child alone, after school or on weekend mornings.',

  picks: {
    eyebrow: 'Good first courses',
    h2: 'Which coding course suits an Erfurt child aged 6 to 12?',
    lede: 'A long course for steady progress from six, a puzzle course for thinking before typing, and a Python course for children ready to type.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'CER / 01', title: 'Coding for Kids', note: 'For 6 to 12 year olds, grouped by age, over 10 to 12 months. Scratch stories and games, then apps and first ideas about AI.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'CER / 02', title: 'Problem Solving for Kids', note: 'For 7 to 12 year olds, 6 to 8 months. Logic puzzles and step-by-step plans, the thinking that comes before any code.' },
      { course: 'python-ai-kids-masterclass', code: 'CER / 03', title: 'Python and AI for Kids', note: 'For 9 to 12 year olds, 8 to 10 months. Real typed Python, drawings and games, then files of real data like the Erfurt snow record below.' }
    ]
  },

  sections: [
    {
      id: 'mbi',
      eyebrow: 'Thuringian schools',
      h2: 'When does an Erfurt child first learn Informatik at school?',
      lede: 'In grade 5, in a new subject called Medienbildung und Informatik (MBI). It is still arriving, one grade a year.',
      body: [
        { kind: 'two',
          leftH3: 'Four years of Grundschule first',
          left: [
            'Everywhere except Berlin and Brandenburg, the KMK describes Grundschule as grades 1 to 4. So an Erfurt child attends Grundschule between roughly six and ten, and Thuringia\'s timetable for those years has no Informatik subject.',
            'The KMK published a key-points paper in 2024 on bringing media education and informatics into primary school, but for now a child of 6 to 9 who wants to make a game has to find that outside the classroom.'
          ],
          rightH3: 'MBI from grade 5',
          right: [
            'The Gesellschaft für Informatik reports that Thuringia introduced MBI in 2024/25 at all general schools: two weekly hours in grades 5 and 6, two in grades 7 and 8, and one hour each in grades 9 and 10. In 2026/27 it is taught in grades 5, 6 and 7, and it grows by one grade a year until it reaches grade 10 in 2029/30.',
            'With that plan, the GI counts Thuringia among only three Länder that meet the medium-term recommendation of six compulsory hours.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Where an Erfurt child meets Informatik at school, by grade in 2026/27', head: ['Grade in 2026/27', 'Typical age', 'School Informatik this year'], rows: [
          ['1 to 4', '6 to 10', 'None as a subject'],
          ['5 and 6', '10 to 12', 'MBI, two weekly hours across the two years'],
          ['7', '12 to 13', 'MBI, part of the two weekly hours across grades 7 and 8'],
          ['8 to 10', '13 to 16', 'MBI still arriving: grade 10 is reached in 2029/30'],
          ['9 and 10, Gymnasium', '14 to 16', 'Informatik elective, up to six weekly hours in total']
        ] },
        { kind: 'source', html: 'Built from the KMK page on the primary stage and the Thuringia entry of the GI Informatik-Monitor 2026/27, both read on 2 November 2026. Ages are typical, not rules.' },
        { kind: 'p', mt: true, html: 'Put simply, a six year old in Erfurt today will wait four school years for a first Informatik lesson, and then have about one hour of it a week. A child who has spent some of those four years building Scratch games arrives in grade 5 already comfortable with sequences, loops and debugging, which is exactly what MBI begins with. There is more about the whole Land, including the Abitur, on our <a class="ag-inline-link" href="/coding-classes-in-thuringia">Thuringia page</a>.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'In English',
      h2: 'Will my child understand a coding class in English?',
      lede: 'Almost always, because a coding class shows far more than it says. And the mentor adapts to your child, not the other way round.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Only English, clearly', p: 'Lessons happen live, in English, with no German-speaking teachers on our side. For a child at an Erfurt school, an hour of coding in English twice a week is also an hour of English practice with a purpose.' },
          { h3: 'Slow and patient', p: 'Mentors use short sentences, repeat the key word, and wait for an answer. A seven year old who says "the cat goes there, nach links" is understood, and gently hears "left".' },
          { h3: 'The screen does the work', p: 'Blocks are dragged, sprites move, numbers change. Most of a lesson is seeing and trying. The English a young child needs is small, and it grows class by class.' }
        ] },
        { kind: 'p', mt: true, html: 'The mentors work from India over a live video link. Because your child keeps the same one, it takes only a few weeks before the mentor knows whether a hard puzzle excites or worries them, and whether they like to start from a blank screen or from a program that already runs.' }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A real Erfurt project',
      h2: 'Which was the snowiest winter in Erfurt?',
      lede: 'Children love this question, and it hides a small trap. The answer depends on how you put the days into boxes.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The Deutscher Wetterdienst (DWD) publishes daily weather records for its station in Erfurt, called Erfurt-Bindersleben until 2011 and Erfurt-Weimar since, under the CC BY 4.0 licence, which allows any reuse with credit. Each day has a snow depth in centimetres, measured in the morning. We downloaded the files on 3 November 2026.',
            'We made a small file for children, erfurt_schnee.csv, with two columns, the date and the snow depth, for every day from July 1991 to May 2022: 31 complete winters. We stopped there because the station\'s snow column is empty from June 2022 to the autumn of 2023, and a winter with no record cannot be compared.'
          ],
          rightH3: 'Our rule',
          right: [
            'We call a day a snow day if there was at least 1 cm of snow on the ground at the morning reading. That rule is ours, and children are encouraged to argue about it: should a light dusting count?',
            'The first program counts snow days for each year, the way a calendar does, and picks the year with the most.'
          ] },
        { kind: 'code', label: 'Version 1: count snow days per year', lang: 'Python', code: V1, note: 'It prints: <code>Years counted: 32</code>, <code>Snowiest year: 2010 94 days</code> and <code>2010: 94  2011: 20</code>.' },
        { kind: 'p', mt: true, html: 'So 2010 wins with 94 snow days. But stop and ask a child: is 2010 a winter? It is not. January and February 2010 belong to one winter, and December 2010 to the next one. The calendar year cuts every winter in half at New Year and glues the halves of two different winters together. Even the number of "years" is odd: 32, because the file starts in July 1991 and ends in May 2022, so the first and last years are only halves.' },
        { kind: 'p', html: 'A winter needs its own box. In Version 2, a small function gives every date the name of its winter: any day from July onwards belongs to the winter that starts that year, and any day before July belongs to the winter that started the year before. So 15 December 2010 and 15 January 2011 both land in the box called 2010/11.' },
        { kind: 'code', label: 'Version 2: add below Version 1, count by winter', lang: 'Python', code: V2, note: 'The three new lines it prints: <code>Winters with snow: 31</code>, <code>Snowiest winter: 2012/13 84 days</code> and <code>2009/10: 69  2010/11: 55</code>.' },
        { kind: 'p', mt: true, html: 'The real snowiest winter in our file is 2012/13, with 84 snow days. The famous 94 of 2010 was never one winter: it was the end of 2009/10, which had 69 snow days in all, and the start of 2010/11, which had 55. Same data, same rule, a different answer, because the boxes were different.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Snow days in some Erfurt winters, July to June (our count, at least 1 cm in the morning)', head: ['Winter', 'Snow days'], rows: [
          ['1995/96', '67'],
          ['2005/06', '76'],
          ['2006/07', '6'],
          ['2012/13', '84'],
          ['2019/20', '3'],
          ['2021/22', '12']
        ] },
        { kind: 'source', html: 'Data: Deutscher Wetterdienst, Climate Data Center, daily climate data, station 01270 Erfurt-Weimar, column SHK_TAG (snow depth), licence CC BY 4.0, downloaded 3 November 2026. Our extract runs from 1 July 1991 to 31 May 2022. The snow-day rule, the counts and the code are ours. We are not connected with the DWD.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8, no screen.</strong> Draw a long strip of paper as a calendar from July to June. Colour the snowy days. Now cut it at New Year. Which winter got cut?',
          '<strong>Ages 8 to 10, Scratch.</strong> Make two lists, one per winter, and a sprite that adds a snowflake to the right list for each date you give it. Test it with 31 December and 1 January.',
          '<strong>Ages 10 to 12, typed code.</strong> Start with Version 1, then write the winter() function yourself before reading ours. Check it on 30 June and 1 July.',
          '<strong>Going further.</strong> Thuringia\'s Winterferien in 2027 are 1 to 6 February. In our file, 19 of the 31 Februaries had snow on at least one of those six days. Write the program that finds this, then talk about why a count of past winters is not a forecast for 2027.'
        ] }
      ]
    },
    {
      id: 'ages',
      eyebrow: 'By age',
      h2: 'What does a child learn in our classes at 6, at 9 and at 12?',
      lede: 'Age is a starting point, not a rule. The mentor places each child after the free first class.',
      body: [
        { kind: 'table', numCols: [], caption: 'What children typically do in our classes (ours)', head: ['Age', 'Tool', 'A typical project', 'The thinking behind it'], rows: [
          ['6 to 7', 'Scratch Jr ideas in Scratch', 'A sprite that tells a short story', 'Steps happen in order'],
          ['7 to 9', 'Scratch', 'A catch-the-snowflake game with a score', 'Loops, events and keeping count'],
          ['9 to 10', 'Python', 'A turtle drawing of a snowflake', 'Repeating a shape and turning'],
          ['10 to 11', 'Python', 'A quiz that remembers answers in a list', 'Lists, conditions and testing'],
          ['11 to 12', 'Python', 'The Erfurt snow project', 'Reading a file and choosing the right boxes']
        ] },
        { kind: 'source', html: 'Our own course outline for ages 6 to 12. Children who start at 11 or 12 move faster through the early rows.' },
        { kind: 'p', mt: true, html: 'Parents often ask whether a six year old is too young. Usually not, if the class is short, playful and in small steps; the free first class shows quickly whether your child enjoys it. What a six year old cannot yet do is type long code, which is why we wait for Python until reading and typing feel easy, normally around 9.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What times do Erfurt children have classes?',
      lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example Erfurt times and the mentor\'s time', head: ['Erfurt time', 'In India until 28 March 2027', 'In India from 28 March 2027'], rows: [
          ['14:45', '19:15', '18:15'],
          ['15:15', '19:45', '18:45'],
          ['Saturday 09:00', '13:30', '12:30'],
          ['Sunday 10:45', '15:15', '14:15']
        ] },
        { kind: 'source', html: 'Under the Einheitenzeitgesetz, Germany uses MEZ (UTC+1) in winter and MESZ (UTC+2) in summer; the clocks went back on 25 October 2026 and go forward on 28 March 2027. India uses UTC+5:30 the whole year, which puts it four and a half hours ahead of Erfurt from late October to late March and three and a half hours ahead for the rest of the year. The times are examples only.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Thuringia\'s school holidays in 2026/27 (KMK)', head: ['Holidays', 'Dates'], rows: [
          ['Herbstferien', '12 to 24 October 2026'],
          ['Weihnachtsferien', '23 December 2026 to 2 January 2027'],
          ['Winterferien', '1 to 6 February 2027'],
          ['Osterferien', '22 March to 3 April 2027'],
          ['After Ascension Day', '7 May 2027'],
          ['Sommerferien', '10 July to 20 August 2027']
        ] },
        { kind: 'source', html: 'From the Kultusministerkonferenz overview of school holidays 2026/2027, dated 9 October 2025, Thüringen line.' },
        { kind: 'p', mt: true, html: 'Holidays do not stop classes, though families can pause for a trip. Erfurt is Thuringia\'s capital, with 218,793 people at the end of 2024 according to Destatis, in a Land of 2,100,277. Children from Weimar, Arnstadt or Jena (109,725 people) join the same groups, and because all three are in Thuringia they share Erfurt\'s holidays.' },
        { kind: 'p', html: 'This month there is also a free school contest to watch for: the Informatik-Biber runs from 9 to 20 November 2026, and primary pupils in grades 3 and 4 solve nine puzzles in 30 minutes. Entry goes through schools, so a quick word with the class teacher tells you whether your child can join in.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'How will I see my child making progress?',
    lede: 'Five of our milestones. Each is something your child can show you, not a grade.',
    table: { caption: 'Milestones for ages 6 to 12 (ours)', head: ['Milestone', 'Your child can'], rows: [
      ['Storyteller', 'Make a sprite walk, talk and change costume in order'],
      ['Game maker', 'Build a Scratch game with a score and a way to win'],
      ['Typist', 'Write and fix a short Python program alone'],
      ['Collector', 'Store values in a list and find the largest'],
      ['Data detective', 'Read a real file and explain why a first answer was wrong']
    ] },
    left: { h3: 'For parents', ps: [
      'The data detective milestone is the one the snow project builds. Children who reach it start asking "how did they count that?" about every number they read.',
      'Short notes after every few classes tell you what was built and what comes next.'
    ] },
    right: { h3: 'For children', ps: [
      'Before you trust a winner, check the boxes you sorted things into.',
      'If two answers disagree, that is not a mistake yet. It is a question.'
    ] }
  },

  catalogue: {
    eyebrow: 'More for children',
    h2: 'Nine more courses for Erfurt children',
    lede: 'The same format for each: live lessons in English and one mentor who stays, as a batch or one-to-one.',
    bands: [
      { num: 'I', h3: 'First steps', sub: 'Ages 6 to 15', courses: [
        { code: 'CER / START / 01', slug: 'scratch-programming-complete-course', title: 'Scratch for kids', blurb: 'Three to four months from zero to finished games, 6 to 12.' },
        { code: 'CER / START / 02', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'How AI learns and errs, without chatbot accounts, 8 to 14.' },
        { code: 'CER / START / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Python as a maths playground, 10 to 15.' }
      ] },
      { num: 'II', h3: 'Games', sub: 'Ages 7 to 17', courses: [
        { code: 'CER / GAME / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'From Minecraft blocks towards typed code, 7 to 12.' },
        { code: 'CER / GAME / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox coding', blurb: 'Building and scripting Roblox worlds, 8 to 14.' },
        { code: 'CER / GAME / 03', slug: 'godot-game-development-course-for-kids-and-teens', title: 'Godot games', blurb: 'A real game engine and text code, 10 to 17.' }
      ] },
      { num: 'III', h3: 'Making and contests', sub: 'Ages 8 to 19', courses: [
        { code: 'CER / MAKE / 01', slug: 'block-coding-app-development-masterclass', title: 'App making', blurb: 'Phone apps assembled from blocks, 8 to 12.' },
        { code: 'CER / MAKE / 02', slug: 'kids-ai-web-development-course', title: 'Websites for kids', blurb: 'HTML, CSS and a first site to share, 9 to 12.' },
        { code: 'CER / MAKE / 03', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'Informatics contests', blurb: 'From Biber puzzles upwards, 9 to 19.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes work',
    h2: 'What is a live class like for a young child?',
    lede: 'Two live hours a week with the same mentor, broken into short, active pieces. The child builds; the mentor guides.',
    slots: [
      { time: 'After school', l: 'Erfurt afternoons from about a quarter to three.' },
      { time: 'Weekend mornings', l: 'Saturday and Sunday, when younger children are fresh.' },
      { time: 'One to one', l: 'Arranged with the mentor around your family\'s week.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'A familiar face every week.' },
      { h3: 'Simple English', p: 'Short sentences and plenty of pointing.' },
      { h3: 'Hands on', p: 'Your child drives the mouse and keyboard.' },
      { h3: 'Age groups', p: 'Six year olds learn with six year olds.' },
      { h3: 'Parent notes', p: 'What was built and what is next.' },
      { h3: 'Batch or solo', p: 'Join a batch, or learn with the mentor alone.' }
    ]
  },

  projectsH2: 'Projects by our older students',
  projectsLede: 'Here is where the early Scratch games can lead. These projects come from older students, and the <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Google reviews by parents and students, in their own words.',

  fees: {
    h2: 'What do coding classes cost for Erfurt families?',
    lede: 'Payment is monthly for eight live classes. On this page the fee appears in euro at the European Central Bank reference rate, but the money is collected in US dollars, which your bank converts, so the debit can be a few cents or euros different.',
    free: ['A free first class', 'A puzzle and a first Scratch project', 'No card asked for'],
    group: ['Fifteen to twenty children of a similar age', 'A regular mentor', 'Two classes each week', 'Monthly, cancel when you wish'],
    one: ['Your child with their own mentor', 'Projects chosen for your child', 'Times your family picks']
  },

  faq: {
    eyebrow: 'Erfurt parents ask',
    h2: 'Coding classes for kids in Erfurt: questions from parents',
    items: [
      { q: 'Are the classes taught in German?', a: 'No. We teach only in English. Mentors in India keep their sentences short, repeat key words and get used to how your child speaks, and most of each lesson is shown on screen, so a child still learning English keeps up.' },
      { q: 'At what age can my child start?', a: 'At 6. Children from 6 to 8 start with Scratch blocks, where nothing has to be typed. From about 9, when typing is comfortable, they move to Python. The free first class shows where your child should begin.' },
      { q: 'When does Informatik start at Erfurt schools?', a: 'In grade 5. Thuringia introduced the subject Medienbildung und Informatik in 2024/25 with two weekly hours in grades 5 and 6. It is being added one grade a year and reaches grade 10 in 2029/30, according to the Gesellschaft für Informatik.' },
      { q: 'Is there any coding in Grundschule in Thuringia?', a: 'Not as a subject. Grundschule covers grades 1 to 4 and has no Informatik subject on the timetable. Children who want to code before grade 5 learn outside school.' },
      { q: 'When are classes in Erfurt time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Erfurt children usually choose mid-afternoons or Saturday and Sunday mornings.' },
      { q: 'What is the snow project?', a: 'An original lesson of ours on Deutscher Wetterdienst records from the Erfurt-Weimar station. Children count snow days per year, then per winter, and discover that 2010, the top year, was really parts of two different winters.' },
      { q: 'Will my child use ChatGPT?', a: 'No. OpenAI requires users to be at least 13 and to have a parent\'s permission under 18. Children in our classes learn how AI works by building small programs themselves, not by chatting with adult tools.' },
      { q: 'Where are the teachers?', a: 'In India, teaching live over video. That is why afternoon classes in Erfurt suit them: 15:15 in Erfurt is 19:45 in India during the German winter. Your child keeps the same mentor every week.' },
      { q: 'How many children are in a group?', a: 'A batch has fifteen to twenty children of about the same age. Families who prefer private lessons choose one-to-one: two classes a week with the mentor, at times agreed with you.' },
      { q: 'How are fees paid?', a: 'Monthly. The fee is shown in euro at the European Central Bank reference rate and charged in US dollars, which your bank converts; expect a small difference on the bank statement. The first class costs nothing and needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Also useful',
    h2: 'Related pages',
    lede: 'More for Erfurt families and for children across Germany.',
    items: [
      { href: '/coding-classes-in-thuringia', label: 'Coding classes in Thuringia', p: 'The Land\'s school rules and our classes.' },
      { href: '/coding-classes-for-kids-germany', label: 'Coding classes for kids in Germany', p: 'Our guide for children across Germany.' },
      { href: '/scratch-classes-for-kids-germany', label: 'Scratch classes for kids', p: 'Block coding, the usual first step.' },
      { href: '/informatik-biber-practice-in-english', label: 'Informatik-Biber practice', p: 'Our own puzzles in the Biber style.' },
      { href: '/ai-course-for-kids-germany', label: 'AI course for kids', p: 'How children learn about AI safely.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our live classes, explained.' }
    ]
  },

  start: {
    h2: 'Book a free first class for your child',
    lede: 'In the free class your child solves a puzzle and builds something small in Scratch. From that hour the mentor can tell which course and which age group will suit, and how much English support to give.',
    readFirst: 'If you would like to read first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a class and <a class="ag-inline-link" href="/courses">our course list</a> has every syllabus.',
    note: 'Lessons are given live online in English only by mentors in India. On WhatsApp you reach us fastest, in English.',
    formNote: 'No cost, no card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'For children', links: [
        { href: '/scratch-classes-for-kids-germany', label: 'Scratch for kids' },
        { href: '/python-classes-for-kids-germany', label: 'Python for kids' },
        { href: '/ai-course-for-kids-germany', label: 'AI for kids' },
        { href: '/informatik-biber-practice-in-english', label: 'Biber practice' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-thuringia', label: 'Thuringia' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'A winter does not stop at New Year'
  },

  personalityCss: `
.ag-root.ag-cer .ag-hero h1 { letter-spacing: -0.008em; }
.ag-root.ag-cer .ag-capsule { border-left-width: 5px; border-radius: 3px; }
.ag-root.ag-cer .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-cer .ag-table caption { text-align: left; }
.ag-root.ag-cer .ag-band-head h3 { letter-spacing: 0.005em; }
`,

  dossier: {
    curriculumAuthority: 'KMK Primarbereich; Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Thüringen page and national overview); KMK Ferienregelung 2026/2027; BWINF Informatik-Biber 2026; Destatis GV-ISys 31.12.2024; Einheitenzeitgesetz; Deutscher Wetterdienst CDC daily climate data station 01270, CC BY 4.0.',
    localProject: 'Erfurt snow winters: an original Python project on DWD snow depths at Erfurt-Weimar, 1 July 1991 to 31 May 2022. Counting by calendar year crowns 2010 (94 snow days), which is parts of two winters; counting by winter finds 2012/13 (84), with 2009/10 at 69 and 2010/11 at 55. Lesson family: a winter crosses New Year.',
    requiredMentions: ['erfurt_schnee.csv', 'Snowiest year: 2010 94 days', 'Snowiest winter: 2012/13 84 days', '2009/10: 69  2010/11: 55', 'Erfurt-Bindersleben', 'Medienbildung und Informatik', 'grade 10 in 2029/30', 'A winter does not stop at New Year'],
    sources: [
      { claim: 'Grundschule grades 1 to 4; 2024 key-points paper.', url: 'https://www.kmk.org/themen/allgemeinbildende-schulen/bildungswege-und-abschluesse/primarbereich.html' },
      { claim: 'MBI in Thuringia: hours, start 2024/25, grade 10 by 2029/30.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/thueringen' },
      { claim: 'Thuringia meets six compulsory hours.', url: 'https://informatik-monitor.de/' },
      { claim: 'Thuringia school holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'DWD daily climate data, station 01270.', url: 'https://opendata.dwd.de/climate_environment/CDC/observations_germany/climate/daily/kl/historical/' },
      { claim: 'DWD open data licence CC BY 4.0.', url: 'https://opendata.dwd.de/climate_environment/CDC/Terms_of_use.txt' }
    ],
    rejectedClaims: [
      'Any reason for the gap in the snow record from June 2022: not stated in the files, so none given.',
      'A forecast of snow in the 2027 Winterferien: past counts are not a prediction, and the page says so.',
      'Any connection with the DWD, the city of Erfurt, BWINF or a school: none.',
      'German-language teaching: we teach in English only, and the page says so.'
    ]
  }
};
