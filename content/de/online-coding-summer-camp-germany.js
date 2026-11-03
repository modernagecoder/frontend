'use strict';
// Online coding summer camp in Germany (ag- English door, Germany cluster P2 row DE039), written 2026-11-03.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD. No camp fee is typed or rendered: the page sells the normal monthly classes over the
// holiday through the template's fee block. No session counts or batch sizes beyond the brand facts.
// Spine: sixteen Länder, ten different summer holidays; plan camp weeks for your own Land. Different project from the
// hub (which finds the days when all sixteen Länder are on holiday at once).
// Sources (read raw; copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/online-coding-summer-camp-germany/):
//  - KMK Sommerferienregelung 2025 to 2030 (kmk-sommer/1805b7ea.txt), 2027 column, first and last holiday day:
//    "Baden-Württemberg ... 29.07. - 11.09.", "Bayern ... 02.08. - 13.09.", "Berlin ... 01.07. - 14.08.", "Brandenburg ...
//    01.07. - 14.08.", "Bremen ... 08.07. - 18.08.", "Hamburg ... 01.07. - 11.08.", "Hessen ... 28.06. - 06.08.",
//    "Mecklenburg-Vorpommern ... 05.07. - 14.08.", "Niedersachsen ... 08.07. - 18.08.", "Nordrhein-Westfalen ...
//    19.07. - 31.08.", "Rheinland-Pfalz ... 28.06. - 06.08.", "Saarland ... 28.06. - 06.08.", "Sachsen ... 10.07. -
//    20.08.", "Sachsen-Anhalt ... 10.07. - 20.08.", "Schleswig-Holstein ... 03.07. - 14.08.", "Thüringen ... 10.07. -
//    20.08." (FACTS 257 to 272).
//  - KMK FER2026_27.pdf: "Während die Kultusministerkonferenz die Sommerferien langfristig vereinbart, werden die übrigen
//    Ferientermine von den Ländern selbst bestimmt."; "Stand: 09.10.2025" (FACTS 273, 286).
//  - KMK Eurydice dossier: school year "am 1. August und endet am 31. Juli"; summer holidays "auf den Zeitraum von Mitte
//    Juni bis Mitte September begrenzt ... sechs Wochen Sommerferien in einem rollierenden System" (FACTS 287, 288).
//  - Time: EinhZeitG para 4; SoZV; summer time 2027 runs from 28 March 2027 to 31 October 2027 (facts-geo/timezone.tsv).
// Our own calculations (scratchpad de/w/G7/csc/v1.py, camp.py, python3 -I): 10 different holiday periods for 16 Länder.
// v1 (days // 7) prints 5 weeks for Hessen/Rheinland-Pfalz/Saarland (40 days) and Mecklenburg-Vorpommern (41 days), 6 for
// Hamburg (42) and Bremen/Niedersachsen (42). camp.py (whole Monday to Friday weeks) prints "Different summer holidays:
// 10" and 6 camp weeks for every group except Hamburg (5, first 05 Jul) and Bremen/Niedersachsen (5, first 12 Jul);
// first camp Mondays: 28 Jun (HE/RP/SL), 05 Jul (HH, BE/BB, SH, MV), 12 Jul (HB/NI, SN/ST/TH), 19 Jul (NW), 02 Aug (BW, BY).
// Weekdays 2027 checked with Python: 28.06. Monday, 01.07. Thursday, 03.07. Saturday, 06.08. Friday, 11.08. Wednesday,
// 14.08. Saturday, 18.08. Wednesday.
// Lesson family: a week is not seven days from any date; align to Mondays before you count.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'from datetime import date, timedelta',
  '',
  '# KMK summer holidays 2027, first and last holiday day (Sommerferienregelung 2025 to 2030)',
  'summer = {',
  '    "Baden-Württemberg": ("29.07.", "11.09."), "Bayern": ("02.08.", "13.09."),',
  '    "Berlin": ("01.07.", "14.08."), "Brandenburg": ("01.07.", "14.08."),',
  '    "Bremen": ("08.07.", "18.08."), "Hamburg": ("01.07.", "11.08."),',
  '    "Hessen": ("28.06.", "06.08."), "Mecklenburg-Vorpommern": ("05.07.", "14.08."),',
  '    "Niedersachsen": ("08.07.", "18.08."), "Nordrhein-Westfalen": ("19.07.", "31.08."),',
  '    "Rheinland-Pfalz": ("28.06.", "06.08."), "Saarland": ("28.06.", "06.08."),',
  '    "Sachsen": ("10.07.", "20.08."), "Sachsen-Anhalt": ("10.07.", "20.08."),',
  '    "Schleswig-Holstein": ("03.07.", "14.08."), "Thüringen": ("10.07.", "20.08."),',
  '}',
  '',
  'def day(text):',
  '    d, m = text.strip(".").split(".")',
  '    return date(2027, int(m), int(d))',
  '',
  '# step 1: Länder with the same dates can share one camp plan',
  'groups = {}',
  'for land, (first, last) in summer.items():',
  '    groups.setdefault((day(first), day(last)), []).append(land)',
  'print("Different summer holidays:", len(groups))',
  '',
  '# a quick first try: holiday days divided by 7',
  'for (first, last), lands in sorted(groups.items()):',
  '    days = (last - first).days + 1',
  '    print(", ".join(lands), "|", days, "days |", days // 7, "weeks")'
].join('\n');

const V2 = [
  '# step 2: count the whole Monday to Friday weeks inside each holiday',
  'for (first, last), lands in sorted(groups.items()):',
  '    monday = first + timedelta(days=(7 - first.weekday()) % 7)',
  '    weeks = []',
  '    while monday + timedelta(days=4) <= last:',
  '        weeks.append(monday)',
  '        monday += timedelta(days=7)',
  '    print(first.strftime("%d %b"), "to", last.strftime("%d %b"), "|", len(weeks), "camp weeks, first",',
  '          weeks[0].strftime("%d %b"), "|", ", ".join(lands))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'door', label: 'Online coding summer camp' },
  slug: 'online-coding-summer-camp-germany',
  code: 'csc',
  accent: '#5A4B75',
  accentRationale: 'An online coding summer in Germany: a dusk violet #5A4B75 for long holiday evenings, cooler than the plum of the AI page and far from the hub fir green; contrast on the paper #FBF8F2 above 6:1 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Online coding summer camp in Germany',
  title: 'Online Coding Summer Camp in Germany 2027, Live in English',
  description: 'Live online coding over the 2027 summer holidays for children and teens in Germany, taught in English: KMK dates for every Land and a count of real camp weeks.',
  ogDescription: 'The sixteen Länder have ten different summer holidays in 2027. Here are the KMK dates, how many full camp weeks each Land really gets, and live coding in English to fill them.',
  twitterDescription: 'An online coding summer for children and teens in Germany, live in English, planned around your Land\'s 2027 holidays.',
  pageName: 'Online Coding Summer Camp in Germany',
  webPageDescription: 'A guide for families in Germany planning a coding summer in 2027: the KMK summer holiday dates for all sixteen Länder, how many full Monday to Friday weeks each holiday holds, what an online coding summer with live mentors looks like, and an original Python planner.',
  courseDescription: 'Live online coding classes in English for children and teens in Germany during the 2027 summer holidays: Scratch, Python, games and AI, in a group of fifteen to twenty or one to one, with one regular mentor, planned around the learner\'s own Land.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Coding summer camp',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#dates', label: 'Dates' },
    { href: '#planner', label: 'Planner' },
    { href: '#summer', label: 'Summer' },
    { href: '#times', label: 'Times' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Germany &middot; Summer 2027 &middot; Ages 6 to 18',
  h1: 'Online coding summer camp in Germany, 2027',
  lede: 'There is no single German summer holiday. In 2027 Hessen\'s schools close on 28 June and Bayern\'s do not reopen until mid-September, and a family in Hamburg has one fewer full week of holiday than a family in Berlin, even though both start on 1 July. An online coding summer only works if it is planned for your own Land. This page gives the official dates, counts the real camp weeks in each holiday, and explains how a live coding summer with us fits into them.',
  secondaryCta: { href: '#planner', label: 'Count your camp weeks' },
  wa: 'Hello Modern Age Coders, we live in Germany and would like to plan an online coding summer in 2027, taught in English. Our Land is: ',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; a summer of building, planned for your Land',
  spec: [
    ['Ages', '6 to 18'],
    ['When', 'Summer holidays 2027'],
    ['Where', 'Online, from anywhere in Germany'],
    ['Teaching', 'Live, in English'],
    ['Format', 'Group of fifteen to twenty, or one to one'],
    ['First class', 'Free']
  ],
  capsuleQ: 'In brief',
  capsule: 'The online coding summer camp for Germany at Modern Age Coders is a holiday run of live online coding classes in English for children and teens aged 6 to 18, from Scratch and Python to games and AI. It is planned around your own Land\'s 2027 summer holidays, which the KMK sets between 28 June and 13 September 2027. A regular mentor matches the learner\'s pace and accent, in a group of fifteen to twenty or one to one.',

  picks: {
    eyebrow: 'Summer courses',
    h2: 'Which course makes a good coding summer?',
    lede: 'Three courses that suit a holiday well: each one ends with something finished that a child can show at the start of the new school year.',
    items: [
      { course: 'game-development-masterclass-for-kids', code: 'CSC / 01', title: 'Game Development for Kids', note: 'Ages 6 to 12. Scratch, Roblox and Minecraft games, a natural summer project with a playable result.' },
      { course: 'python-ai-kids-masterclass', code: 'CSC / 02', title: 'Python and AI for Kids', note: 'Ages 9 to 12. Real typed code over the holiday: games, turtle drawings and small AI projects.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', code: 'CSC / 03', title: 'Vibe Coding for Teens', note: 'Ages 13 to 17. A web or AI project built over the summer with AI help, checked line by line by the teen.' }
    ]
  },

  sections: [
    {
      id: 'dates',
      eyebrow: 'Official dates',
      h2: 'When are the summer holidays 2027 in each German Land?',
      lede: 'The KMK, the standing conference of the Länder education ministers, fixes the summer holidays years ahead. Every other school holiday is set by each Land itself.',
      body: [
        { kind: 'table', numCols: [], caption: 'Summer holidays 2027 by Land, first and last day of the holiday', head: ['Land', 'First day', 'Last day'], rows: [
          ['Hessen', 'Monday 28 June 2027', 'Friday 6 August 2027'],
          ['Rheinland-Pfalz', 'Monday 28 June 2027', 'Friday 6 August 2027'],
          ['Saarland', 'Monday 28 June 2027', 'Friday 6 August 2027'],
          ['Berlin', 'Thursday 1 July 2027', 'Saturday 14 August 2027'],
          ['Brandenburg', 'Thursday 1 July 2027', 'Saturday 14 August 2027'],
          ['Hamburg', 'Thursday 1 July 2027', 'Wednesday 11 August 2027'],
          ['Schleswig-Holstein', 'Saturday 3 July 2027', 'Saturday 14 August 2027'],
          ['Mecklenburg-Vorpommern', 'Monday 5 July 2027', 'Saturday 14 August 2027'],
          ['Bremen', 'Thursday 8 July 2027', 'Wednesday 18 August 2027'],
          ['Niedersachsen', 'Thursday 8 July 2027', 'Wednesday 18 August 2027'],
          ['Sachsen', 'Saturday 10 July 2027', 'Friday 20 August 2027'],
          ['Sachsen-Anhalt', 'Saturday 10 July 2027', 'Friday 20 August 2027'],
          ['Thüringen', 'Saturday 10 July 2027', 'Friday 20 August 2027'],
          ['Nordrhein-Westfalen', 'Monday 19 July 2027', 'Tuesday 31 August 2027'],
          ['Baden-Württemberg', 'Thursday 29 July 2027', 'Saturday 11 September 2027'],
          ['Bayern', 'Monday 2 August 2027', 'Monday 13 September 2027']
        ] },
        { kind: 'source', html: 'Source: KMK, Sommerferienregelung 2025 bis 2030, the 2027 column, which gives each Land\'s first and last holiday day; cross-checked with the KMK holiday overview 2026/27 (dated 9 October 2025). The weekdays were added by us. Read on 3 November 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'Why the dates move every year',
          left: [
            'The KMK\'s description of the German school system says the six weeks of summer holiday are fixed in a rolling system within the period from mid-June to mid-September, so that not every Land is on holiday at once. The order changes from year to year.',
            'The school year itself legally begins on 1 August and ends on 31 July, but when lessons really stop and start depends on these holiday dates.'
          ],
          rightH3: 'What that means for a coding summer',
          right: [
            'A camp with one fixed start date for all of Germany would land in the middle of the holidays for some children and in the last week of school for others. An online summer with live mentors can start on a different Monday for each family.',
            'Watch the edges, too. Several Länder start on a Thursday or a Saturday and finish midweek, so the number of full weeks is not what the number of days suggests, as the planner below shows.'
          ] }
      ]
    },
    {
      id: 'planner',
      tint: 'tint',
      eyebrow: 'Worked example, ours',
      h2: 'How many full camp weeks does each Land get in summer 2027?',
      lede: 'A camp week runs Monday to Friday. We let Python count those weeks for every Land, first the quick way, then the right way, and the two disagree in both directions.',
      body: [
        { kind: 'code', label: 'Version 1: group the Länder, then divide the days by seven', lang: 'Python', code: V1, note: 'It prints <code>Different summer holidays: 10</code>, then one line per group, for example <code>Hessen, Rheinland-Pfalz, Saarland | 40 days | 5 weeks</code>, <code>Hamburg | 42 days | 6 weeks</code> and <code>Bremen, Niedersachsen | 42 days | 6 weeks</code>.' },
        { kind: 'p', mt: true, html: 'The first step is already useful. Sixteen Länder share only ten different holiday periods, because neighbours often keep the same dates: Berlin with Brandenburg, Bremen with Niedersachsen, Hessen with Rheinland-Pfalz and the Saarland, and Sachsen with Sachsen-Anhalt and Thüringen. The second step looks sensible too, and it is wrong. A holiday of 42 days is six weeks long on paper, but if it starts on a Thursday and ends on a Wednesday, it does not contain six weeks that run Monday to Friday.' },
        { kind: 'code', label: 'Version 2: find the first Monday and count whole Monday to Friday weeks', lang: 'Python', code: V2, note: 'Run after Version 1. It prints, among others, <code>01 Jul to 11 Aug | 5 camp weeks, first 05 Jul | Hamburg</code>, <code>28 Jun to 06 Aug | 6 camp weeks, first 28 Jun | Hessen, Rheinland-Pfalz, Saarland</code> and <code>08 Jul to 18 Aug | 5 camp weeks, first 12 Jul | Bremen, Niedersachsen</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'Days divided by seven against whole Monday to Friday weeks, summer 2027 (our calculation)', head: ['Länder with the same holiday', 'Holiday days', 'Days divided by 7', 'Whole camp weeks', 'First camp Monday'], rows: [
          ['Hessen, Rheinland-Pfalz, Saarland', '40', '5', '6', '28 June 2027'],
          ['Hamburg', '42', '6', '5', '5 July 2027'],
          ['Berlin, Brandenburg', '45', '6', '6', '5 July 2027'],
          ['Schleswig-Holstein', '43', '6', '6', '5 July 2027'],
          ['Mecklenburg-Vorpommern', '41', '5', '6', '5 July 2027'],
          ['Bremen, Niedersachsen', '42', '6', '5', '12 July 2027'],
          ['Sachsen, Sachsen-Anhalt, Thüringen', '42', '6', '6', '12 July 2027'],
          ['Nordrhein-Westfalen', '44', '6', '6', '19 July 2027'],
          ['Baden-Württemberg', '45', '6', '6', '2 August 2027'],
          ['Bayern', '43', '6', '6', '2 August 2027']
        ] },
        { kind: 'source', html: 'Holiday dates: KMK, Sommerferienregelung 2025 bis 2030. Grouping, day counts, weekdays and weeks: our own Python, run on 3 November 2026. Days are counted with both the first and the last holiday day included.' },
        { kind: 'p', mt: true, html: 'Four results change. Hessen, Rheinland-Pfalz and the Saarland have only 40 days, yet they get six full camp weeks, because their holiday starts on a Monday and ends on a Friday with nothing wasted. Mecklenburg-Vorpommern also gains a week, starting on a Monday. Hamburg, Bremen and Niedersachsen lose one: a Thursday start and a Wednesday finish leave partial weeks at both ends. A family in Hamburg planning six weeks of anything from 1 July 2027 would find the last one cut short by school on Thursday 12 August 2027.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Your Land.</strong> Find your Land in the output of Version 2 and write down its first and last camp Monday.',
          '<strong>Travel weeks.</strong> Change the program to leave out the first week and the last week, when many families travel. How many weeks are left for each group?',
          '<strong>Weekend camp.</strong> Count Saturday and Sunday pairs instead of Monday to Friday weeks. Which Land gains the most?',
          '<strong>Going further.</strong> Add the 2028 dates from the same KMK table and find which Land has the latest holiday in both years.'
        ] }
      ]
    },
    {
      id: 'summer',
      eyebrow: 'What the summer looks like',
      h2: 'What does an online coding summer with live mentors involve?',
      lede: 'It is our normal live teaching, timed for the holiday: the same mentors, the same courses, a clear goal for the weeks your Land is off school.',
      body: [
        { kind: 'three', cells: [
          { h3: 'A goal for the summer', p: 'In the free first class the mentor and the learner agree what should exist at the end of the holiday: a Scratch game, a Python quiz, a small website, an AI project. A visible goal keeps a holiday course from drifting, and gives a child something to show when school starts again.' },
          { h3: 'Planned around your Land', p: 'Learners join from the camp week that fits their own holiday, not a date set for the whole country. A child in Bayern can begin in August while a child in Hessen has already finished, and both get a full run of weeks.' },
          { h3: 'Live, not recorded', p: 'Every class is live with a mentor who sees the learner\'s screen, answers questions on the spot and sets the next task. There are no pre-recorded videos to watch alone, which is often why holiday courses fade after a week.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Group or one to one',
          left: [
            'In a group of fifteen to twenty, learners at a similar level work through the course together with one mentor. It suits children who like company and a steady rhythm.',
            'One to one suits a learner with a particular project, a travel-heavy summer or a need to go slower or faster. The mentor and the family agree how the lessons are spread across the weeks your Land is on holiday.'
          ],
          rightH3: 'Afterwards',
          right: [
            'Many families stop when school starts; the monthly plan allows that. Others carry on into the school year at a lower intensity, because a summer of coding is far easier to keep going than to restart.',
            'Either way, the learner keeps their projects and code. Nothing is locked inside our platform.'
          ] },
        { kind: 'p', mt: true, html: 'An online summer is not the same as a residential camp, and we do not pretend it is. There is no lake and no campfire. What it offers instead is a real teacher for each learner, at home, in the weeks that suit your own Land and your travel, and a finished project at the end. Many families combine the two: a week away with friends, and coding in the weeks around it.' }
      ]
    },
    {
      id: 'times',
      tint: 'tint',
      eyebrow: 'Holiday class times',
      h2: 'What time are summer classes in Germany?',
      lede: 'In the holidays, mornings become possible as well as afternoons. In summer India is three and a half hours ahead of Germany, so a German morning is an Indian afternoon.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example summer 2027 class times in Germany and India (German summer time)', head: ['Germany (MESZ)', 'India', 'Who it suits'], rows: [
          ['10:00', '13:30', 'Younger children, fresh in the morning'],
          ['11:45', '15:15', 'Learners who sleep in during holidays'],
          ['13:45', '17:15', 'Teens after a late start'],
          ['Saturday 10:45', '14:15', 'Families who travel during the week']
        ] },
        { kind: 'source', html: 'Germany is on summer time, MESZ (UTC+2), from 28 March 2027 to 31 October 2027 under the Einheitenzeitgesetz and the Sommerzeitverordnung, so the whole summer holiday of every Land falls in it. India stays at UTC+5:30, three and a half hours ahead. These times are examples, not fixed batches.' },
        { kind: 'p', mt: true, html: 'Booking the free first class shows the available times in your own clock, so there is nothing to convert by hand. If your child is travelling abroad for part of the summer, a one-to-one time can follow them into another time zone.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'A summer in stages',
    h2: 'What a coding summer can achieve, week by week',
    lede: 'Our own outline for a six-week holiday. Five-week Länder simply compress the middle.',
    table: { caption: 'Summer outline (ours, for a learner who already knows the basics of their course)', head: ['Camp week', 'Focus', 'By the end of the week'], rows: [
      ['1', 'Goal and plan', 'The project is chosen and sketched on paper'],
      ['2', 'First version', 'Something runs, however small'],
      ['3 to 4', 'The real work', 'The main features are built and tested'],
      ['5', 'Polish', 'Bugs fixed, a title screen, instructions for a player'],
      ['6', 'Show and tell', 'The learner presents the project and explains one tricky part']
    ] },
    left: { h3: 'For learners', ps: [
      'Pick a project you would like to show someone in September, not one you think you ought to do.',
      'Get a small version working in week two. Big plans that never run teach very little.'
    ] },
    right: { h3: 'For parents', ps: [
      'Count your Land\'s camp weeks before you book holidays, not after.',
      'Ask to see the project at the end of each week. Five minutes of attention keeps a summer project alive.'
    ] }
  },

  catalogue: {
    eyebrow: 'More summer options',
    h2: 'Nine more courses that work well over a holiday',
    lede: 'All live, all in English, each with a regular mentor, in a group or alone.',
    bands: [
      { num: 'I', h3: 'Ages 6 to 9', sub: 'Blocks and building', courses: [
        { code: 'CSC / SIX / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Block coding, from stories to small apps.' },
        { code: 'CSC / SIX / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Building in Minecraft with code.' },
        { code: 'CSC / SIX / 03', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Number sense to keep sharp over the holiday.' }
      ] },
      { num: 'II', h3: 'Ages 9 to 12', sub: 'Typed code and games', courses: [
        { code: 'CSC / NINE / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'A Roblox game scripted in Luau.' },
        { code: 'CSC / NINE / 02', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe coding for kids', blurb: 'Scratch and games with careful AI help.' },
        { code: 'CSC / NINE / 03', slug: 'kids-ai-web-development-course', title: 'Websites for kids', blurb: 'A real website, designed by the child.' }
      ] },
      { num: 'III', h3: 'Ages 13 to 18', sub: 'Bigger projects', courses: [
        { code: 'CSC / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'From scripts to a full summer project.' },
        { code: 'CSC / TEEN / 02', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development for teens', blurb: 'A finished game in Unity and C#.' },
        { code: 'CSC / TEEN / 03', slug: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', title: 'Hackathon prep for teens', blurb: 'Building fast, in a team, under a deadline.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it runs',
    h2: 'How the online coding summer runs for families in Germany',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Holiday mornings', l: 'From about 10:00 German summer time.' },
      { time: 'Afternoons', l: 'Early afternoon slots for teens and late risers.' },
      { time: 'One to one', l: 'Times that move with your travel plans.' }
    ],
    cells: [
      { h3: 'One project goal', p: 'Agreed in the first class, shown at the end.' },
      { h3: 'Your Land\'s weeks', p: 'Start on the Monday that suits your holiday.' },
      { h3: 'Patient English', p: 'Clear, slow and repeated when needed.' },
      { h3: 'Regular mentor', p: 'The same person throughout the summer.' },
      { h3: 'Live every time', p: 'No recordings to watch alone.' },
      { h3: 'Group or private', p: 'Fifteen to twenty learners, or one.' }
    ]
  },

  projectsH2: 'Projects our students have finished',
  projectsLede: 'A few of the projects our students worldwide have completed; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has many more.',
  reviewsLede: 'Families and students reviewed us on Google; their words appear as written.',

  fees: {
    h2: 'Fees for an online coding summer in Germany',
    lede: 'Summer classes on this page run on the normal monthly fee: pay for the holiday month or months and stop afterwards if you wish. The fee appears in euro, worked out at the European Central Bank reference rate, and is charged in US dollars, so your bank converts it and the final euro amount can differ slightly.',
    free: ['A free first class', 'A summer project goal agreed', 'No card needed to book'],
    group: ['Fifteen to twenty learners of a similar level', 'One mentor through the holiday', 'Two live classes a week', 'Monthly, so the summer can be the only month'],
    one: ['A learner and a mentor, nobody else', 'A project and pace of their own', 'Lessons spread to suit your travel']
  },

  faq: {
    eyebrow: 'Families in Germany ask',
    h2: 'Online coding summer camp in Germany: questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Every class is live and taught in English only, by a mentor based in India who adapts to the learner\'s pace and accent. Over a summer that also means several weeks of spoken English practice, without it ever being the subject of the lesson.' },
      { q: 'When are the summer holidays 2027 in my Land?', a: 'The KMK has fixed them: they start with Hessen, Rheinland-Pfalz and the Saarland on 28 June 2027 and end with Bayern on 13 September 2027. The table on this page lists all sixteen Länder.' },
      { q: 'Why do some Länder get five camp weeks and others six?', a: 'Because holidays start and end on different weekdays. By our count, Hamburg, Bremen and Niedersachsen hold five full Monday to Friday weeks in summer 2027, because their holidays start on a Thursday and end on a Wednesday; every other Land holds six.' },
      { q: 'Is this a residential camp?', a: 'No. It is live online teaching at home, with a mentor on a video call. There is no travel and no overnight stay.' },
      { q: 'What ages is it for?', a: 'Children and teens from 6 to 18. Younger children usually start with block coding or Minecraft, older ones with Python, games, websites or AI projects.' },
      { q: 'When are the classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. In the holidays that often means late mornings or early afternoons in German summer time.' },
      { q: 'Can we start in the middle of the holiday?', a: 'Yes. Because each family starts on its own Monday, a learner can join after a family trip and still have several weeks of classes before school.' },
      { q: 'What does it cost?', a: 'Summer classes use the normal monthly fee, shown in euro at the European Central Bank reference rate and charged in US dollars, which your bank converts. The first class is free.' },
      { q: 'Can my child continue after the summer?', a: 'Yes, but there is no obligation. The plan is monthly, so you can stop when school starts or carry on through the school year.' },
      { q: 'What if we travel abroad during the holiday?', a: 'A one-to-one learner can move lesson times to suit another time zone. A group learner can join from anywhere with a stable internet connection at the group\'s usual time.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Also useful',
    h2: 'Related pages',
    lede: 'More pages for families in Germany and for holiday coding.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'The hub, with the days every Land is on holiday at once.' },
      { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids in Berlin', p: 'For Berlin families, summer or not.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning in Germany', p: 'A bigger summer project for teens.' },
      { href: '/coding-summer-camp-for-middle-schoolers', label: 'Coding summer camp for middle schoolers', p: 'Our general guide for ages 11 to 14.' },
      { href: '/game-design-summer-camp-for-teens', label: 'Game design summer camp for teens', p: 'A summer of game making.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What happens in a live class.' }
    ]
  },

  start: {
    h2: 'Book a free first class for the summer',
    lede: 'Tell us your Land and your travel plans. In the free class the mentor finds the learner\'s level, agrees a summer project and suggests the camp weeks that fit. All in English, at the learner\'s pace.',
    readFirst: 'To read more first, see <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or <a class="ag-inline-link" href="/courses">every course we run</a>.',
    note: 'Lessons are live online in English, with mentors based in India. WhatsApp in English is the fastest way to reach us.',
    formNote: 'The first class is free; no card details are asked for.'
  },

  footer: {
    cols: [
      { h4: 'Summer coding', links: [
        { href: '/coding-summer-camp-for-middle-schoolers', label: 'Summer camp, middle school' },
        { href: '/game-design-summer-camp-for-teens', label: 'Game design summer camp' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids in Berlin' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths in English' }
      ] }
    ],
    bottomRight: 'Start on a Monday'
  },

  personalityCss: `
.ag-root.ag-csc .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-csc .ag-capsule { border-left-width: 3px; }
.ag-root.ag-csc .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-csc .ag-table td:nth-child(n+2) { font-variant-numeric: tabular-nums; }
.ag-root.ag-csc .ag-code-head b { letter-spacing: 0.02em; }
`,

  dossier: {
    curriculumAuthority: 'KMK Sommerferienregelung 2025 bis 2030 (2027 column); KMK Ferienübersicht 2026/27 (Stand 9 October 2025); KMK Eurydice dossier on the school year and the rolling summer system; Einheitenzeitgesetz and Sommerzeitverordnung. Read 3 November 2026.',
    localProject: 'Start on a Monday: an original Python planner on the KMK 2027 summer dates that groups 16 Länder into 10 holiday periods and counts whole Monday to Friday weeks; dividing days by 7 gets four groups wrong (Hessen/Rheinland-Pfalz/Saarland and Mecklenburg-Vorpommern gain a week, Hamburg and Bremen/Niedersachsen lose one). Lesson family: align to Mondays before you count weeks.',
    requiredMentions: ['Different summer holidays: 10', 'Hessen, Rheinland-Pfalz, Saarland | 40 days | 5 weeks', '01 Jul to 11 Aug | 5 camp weeks, first 05 Jul | Hamburg', '08 Jul to 18 Aug | 5 camp weeks, first 12 Jul | Bremen, Niedersachsen', 'Monday 2 August 2027', 'Saturday 11 September 2027', 'Start on a Monday', 'cut short by school on Thursday 12 August 2027'],
    sources: [
      { claim: 'Summer holiday dates 2027 for all sixteen Länder.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/Sommerferienregelung_2025-2030_2022-09-21.pdf' },
      { claim: 'KMK fixes summer holidays; other holidays set by each Land; overview dated 9 October 2025.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'School year 1 August to 31 July; six weeks of summer holiday in a rolling system from mid-June to mid-September.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Eurydice/DE/dossier_de_ebook.pdf' },
      { claim: 'German legal time MEZ and MESZ.', url: 'https://www.gesetze-im-internet.de/me_einhg/BJNR007090969.html' }
    ],
    rejectedClaims: [
      'A separate camp fee: the template renders only the monthly fees, so no camp price is shown or implied.',
      'Fixed session counts or batch sizes for the summer: none beyond the brand facts (group of fifteen to twenty, or one to one).',
      'The days when all sixteen Länder are on holiday at once: that is the hub\'s project and is not repeated here.',
      'Any affiliation with the KMK or a Land ministry: none.',
      'German-language teaching: classes are in English only.'
    ]
  }
};
